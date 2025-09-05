'use client';
import LayoutAdmin from '@/components/layout/admin/layout-admin';
import { routes } from '@/config/routes.config';
import Link from 'next/link';
import { useListFaqs } from '@/features/faq/usecases/list-faqs/use-list-faq';

export default function Faq() {
  const { data: faqs } = useListFaqs();

  return (
    <LayoutAdmin
      title="Faqs"
      description={'Liste des faqs.'}
      breadcrumbs={[
        {
          name: 'Faqs',
          href: routes.admin.faqs.getHref(),
          current: true
        }
      ]}
      button={
        <Link
          href={routes.admin.faqsNew.getHref()}
          className={
            'cursor-pointer rounded-md border border-2 border-dashed border-slate-600 p-1 text-center text-sm text-slate-600 hover:border-slate-400 hover:bg-slate-200 md:p-2 md:text-left md:text-base'
          }
        >
          Nouvel Faq
        </Link>
      }
    >
      <table className="min-w-full divide-y divide-gray-300">
        <thead>
          <tr>
            <th
              scope="col"
              className="py-3.5 pr-3 pl-4 text-left text-sm font-semibold text-gray-900 sm:pl-0"
            >
              Question
            </th>
            <th
              scope="col"
              className="py-3.5 pr-3 pl-4 text-left text-sm font-semibold text-gray-900 sm:pl-0"
            >
              Réponse
            </th>
            <th scope="col" className="relative py-3.5 pr-4 pl-3 sm:pr-0">
              <span className="sr-only">Modifier</span>
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {faqs ? (
            faqs.map((faq) => (
              <tr key={faq.id}>
                <td className="py-4 pr-3 pl-4 text-sm font-medium whitespace-nowrap text-gray-900 sm:pl-0">
                  {faq.answer}
                </td>
                <td className="py-4 pr-3 pl-4 text-sm font-medium whitespace-nowrap text-gray-900 sm:pl-0">
                  {faq.response}
                </td>
                <td className="py-4 pr-4 pl-3 text-right text-sm font-medium whitespace-nowrap sm:pr-0">
                  <Link
                    href={routes.admin.faqDetails.getHref(faq.id)}
                    className="text-indigo-600 hover:text-indigo-900"
                  >
                    Modifier<span className="sr-only">, {faq.id}</span>
                  </Link>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={3}
                className="py-4 pr-3 pl-4 text-sm font-medium whitespace-nowrap text-gray-900 sm:pl-0"
              >
                Aucune faq trouvé.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </LayoutAdmin>
  );
}
