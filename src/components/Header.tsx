"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Главная" },
  { href: "/uslugi", label: "Услуги" },
  { href: "/portfolio", label: "Портфолио" },
  { href: "/o-kompanii", label: "О компании" },
  { href: "/kontakty", label: "Контакты" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#0A1628]/95 backdrop-blur border-b border-[#1E293B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 bg-[#E85D04] rounded-lg flex items-center justify-center font-bold text-white text-lg group-hover:scale-105 transition">
              P
            </div>
            <span className="font-bold text-xl tracking-tight">
              PizDa <span className="text-[#E85D04]">Строй</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-gray-300 hover:text-[#E85D04] transition"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/kontakty"
              className="bg-[#E85D04] hover:bg-[#F48C06] text-white px-5 py-2 rounded-lg text-sm font-semibold"
            >
              Оставить заявку
            </Link>
          </nav>

          <button
            className="md:hidden p-2 text-gray-300"
            onClick={() => setOpen(!open)}
            aria-label="Меню"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 border-t border-[#1E293B] mt-2 pt-4 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-gray-300 hover:text-[#E85D04] py-2"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/kontakty"
              className="block bg-[#E85D04] text-white text-center py-2 rounded-lg font-semibold"
              onClick={() => setOpen(false)}
            >
              Оставить заявку
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
