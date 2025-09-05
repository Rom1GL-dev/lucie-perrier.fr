import { useMutation } from '@tanstack/react-query';
import { fetcher } from '@/lib/fetcher';

const BASE_URL = '/images';

const uploadImage = async (file: File, category: string) => {
  const formData = new FormData();
  formData.append('image', file);

  return fetcher.post(`${BASE_URL}/upload/${category}`, formData);
};

export const useUploadImage = () => {
  return useMutation({
    mutationKey: ['upload-image'],
    mutationFn: async ({ file, category }: { file: File; category: string }) =>
      uploadImage(file, category)
  });
};
