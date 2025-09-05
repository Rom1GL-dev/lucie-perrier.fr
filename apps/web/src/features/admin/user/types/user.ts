type BaseUser = {
  name: string;
  role: string;
  email: string;
};

export type User = BaseUser & {
  id: string;
  createdAt: Date;
  updatedAt: Date;
};
