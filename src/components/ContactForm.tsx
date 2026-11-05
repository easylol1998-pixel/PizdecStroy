"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";

function generateCaptcha() {
  const a = Math.floor(Math.random() * 8) + 2;
  const b = Math.floor(Math.random() * 8) + 1;
  return { a, b, answer: a + b };
}

export default function ContactForm({ compact = false }: { compact?: boolean }) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [captcha, setCaptcha] = useState(() => generateCaptcha());
  const [captchaInput, setCaptchaInput] = useState("");

  const refreshCaptcha = () => {
    setCaptcha(generateCaptcha());
    setCaptchaInput("");
  };

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    if (formData.get("website")) {
      setStatus("success");
      return;
    }

    const consent = formData.get("consent");
    if (!consent) {
      setStatus("error");
      setErrorMsg("Необходимо дать согласие на обработку персональных данных");
      return;
    }

    const userAnswer = parseInt(captchaInput.trim(), 10);
    if (isNaN(userAnswer) || userAnswer !== captcha.answer) {
      setStatus("error");
      setErrorMsg("Неверный ответ на проверочный вопрос. Попробуйте ещё раз.");
      refreshCaptcha();
      return;
    }

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          phone: formData.get("phone"),
          email: formData.get("email") || "",
          service: formData.get("service") || "",
          message: formData.get("message") || "",
          consent: true,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Ошибка отправки");
      }

      setStatus("success");
      form.reset();
      setCaptchaInput("");
      refreshCaptcha();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Произошла ошибка. Попробуйте позже.");
      refreshCaptcha();
    }
  }

  if (status === "success") {
    return (
      <div className="bg-[#111C2E] border border-[#E85D04]/30 rounded-xl p-8 text-center">
        <div className="text-4xl mb-4">✓</div>
        <h3 className="text-xl font-semibold text-white mb-2">Заявка отправлена!</h3>
        <p className="text-gray-400">
          Мы свяжемся с вами в ближайшее время. Обычно отвечаем в течение 30 минут в рабочее время.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-[#E85D04] hover:underline text-sm"
        >
          Отправить ещё одну заявку
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="absolute opacity-0 pointer-events-none h-0 w-0"
        aria-hidden="true"
      />

      <div className={compact ? "grid grid-cols-1 gap-4" : "grid grid-cols-1 sm:grid-cols-2 gap-5"}>
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1.5">
            Имя <span className="text-[#E85D04]">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            minLength={2}
            maxLength={50}
            placeholder="Как к вам обращаться"
            className="w-full bg-[#0A1628] border border-[#1E293B] rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-[#E85D04]"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1.5">
            Телефон <span className="text-[#E85D04]">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="+7 (___) ___-__-__"
            pattern="[\\+]?[0-9\\s\\-\\(\\)]{10,18}"
            className="w-full bg-[#0A1628] border border-[#1E293B] rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-[#E85D04]"
          />
        </div>
      </div>

      {!compact && (
        <>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1.5">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="email@example.com"
              className="w-full bg-[#0A1628] border border-[#1E293B] rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-[#E85D04]"
            />
          </div>

          <div>
            <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-1.5">
              Интересующая услуга
            </label>
            <select
              id="service"
              name="service"
              className="w-full bg-[#0A1628] border border-[#1E293B] rounded-lg px-4 py-3 text-white focus:border-[#E85D04]"
            >
              <option value="">Выберите услугу</option>
              <option value="house">Загородный дом под ключ</option>
              <option value="repair">Ремонт квартиры</option>
              <option value="project">Проектирование</option>
              <option value="engineering">Инженерные системы</option>
              <option value="other">Другое</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1.5">
              Комментарий
            </label>
            <textarea
              id="message"
              name="message"
              rows={3}
              maxLength={1000}
              placeholder="Кратко опишите задачу или задайте вопрос"
              className="w-full bg-[#0A1628] border border-[#1E293B] rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-[#E85D04] resize-none"
            />
          </div>
        </>
      )}

      <div>
        <label htmlFor="captcha" className="block text-sm font-medium text-gray-300 mb-1.5">
          Проверка: сколько будет {captcha.a} + {captcha.b}? <span className="text-[#E85D04]">*</span>
        </label>
        <div className="flex gap-3 items-center">
          <input
            id="captcha"
            type="text"
            inputMode="numeric"
            required
            value={captchaInput}
            onChange={(e) => setCaptchaInput(e.target.value)}
            placeholder="Ответ"
            className="w-32 bg-[#0A1628] border border-[#1E293B] rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-[#E85D04]"
            autoComplete="off"
          />
          <button
            type="button"
            onClick={refreshCaptcha}
            className="text-sm text-gray-400 hover:text-[#E85D04] px-2"
            title="Обновить пример"
          >
            ↻
          </button>
        </div>
      </div>

      <div className="flex items-start gap-3">
        <input
          id="consent"
          name="consent"
          type="checkbox"
          required
          className="mt-1 w-4 h-4 rounded border-[#1E293B] bg-[#0A1628] text-[#E85D04] focus:ring-[#E85D04]"
        />
        <label htmlFor="consent" className="text-sm text-gray-400 leading-snug">
          Я даю согласие на обработку персональных данных в соответствии с{" "}
          <Link href="/politika" target="_blank" className="text-[#E85D04] hover:underline">
            Политикой конфиденциальности
          </Link>{" "}
          и{" "}
          <Link href="/soglasie" target="_blank" className="text-[#E85D04] hover:underline">
            Согласием на обработку ПДн
          </Link>
          . <span className="text-[#E85D04]">*</span>
        </label>
      </div>

      {status === "error" && (
        <div className="bg-red-900/30 border border-red-700 text-red-300 text-sm rounded-lg px-4 py-3">
          {errorMsg}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-[#E85D04] hover:bg-[#F48C06] disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-3.5 rounded-lg transition"
      >
        {status === "loading" ? "Отправляем..." : "Отправить заявку"}
      </button>

      <p className="text-xs text-gray-500 text-center">
        Нажимая кнопку, вы подтверждаете, что ознакомлены с документами по обработке персональных
        данных. Данные обрабатываются на серверах в Российской Федерации.
      </p>
    </form>
  );
}
