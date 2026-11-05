import type { Metadata } from "next";
import Link from "next/link";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: "Согласие на обработку персональных данных",
  robots: { index: true, follow: true },
};

export default function ConsentPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold mb-8">Согласие на обработку персональных данных</h1>

      <div className="bg-[#111C2E] border border-[#1E293B] rounded-2xl p-6 lg:p-8 text-gray-300 leading-relaxed space-y-4">
        <p>
          Настоящим я, субъект персональных данных, действуя свободно, своей волей и в своём интересе,
          даю согласие {company.name} (ИНН {company.inn}, ОГРН {company.ogrn}, адрес: {company.legalAddress})
          (далее — Оператор) на обработку моих персональных данных на условиях, изложенных ниже.
        </p>

        <p>
          <strong className="text-white">Перечень персональных данных:</strong> фамилия, имя, отчество
          (или имя); номер телефона; адрес электронной почты; сведения об интересующей услуге;
          текст сообщения / заявки; иные данные, которые я добровольно сообщаю в формах на сайте.
        </p>

        <p>
          <strong className="text-white">Цели обработки:</strong> рассмотрение и обработка заявки;
          связь для консультации, уточнения деталей, направления коммерческого предложения;
          заключение и исполнение договора.
        </p>

        <p>
          <strong className="text-white">Способы обработки:</strong> смешанная (с использованием средств
          автоматизации и без). Обработка осуществляется с использованием баз данных на территории РФ.
        </p>

        <p>
          <strong className="text-white">Срок действия согласия:</strong> до достижения целей обработки
          либо до момента отзыва согласия.
        </p>

        <p>
          Согласие может быть отозвано путём направления заявления на {company.emailPd}.
        </p>

        <p>
          С Политикой в отношении обработки персональных данных я ознакомлен(а){" "}
          <Link href="/politika" className="text-[#E85D04] hover:underline">
            (ссылка)
          </Link>
          .
        </p>
      </div>

      <p className="mt-8 text-sm text-gray-500">
        Это отдельный документ согласия в соответствии с ч. 1 ст. 9 Федерального закона № 152-ФЗ.
        На формах сайта согласие фиксируется путём активной установки неотмеченного по умолчанию чекбокса.
      </p>
    </div>
  );
}
