import { useMutation, useQueryClient } from '@tanstack/react-query';
import { fetcher } from '@/lib/fetcher';
import { AddFaqDto } from '@/features/faq/usecases/add-faq/add-faq.dto';

const BASE_URL = '/faqs';

const addFaq = async (payload: AddFaqDto) => {
  return fetcher.post(`${BASE_URL}`, payload);
};

export const useAddFaq = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['faqs'],
    mutationFn: async (payload: AddFaqDto) => addFaq(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['faqs'] });
    }
  });
};
