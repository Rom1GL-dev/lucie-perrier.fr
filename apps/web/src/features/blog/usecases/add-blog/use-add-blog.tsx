import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AddBlogDto } from '@/features/blog/usecases/add-blog/add-blog.dto';
import { fetcher } from '@/lib/fetcher';

const BASE_URL = '/blogs';

const addBlog = async (payload: AddBlogDto) => {
  return fetcher.post(`${BASE_URL}`, payload);
};

export const useAddBlog = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['blogs'],
    mutationFn: async (payload: AddBlogDto) => addBlog(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['blogs'] });
    }
  });
};
