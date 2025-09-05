import { useQuery } from '@tanstack/react-query';
import { authService } from '@/features/auth/store/auth-service';

export const useGetProfile = () => {
  return useQuery({
    queryKey: ['get-profile'],
    queryFn: async () => {
      return authService.getMe();
    }
  });
};
