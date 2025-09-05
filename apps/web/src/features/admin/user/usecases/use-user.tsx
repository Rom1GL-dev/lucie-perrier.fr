import { useQuery } from '@tanstack/react-query';
import { userService } from '@/features/admin/user/stores/user-service';

export const useListUsers = () => {
  return useQuery({
    queryKey: ['list-user'],
    queryFn: async () => userService.listAllUser()
  });
};
