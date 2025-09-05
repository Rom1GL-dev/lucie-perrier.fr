import { useMutation, useQueryClient } from '@tanstack/react-query';
import { fetcher } from '@/lib/fetcher';

export interface DeleteFaqDto {
  id: string;
}

const BASE_URL = '/faqs';

const deleteEvent = async (payload: DeleteFaqDto) => {
  return fetcher.delete(`${BASE_URL}`, payload);
};

export const useDeleteFaq = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['faqs'],
    mutationFn: async (payload: DeleteFaqDto) => deleteEvent(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['faqs'] });
    }
  });
};
