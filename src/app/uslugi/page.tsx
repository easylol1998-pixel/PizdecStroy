import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Услуги",
  description: "Строительство загородных домов, ремонт квартир, проектирование и инженерные системы в СПб и ЛО",
};

const services = [
  {
    id: "houses",
    title: "Строительство загородных домов под ключ",
    description:
      "Полный цикл: проектирование, фундамент, коробка, кровля, инженерия, отделка. Работаем с каркасными, газобетонными и кирпичными технологиями. Фиксированная смета и календарный план.",
    features: ["Индивидуальный или типовой проект", "Смета без скрытых работ", "Фотоотчёты этапов", "Гарантия до 5 лет"],
  },
  {
    id: "repair",
    title: "Ремонт квартир",
    description:
      "Косметический, капитальный и ремонт по дизайн-проекту. Новостройки и вторичка. Договор, поэтапная оплата, гарантия на работы.",
    features: ["Дизайн и комплектация", "Черновые и чистовые работы", "Инженерия под ключ", "Уборка после ремонта"],
  },
  {
    id: "project",
    title: "Проектирование",
    description:
      "Архитектурные и конструктивные решения, планировки, 3D-визуализация. Учитываем нормы, участок и ваши пожелания.",
    features: ["Эскизный и рабочий проект", "3D-визуализация", "Согласования", "Авторский надзор"],
  },
  {
    id: "engineering",
    title: "Инженерные системы",
    description:
      "Отопление, водоснабжение, канализация, электрика, вентиляция и кондиционирование. Проектирование и монтаж.",
    features: ["Расчёт нагрузок", "Подбор оборудования", "Монтаж и пусконаладка", "Сервисное обслуживание"],
  },
];

export default function ServicesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Услуги</h1>
        <p className="text-gray-400 text-lg max-w-3xl">
          Мы берём на себя весь цикл — от идеи до сдачи объекта. Вы получаете один договор, одну команду и понятную ответственность.
        </p>
      </div>

      <div className="space-y-12">
        {services.map((s) => (
          <div key={s.id} className="bg-[#111C2E] border border-[#1E293B] rounded-2xl p-6 lg:p-8">
            <h2 className="text-2xl font-semibold mb-3">{s.title}</h2>
            <p className="text-gray-400 mb-6">{s.description}</p>
            <ul className="grid sm:grid-cols-2 gap-2">
              {s.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-gray-300">
                  <span className="text-[#E85D04]">✓</span> {f}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link
          href="/kontakty"
          className="inline-block bg-[#E85D04] hover:bg-[#F48C06] text-white font-semibold px-8 py-3.5 rounded-lg"
        >
          Получить расчёт
        </Link>
      </div>
    </div>
  );
}
