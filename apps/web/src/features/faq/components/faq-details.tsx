'use client';

import LayoutAdmin from '@/components/layout/admin/layout-admin';
import { useToast } from '@/providers/toast-provider';
import { routes } from '@/config/routes.config';
import { useParams, useRouter } from 'next/navigation';
import FaqForm from '@/features/faq/components/faq-form';
import { useUpdateFaq } from '@/features/faq/usecases/update-faq/use-update-faq';
import { useDeleteFaq } from '@/features/faq/usecases/delete-faq/use-delete-faq';
import { useListFaqs } from '@/features/faq/usecases/list-faqs/use-list-faq';
import { Faq } from '@/features/faq/usecases/list-faqs/faq';

export function FaqDetails() {
  const router = useRouter();
  const params = useParams();
  const { showToast } = useToast();
  const updateFaqMutation = useUpdateFaq();
  const deleteFaqMutation = useDeleteFaq();
  const { data: faqs, isLoading } = useListFaqs();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const faq = faqs?.find((b) => b.id === params.id);

  if (!params.id) {
    router.push(routes.admin.faqs.getHref());
    return null;
  }

  const handleSaveFaq = async (faqData: Faq) => {
    const payload = {
      id: faqData.id,
      answer: faqData.answer,
      response: faqData.response
    };

    updateFaqMutation.mutate(payload, {
      onSuccess: () => {
        showToast({
          type: 'success',
          message: 'Faq modifié avec succès !'
        });
        router.push(routes.admin.faqDetails.getHref(payload.id));
      },
      onError: () => {
        showToast({
          type: 'error',
          message: 'Une erreur est survenue lors de la modification de la faq.'
        });
      }
    });
  };

  const handleRemoveFaq = (faqId: string) => {
    const payload = {
      id: faqId
    };

    deleteFaqMutation.mutate(payload, {
      onSuccess: () => {
        showToast({
          type: 'success',
          message: 'Faq supprimé avec succès !'
        });
        router.push(routes.admin.faqs.getHref());
      },
      onError: () => {
        showToast({
          type: 'error',
          message: 'Erreur lors de la suppression de la faq !'
        });
      }
    });
  };

  return (
    <LayoutAdmin
      title={'Détail du Faq'}
      breadcrumbs={[
        {
          name: 'Faqs',
          href: routes.admin.faqs.getHref(),
          current: false
        },
        { name: 'Détail de la faq', href: '', current: true }
      ]}
    >
      <FaqForm faq={faq} onSave={handleSaveFaq} onDelete={handleRemoveFaq} />
    </LayoutAdmin>
  );
}
