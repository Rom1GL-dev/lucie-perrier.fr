import { useMutation, useQueryClient } from '@tanstack/react-query';
import { UpdateBlogForm } from './update-blog.dto';
import { fetcher } from '@/lib/fetcher';

const BASE_URL = '/blogs';

const updateEvent = async (payload: Partial<UpdateBlogForm>) => {
  return fetcher.update(`${BASE_URL}`, payload);
};

export const useUpdateBlog = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['blogs'],
    mutationFn: async (payload: Partial<UpdateBlogForm>) =>
      updateEvent(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['blogs'] });
    }
  });
};
