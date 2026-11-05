import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: "Контакты",
  description: "Связаться с PizDa Строй: телефон, email, форма заявки. Санкт-Петербург и ЛО",
};

export default function ContactsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Контакты</h1>
        <p className="text-gray-400 text-lg">
          Оставьте заявку или позвоните — ответим на вопросы и рассчитаем стоимость.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        <div className="bg-[#111C2E] border border-[#1E293B] rounded-2xl p-6 lg:p-8">
          <h2 className="text-xl font-semibold mb-6">Оставить заявку</h2>
          <ContactForm />
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">Телефон</h3>
            <a href={`tel:${company.phoneRaw}`} className="text-2xl font-semibold text-white hover:text-[#E85D04] transition">
              {company.phone}
            </a>
            <p className="text-gray-400 text-sm mt-1">{company.workHours}</p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">Email</h3>
            <a href={`mailto:${company.email}`} className="text-xl text-white hover:text-[#E85D04] transition">
              {company.email}
            </a>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">Регион работы</h3>
            <p className="text-white">{company.region}</p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">Реквизиты</h3>
            <div className="text-gray-300 text-sm space-y-1">
              <p>{company.name}</p>
              <p>ИНН: {company.inn}</p>
              <p>ОГРН: {company.ogrn}</p>
              <p>Юридический адрес: {company.legalAddress}</p>
              <p className="text-amber-500/90 text-xs mt-2">
                ⚠ Перед запуском замените реквизиты в файле{" "}
                <code className="text-amber-400">src/lib/company.ts</code>
              </p>
            </div>
          </div>
          <div className="bg-[#0A1628] border border-[#1E293B] rounded-xl p-5">
            <p className="text-sm text-gray-400">
              Персональные данные обрабатываются в соответствии с 152-ФЗ. Серверы и БД — на территории РФ.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
