import Link from "next/link";
import ContactForm from "@/components/ContactForm";

const services = [
  {
    title: "Загородные дома под ключ",
    desc: "От проекта до сдачи. Каркас, газобетон, кирпич. Фиксированная смета и сроки.",
    icon: "🏠",
  },
  {
    title: "Ремонт квартир",
    desc: "Косметический, капитальный, дизайнерский. Работаем по договору с гарантией.",
    icon: "🛋️",
  },
  {
    title: "Проектирование",
    desc: "Индивидуальные проекты домов и планировок с учётом ваших пожеланий и норм.",
    icon: "📐",
  },
  {
    title: "Инженерные системы",
    desc: "Отопление, водоснабжение, электрика, вентиляция — полный цикл.",
    icon: "⚙️",
  },
];

const advantages = [
  { title: "Фиксированная смета", text: "Цена не вырастет в процессе работ" },
  { title: "Свои бригады", text: "Не субподряд — полный контроль качества" },
  { title: "Гарантия", text: "До 5 лет на конструктив и инженерку" },
  { title: "Прозрачность", text: "Этапы, фотоотчёты, доступ в чат объекта" },
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628] via-[#111C2E] to-[#0A1628]" />
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#E85D04] via-transparent to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#E85D04] font-semibold text-sm uppercase tracking-wider mb-4">
                Санкт-Петербург и Ленинградская область
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Строим дома.{" "}
                <span className="text-[#E85D04]">Делаем ремонт.</span>
                <br />
                Без сюрпризов.
              </h1>
              <p className="text-lg text-gray-300 mb-8 max-w-xl">
                Загородные дома под ключ и ремонт квартир. Фиксированная смета,
                реальные сроки, свои бригады и гарантия. Скажите, что нужно —
                посчитаем и построим.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/kontakty"
                  className="bg-[#E85D04] hover:bg-[#F48C06] text-white font-semibold px-8 py-3.5 rounded-lg text-lg"
                >
                  Рассчитать стоимость
                </Link>
                <Link
                  href="/portfolio"
                  className="border border-[#1E293B] hover:border-[#E85D04] text-white font-medium px-8 py-3.5 rounded-lg"
                >
                  Смотреть объекты
                </Link>
              </div>
            </div>

            <div className="bg-[#111C2E] border border-[#1E293B] rounded-2xl p-6 lg:p-8 shadow-2xl">
              <h2 className="text-xl font-semibold mb-1">Быстрая заявка</h2>
              <p className="text-gray-400 text-sm mb-6">
                Оставьте телефон — перезвоним и ответим на вопросы
              </p>
              <ContactForm compact />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-[#1E293B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Что мы делаем</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Полный цикл: от идеи и проекта до сдачи объекта под ключ
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-[#111C2E] border border-[#1E293B] rounded-xl p-6 hover:border-[#E85D04]/50 transition group"
              >
                <div className="text-3xl mb-4">{s.icon}</div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-[#E85D04] transition">
                  {s.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/uslugi"
              className="inline-flex items-center gap-2 text-[#E85D04] font-medium hover:underline"
            >
              Все услуги →
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#070E1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Почему мы</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((a) => (
              <div key={a.title} className="bg-[#111C2E] border border-[#1E293B] rounded-xl p-6">
                <h3 className="text-lg font-semibold text-[#E85D04] mb-2">{a.title}</h3>
                <p className="text-gray-400 text-sm">{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-[#1E293B]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Готовы обсудить проект?</h2>
          <p className="text-gray-400 mb-8">
            Оставьте заявку — перезвоним, ответим на вопросы и сделаем предварительный расчёт.
          </p>
          <Link
            href="/kontakty"
            className="inline-block bg-[#E85D04] hover:bg-[#F48C06] text-white font-semibold px-10 py-4 rounded-lg text-lg"
          >
            Оставить заявку
          </Link>
        </div>
      </section>
    </>
  );
}
