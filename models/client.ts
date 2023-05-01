import { Product } from './product';

export interface Client {
  fullname: string;
  direction: string | null;
  phone: string | null;
  user: string;
  favoriteProducts: Product[];
  createdAt: Date;
  updatedAt: Date;
}
