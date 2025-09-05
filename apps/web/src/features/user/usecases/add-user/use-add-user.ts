import { useMutation } from '@tanstack/react-query';
import { fetcher } from '@/lib/fetcher';
import { AddUserDto } from 'api/dist/modules/users/dto/add-user.dto';

const BASE_URL = '/v1/users';

const addUser = async (payload: AddUserDto) => {
  return fetcher.post(`${BASE_URL}`, payload);
};

export const useAddUser = () => {
  return useMutation({
    mutationKey: ['add-user'],
    mutationFn: async (payload: AddUserDto) => addUser(payload)
  });
};
