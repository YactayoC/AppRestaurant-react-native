export interface User {
  id: string;
  email: string;
  password: string;
  isActive: boolean;
  isConfirmed: boolean;
  key: string;
  createdAt: Date;
  updatedAt: Date;
}
