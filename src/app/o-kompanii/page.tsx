import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "О компании",
  description: "PizDa Строй — строительная компания в Санкт-Петербурге и ЛО. Свои бригады, фиксированная смета, гарантия.",
};

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">О компании</h1>
        <p className="text-gray-400 text-lg max-w-3xl">
          Мы строим загородные дома и делаем ремонт квартир в Санкт-Петербурге и Ленинградской области.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 mb-16">
        <div className="space-y-6 text-gray-300 leading-relaxed">
          <p>
            PizDa Строй — команда, которая берёт на себя полный цикл работ: от проекта и сметы до сдачи объекта.
            Мы не привлекаем случайный субподряд — работаем своими бригадами и несём ответственность за результат.
          </p>
          <p>
            Фиксированная смета, понятные сроки, фотоотчёты и доступ клиента в чат объекта — это стандарт нашей работы.
          </p>
        </div>
        <div className="bg-[#111C2E] border border-[#1E293B] rounded-2xl p-8 space-y-4">
          <div className="flex justify-between border-b border-[#1E293B] pb-3">
            <span className="text-gray-400">Регион</span>
            <span>СПб и ЛО</span>
          </div>
          <div className="flex justify-between border-b border-[#1E293B] pb-3">
            <span className="text-gray-400">Гарантия</span>
            <span>до 5 лет</span>
          </div>
          <div className="flex justify-between border-b border-[#1E293B] pb-3">
            <span className="text-gray-400">Смета</span>
            <span>фиксированная</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Бригады</span>
            <span>свои</span>
          </div>
        </div>
      </div>

      <div className="text-center">
        <Link
          href="/kontakty"
          className="inline-block bg-[#E85D04] hover:bg-[#F48C06] text-white font-semibold px-8 py-3.5 rounded-lg"
        >
          Связаться с нами
        </Link>
      </div>
    </div>
  );
}
