import { Product } from './product';
import { User } from './user';

export interface Client {
  fullname: string;
  direction: string | null;
  phone: string | null;
  user: User;
  favoriteProducts: Product[];
  profile: string;
  createdAt: Date;
  updatedAt: Date;
}
