import { atom } from 'jotai';
import { Category, Product } from '../models';

export const productsAtom = atom<Product[]>([]);
export const categoriesAtom = atom<Category[]>([]);
