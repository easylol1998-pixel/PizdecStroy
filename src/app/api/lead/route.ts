import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + 60_000 });
    return false;
  }
  if (entry.count >= 5) return true;
  entry.count += 1;
  return false;
}

type Lead = {
  id: string;
  name: string;
  phone: string;
  email?: string;
  service?: string;
  message?: string;
  ip: string;
  createdAt: string;
};

async function saveLead(lead: Lead): Promise<void> {
  const dataDir = path.join(process.cwd(), "data");
  const filePath = path.join(dataDir, "leads.json");
  try {
    await fs.mkdir(dataDir, { recursive: true });
    let leads: Lead[] = [];
    try {
      const raw = await fs.readFile(filePath, "utf-8");
      leads = JSON.parse(raw);
      if (!Array.isArray(leads)) leads = [];
    } catch {
      leads = [];
    }
    leads.push(lead);
    if (leads.length > 500) leads = leads.slice(-500);
    await fs.writeFile(filePath, JSON.stringify(leads, null, 2), "utf-8");
  } catch (err) {
    console.error("[LEAD] Failed to write file, logging only:", err);
  }
  console.log("[LEAD]", {
    id: lead.id,
    name: lead.name,
    phone: lead.phone,
    email: lead.email,
    service: lead.service,
    message: lead.message ? lead.message.slice(0, 100) : undefined,
    ip: lead.ip,
    ts: lead.createdAt,
  });
}

export async function POST(req: NextRequest) {
  try {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Слишком много запросов. Попробуйте через минуту." },
        { status: 429 }
      );
    }

    const body = await req.json();
    const { name, phone, email, service, message, consent } = body;

    if (!name || typeof name !== "string" || name.trim().length < 2 || name.length > 50) {
      return NextResponse.json({ error: "Укажите корректное имя" }, { status: 400 });
    }
    if (!phone || typeof phone !== "string" || phone.replace(/\D/g, "").length < 10) {
      return NextResponse.json({ error: "Укажите корректный телефон" }, { status: 400 });
    }
    if (!consent) {
      return NextResponse.json(
        { error: "Необходимо согласие на обработку персональных данных" },
        { status: 400 }
      );
    }

    const cleanName = name.trim().slice(0, 50);
    const cleanPhone = phone.replace(/[^\d+()\-\s]/g, "").slice(0, 20);
    const cleanEmail = typeof email === "string" ? email.trim().slice(0, 100) : "";
    const cleanService = typeof service === "string" ? service.slice(0, 50) : "";
    const cleanMessage = typeof message === "string" ? message.trim().slice(0, 1000) : "";

    const lead: Lead = {
      id: `lead_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
      name: cleanName,
      phone: cleanPhone,
      email: cleanEmail || undefined,
      service: cleanService || undefined,
      message: cleanMessage || undefined,
      ip,
      createdAt: new Date().toISOString(),
    };

    await saveLead(lead);

    return NextResponse.json({
      success: true,
      message: "Заявка принята",
      id: lead.id,
    });
  } catch {
    return NextResponse.json(
      { error: "Внутренняя ошибка сервера" },
      { status: 500 }
    );
  }
}
