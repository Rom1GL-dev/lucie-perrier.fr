import { makeObservable } from 'mobx';
import { fetcher } from '@/lib/fetcher';
import { User } from '@/features/admin/user/types/user';

class UserService {
  baseUrl = '/users';

  constructor() {
    makeObservable(this);
  }

  listAllUser = async () => {
    try {
      return fetcher.get<User[]>(this.baseUrl);
    } catch (error) {
      console.error('error', error);
    }
  };
}

export const userService = new UserService();
