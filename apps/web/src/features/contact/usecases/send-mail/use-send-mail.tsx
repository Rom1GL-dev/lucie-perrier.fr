import { useMutation, useQueryClient } from '@tanstack/react-query';
import { fetcher } from '@/lib/fetcher';
import { CreateEmailDto } from '@/features/contact/usecases/send-mail/send-mail.dto';

const BASE_URL = '/email';

const sendMail = async (payload: CreateEmailDto) => {
  return fetcher.post(`${BASE_URL}`, payload);
};

export const useSendMail = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['contact'],
    mutationFn: async (payload: CreateEmailDto) => sendMail(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['contact'] });
    }
  });
};
