import { useMutation, useQueryClient } from '@tanstack/react-query';
import { UpdateFaqForm } from './update-faq.dto';
import { fetcher } from '@/lib/fetcher';

const BASE_URL = '/faqs';

const updateEvent = async (payload: Partial<UpdateFaqForm>) => {
  return fetcher.update(`${BASE_URL}`, payload);
};

export const useUpdateFaq = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['faqs'],
    mutationFn: async (payload: Partial<UpdateFaqForm>) => updateEvent(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['faqs'] });
    }
  });
};
