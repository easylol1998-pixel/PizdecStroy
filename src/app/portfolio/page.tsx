import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Портфолио",
  description: "Реализованные объекты PizDa Строй: загородные дома и ремонт квартир в СПб и ЛО",
};

const projects = [
  {
    title: "Каркасный дом 120 м²",
    location: "Ленинградская область",
    type: "Загородный дом",
    year: "2025",
  },
  {
    title: "Капитальный ремонт квартиры 65 м²",
    location: "Санкт-Петербург",
    type: "Ремонт",
    year: "2025",
  },
  {
    title: "Газобетонный дом 180 м²",
    location: "ЛО, Всеволожский район",
    type: "Загородный дом",
    year: "2024",
  },
  {
    title: "Дизайнерский ремонт 90 м²",
    location: "Санкт-Петербург",
    type: "Ремонт",
    year: "2024",
  },
];

export default function PortfolioPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Портфолио</h1>
        <p className="text-gray-400 text-lg max-w-3xl">
          Примеры реализованных объектов. Фото и подробности — по запросу.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        {projects.map((p) => (
          <div
            key={p.title}
            className="bg-[#111C2E] border border-[#1E293B] rounded-2xl p-6 hover:border-[#E85D04]/40 transition"
          >
            <div className="aspect-video bg-[#0A1628] rounded-xl mb-4 flex items-center justify-center text-gray-600 text-sm">
              Фото объекта
            </div>
            <p className="text-xs text-[#E85D04] font-medium mb-1">{p.type} · {p.year}</p>
            <h2 className="text-xl font-semibold mb-1">{p.title}</h2>
            <p className="text-gray-400 text-sm">{p.location}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link
          href="/kontakty"
          className="inline-block bg-[#E85D04] hover:bg-[#F48C06] text-white font-semibold px-8 py-3.5 rounded-lg"
        >
          Обсудить ваш проект
        </Link>
      </div>
    </div>
  );
}
