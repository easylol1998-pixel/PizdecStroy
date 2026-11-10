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
    <header className="sticky top-0 z-50 bg-[#F7F4EF]/85 backdrop-blur-md border-b border-[#E8E4DE]/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 bg-gradient-to-br from-[#E85D04] to-[#F48C06] rounded-xl flex items-center justify-center font-bold text-white text-lg shadow-sm group-hover:scale-105 transition">
              P
            </div>
            <span className="font-bold text-xl tracking-tight text-[#1A1A1A]">
              PizDa <span className="text-[#E85D04]">Строй</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-7">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-[#6B7280] hover:text-[#1A1A1A] transition"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/kontakty"
              className="btn-primary text-sm !py-2 !px-5"
            >
              Оставить заявку
            </Link>
          </nav>

          <button
            className="md:hidden p-2 text-[#6B7280]"
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
          <div className="md:hidden pb-4 border-t border-[#E8E4DE] mt-2 pt-4 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-[#6B7280] hover:text-[#1A1A1A] py-2"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/kontakty"
              className="block btn-primary text-center"
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
