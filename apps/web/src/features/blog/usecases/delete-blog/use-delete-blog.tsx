import { useMutation, useQueryClient } from '@tanstack/react-query';
import { fetcher } from '@/lib/fetcher';

export interface DeleteBlogDto {
  id: string;
}

const BASE_URL = '/blogs';

const deleteEvent = async (payload: DeleteBlogDto) => {
  console.log('Deleting blog with payload:', payload);
  return fetcher.delete(`${BASE_URL}`, payload);
};

export const useDeleteBlog = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['blogs'],
    mutationFn: async (payload: DeleteBlogDto) => deleteEvent(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['blogs'] });
    }
  });
};
