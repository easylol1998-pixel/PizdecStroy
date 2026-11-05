"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const STORAGE_KEY = "pizda_cookie_consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (!saved) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  function accept() {
    try {
      localStorage.setItem(STORAGE_KEY, "accepted");
    } catch {
      /* ignore */
    }
    setVisible(false);
  }

  function reject() {
    try {
      localStorage.setItem(STORAGE_KEY, "rejected");
    } catch {
      /* ignore */
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 sm:p-6">
      <div className="max-w-4xl mx-auto bg-[#111C2E] border border-[#1E293B] rounded-2xl shadow-2xl p-5 sm:p-6 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
        <div className="flex-1 text-sm text-gray-300 leading-relaxed">
          <p>
            Мы используем необходимые cookie для работы сайта. Аналитические и маркетинговые
            cookie включаются только с вашего согласия. Подробнее — в{" "}
            <Link href="/politika" className="text-[#E85D04] hover:underline">
              Политике конфиденциальности
            </Link>
            .
          </p>
        </div>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={reject}
            className="px-4 py-2 text-sm text-gray-400 hover:text-white border border-[#1E293B] rounded-lg transition"
          >
            Только необходимые
          </button>
          <button
            onClick={accept}
            className="px-5 py-2 text-sm font-semibold bg-[#E85D04] hover:bg-[#F48C06] text-white rounded-lg transition"
          >
            Принять
          </button>
        </div>
      </div>
    </div>
  );
}
