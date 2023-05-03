import { atom } from 'jotai';

import { Category, Product } from '../models';
import { DataAtom } from '../interfaces';

export const productsAtom = atom<DataAtom<Product[]>>({
  data: [],
  isLoading: false,
});
export const categoriesAtom = atom<Category[]>([]);
