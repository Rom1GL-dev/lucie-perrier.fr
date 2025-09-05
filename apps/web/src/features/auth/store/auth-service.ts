import { fetcher } from '@/lib/fetcher';
import { makeObservable } from 'mobx';
import { TLogin } from '@/features/auth/types/auth';
import { GetProfileResponseDto } from '@/features/auth/usecases/get-profile/get-profile.dto';

class AuthService {
  baseUrl = '/auth';

  constructor() {
    makeObservable(this);
  }

  login = async (data: TLogin) => {
    try {
      return fetcher.post(`${this.baseUrl}/login`, data);
    } catch (error) {
      console.error('error', error);
    }
  };

  logout = async () => {
    try {
      return fetcher.post(`${this.baseUrl}/logout`);
    } catch (error) {
      console.error('error', error);
    }
  };

  async getMe() {
    const res = await fetcher.get<GetProfileResponseDto>(`${this.baseUrl}/me`);
    return res;
  }
}

export const authService = new AuthService();
