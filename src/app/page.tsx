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
      {/* Hero */}
      <section className="relative overflow-hidden pt-10 pb-16 lg:pt-16 lg:pb-24">
        <div className="absolute top-20 right-10 w-40 h-40 rounded-full bg-[#F5E6D3]/60 blur-3xl" />
        <div className="absolute bottom-10 left-10 w-32 h-32 rounded-full bg-orange-200/40 blur-3xl" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <p className="text-[#E85D04] font-semibold text-sm uppercase tracking-wider mb-4">
                Санкт-Петербург и Ленинградская область
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold leading-[1.15] mb-6 text-[#1A1A1A]">
                Строим дома.{" "}
                <span className="text-[#E85D04]">Делаем ремонт.</span>
                <br />
                Без сюрпризов.
              </h1>
              <p className="text-lg text-[#6B7280] mb-8 max-w-lg leading-relaxed">
                Загородные дома под ключ и ремонт квартир. Фиксированная смета,
                реальные сроки, свои бригады и гарантия.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/kontakty" className="btn-primary text-base">
                  Рассчитать стоимость
                </Link>
                <Link href="/portfolio" className="btn-outline text-base">
                  Смотреть объекты
                </Link>
              </div>
            </div>

            {/* Form card */}
            <div className="card-soft p-6 lg:p-8">
              <h2 className="text-xl font-semibold mb-1 text-[#1A1A1A]">Быстрая заявка</h2>
              <p className="text-[#6B7280] text-sm mb-6">
                Оставьте телефон — перезвоним и ответим на вопросы
              </p>
              <ContactForm compact />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-[#1A1A1A]">Что мы делаем</h2>
            <p className="text-[#6B7280] max-w-xl mx-auto">
              Полный цикл: от идеи и проекта до сдачи объекта под ключ
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s, i) => (
              <div
                key={s.title}
                className={`p-6 transition group ${
                  i === 0
                    ? "card-orange"
                    : i === 2
                    ? "card-green"
                    : "card-soft"
                }`}
              >
                <div className="text-3xl mb-4">{s.icon}</div>
                <h3
                  className={`text-lg font-semibold mb-2 ${
                    i === 0 || i === 2 ? "text-white" : "text-[#1A1A1A] group-hover:text-[#E85D04]"
                  }`}
                >
                  {s.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed ${
                    i === 0 || i === 2 ? "text-white/85" : "text-[#6B7280]"
                  }`}
                >
                  {s.desc}
                </p>
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

      {/* Advantages */}
      <section className="py-16 lg:py-20 bg-white/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-[#1A1A1A]">Почему мы</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {advantages.map((a) => (
              <div key={a.title} className="card-soft p-6">
                <h3 className="text-lg font-semibold text-[#E85D04] mb-2">{a.title}</h3>
                <p className="text-[#6B7280] text-sm">{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="card-soft p-10 lg:p-14">
            <h2 className="text-3xl font-bold mb-3 text-[#1A1A1A]">Готовы обсудить проект?</h2>
            <p className="text-[#6B7280] mb-8 max-w-md mx-auto">
              Оставьте заявку — перезвоним, ответим на вопросы и сделаем предварительный расчёт.
            </p>
            <Link href="/kontakty" className="btn-primary text-lg inline-block">
              Оставить заявку
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
