'use client';

import {
  createContext,
  type PropsWithChildren,
  useContext,
  useEffect,
  useState
} from 'react';
import { UserSession } from '@/types/user-session';
import { authService } from '@/features/auth/store/auth-service';
import { useGetProfile } from '@/features/auth/usecases/get-profile/get-profile';
import { GetProfileResponseDto } from '@/features/auth/usecases/get-profile/get-profile.dto';

type UserContextProps = {
  me: UserSession | null;
  getMe: () => Promise<void>;
  user?: GetProfileResponseDto;
  isLoading?: boolean;
};

const UserContext = createContext<UserContextProps>({} as UserContextProps);

export const SessionProvider = ({ children }: PropsWithChildren) => {
  const [me, setMe] = useState<UserSession | null>(null);

  const getMe = async () => {
    try {
      const res = await authService.getMe();
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      setMe(res.account);
    } catch (error) {
      console.error('Error fetching user session:', error);
      setMe(null);
    }
  };

  const { data, isLoading } = useGetProfile();

  useEffect(() => {
    void getMe();
  }, []);

  return (
    <UserContext.Provider value={{ me, getMe, user: data, isLoading }}>
      {children}
    </UserContext.Provider>
  );
};

export const useMe = () => {
  return useContext(UserContext);
};
