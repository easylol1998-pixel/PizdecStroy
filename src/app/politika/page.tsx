import type { Metadata } from "next";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: "Политика обработки персональных данных",
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 prose prose-invert prose-orange">
      <h1 className="text-3xl font-bold mb-8">Политика в отношении обработки персональных данных</h1>

      <p className="text-gray-400 text-sm mb-8">
        Редакция от 05.11.2026. Настоящий документ определяет политику {company.name} (далее — Оператор)
        в отношении обработки персональных данных в соответствии с Федеральным законом от 27.07.2006
        № 152-ФЗ «О персональных данных».
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">1. Общие положения</h2>
        <p className="text-gray-300 leading-relaxed">
          Оператор: {company.name}, ИНН {company.inn}, ОГРН {company.ogrn}, юридический адрес: {company.legalAddress}.
          Контакт для обращений по вопросам персональных данных: {company.emailPd}, {company.phone}.
        </p>
        <p className="text-gray-300 leading-relaxed mt-3">
          Настоящая Политика применяется ко всей информации, которую Оператор может получить о
          посетителях сайта при использовании Сайта, его сервисов, программ и продуктов.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">2. Цели обработки</h2>
        <ul className="list-disc pl-5 text-gray-300 space-y-1">
          <li>Обработка заявок и обращений пользователей;</li>
          <li>Заключение и исполнение договоров;</li>
          <li>Информирование о услугах (при наличии отдельного согласия);</li>
          <li>Улучшение работы Сайта и аналитика (в обезличенном виде где возможно);</li>
          <li>Исполнение требований законодательства РФ.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">3. Категории персональных данных</h2>
        <p className="text-gray-300">
          ФИО (или имя), номер телефона, адрес электронной почты, сведения об интересующей услуге,
          текст сообщения, технические данные (IP-адрес, cookie — при согласии).
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">4. Правовые основания</h2>
        <p className="text-gray-300">
          Согласие субъекта персональных данных (ст. 6, ст. 9 152-ФЗ); исполнение договора;
          исполнение обязанностей, возложенных законодательством РФ.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">5. Место хранения и локализация</h2>
        <p className="text-gray-300">
          Запись, систематизация, накопление, хранение, уточнение и извлечение персональных данных
          граждан Российской Федерации осуществляются с использованием баз данных, находящихся на
          территории Российской Федерации (ч. 5 ст. 18 152-ФЗ).
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">6. Сроки хранения</h2>
        <p className="text-gray-300">
          Персональные данные хранятся не дольше, чем этого требуют цели обработки, либо до отзыва
          согласия субъектом (если иное не предусмотрено договором или законом).
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">7. Меры защиты</h2>
        <p className="text-gray-300">
          Оператор принимает необходимые правовые, организационные и технические меры для защиты
          персональных данных, включая HTTPS/TLS, разграничение доступа, резервное копирование.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">8. Права субъекта</h2>
        <p className="text-gray-300">
          Субъект вправе получать информацию об обработке своих данных, требовать уточнения,
          блокирования или уничтожения, отзывать согласие, обжаловать действия Оператора.
          Запросы: {company.emailPd}.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">9. Cookies</h2>
        <p className="text-gray-300">
          Сайт может использовать файлы cookie. Необходимые cookie обеспечивают работу Сайта.
          Аналитические и маркетинговые cookie — только при согласии пользователя.
        </p>
      </section>

      <p className="mt-12 text-sm text-amber-500/90">
        ⚠ Документ использует данные из <code className="text-amber-400">src/lib/company.ts</code>.
        Перед продакшеном замените реквизиты, согласуйте с юристом и при необходимости
        подайте уведомление в Роскомнадзор.
      </p>
    </div>
  );
}
