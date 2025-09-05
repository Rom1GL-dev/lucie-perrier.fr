'use client';
import LayoutAdmin from '@/components/layout/admin/layout-admin';
import { routes } from '@/config/routes.config';
import { useToast } from '@/providers/toast-provider';
import { useRouter } from 'next/navigation';
import { AddFaqDto } from '@/features/faq/usecases/add-faq/add-faq.dto';
import { useAddFaq } from '@/features/faq/usecases/add-faq/use-add-faq';
import { Faq } from '@/features/faq/usecases/list-faqs/faq';
import FaqForm from '@/features/faq/components/faq-form';

export default function FaqNewPage() {
  const addFaqMutation = useAddFaq();
  const router = useRouter();
  const { showToast } = useToast();

  const handleSaveFaq = async (faqData: Faq) => {
    const payload: AddFaqDto = {
      answer: faqData.answer,
      response: faqData.response ?? ''
    };

    addFaqMutation.mutate(payload, {
      onSuccess: () => {
        showToast({
          type: 'success',
          message: 'Faq ajouté avec succès !'
        });
        router.push(routes.admin.faqs.getHref());
      },
      onError: () => {
        showToast({
          type: 'success',
          message: "Erreur lors de l'ajout du faqs."
        });
      }
    });
  };

  return (
    <LayoutAdmin
      title={'Nouveau faqs'}
      breadcrumbs={[
        {
          name: 'Faqs',
          href: routes.admin.faqs.getHref(),
          current: false
        },
        {
          name: 'Nouveau faqs',
          href: routes.admin.faqsNew.getHref(),
          current: true
        }
      ]}
    >
      <FaqForm onSave={handleSaveFaq} />
    </LayoutAdmin>
  );
}
