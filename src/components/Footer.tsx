import Link from "next/link";
import { company } from "@/lib/company";

export default function Footer() {
  return (
    <footer className="bg-[#070E1A] border-t border-[#1E293B] mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#E85D04] rounded-lg flex items-center justify-center font-bold text-white">
                P
              </div>
              <span className="font-bold text-lg">
                PizDa <span className="text-[#E85D04]">Строй</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Строительство загородных домов и ремонт квартир в Санкт-Петербурге и Ленинградской
              области. Фиксированная смета. Гарантия.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4">Услуги</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/uslugi" className="hover:text-[#E85D04]">Загородные дома под ключ</Link></li>
              <li><Link href="/uslugi" className="hover:text-[#E85D04]">Ремонт квартир</Link></li>
              <li><Link href="/uslugi" className="hover:text-[#E85D04]">Проектирование</Link></li>
              <li><Link href="/uslugi" className="hover:text-[#E85D04]">Инженерные системы</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4">Компания</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/o-kompanii" className="hover:text-[#E85D04]">О нас</Link></li>
              <li><Link href="/portfolio" className="hover:text-[#E85D04]">Портфолио</Link></li>
              <li><Link href="/kontakty" className="hover:text-[#E85D04]">Контакты</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4">Контакты</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href={`tel:${company.phoneRaw}`} className="hover:text-[#E85D04]">{company.phone}</a></li>
              <li><a href={`mailto:${company.email}`} className="hover:text-[#E85D04]">{company.email}</a></li>
              <li>{company.region}</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 pt-8 border-t border-[#1E293B] flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} {company.name}. Все права защищены.</p>
          <div className="flex gap-6">
            <Link href="/politika" className="hover:text-[#E85D04]">Политика конфиденциальности</Link>
            <Link href="/soglasie" className="hover:text-[#E85D04]">Согласие на обработку ПДн</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
