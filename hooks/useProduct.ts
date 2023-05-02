import { AxiosError } from 'axios';
import { useSetAtom } from 'jotai';

import { ApiResponse } from '../interfaces';
import { Category, Product } from '../models';
import ProductService from '../services/product';
import { categoriesAtom, productsAtom } from '../store';

export const useProduct = () => {
  const productService = new ProductService();
  const setProducts = useSetAtom(productsAtom);
  const setCategories = useSetAtom(categoriesAtom);

  const handleGetProducts = async (): Promise<ApiResponse<Product[]>> => {
    try {
      const data = await productService.getProducts();
      setProducts(data);
      return { data };
    } catch (error) {
      return { errorMessage: (error as AxiosError).message };
    }
  };

  const handleGetCategories = async (): Promise<ApiResponse<Category[]>> => {
    try {
      const data = await productService.getCategories();
      setCategories(data);
      return { data };
    } catch (error) {
      return { errorMessage: (error as AxiosError).message };
    }
  };

  const handleGetProductByTerm = async (term: string): Promise<ApiResponse<Product>> => {
    try {
      const data = await productService.getProductByTerm(term);
      return { data };
    } catch (error) {
      return { errorMessage: (error as AxiosError).message };
    }
  };

  return {
    handleGetProducts,
    handleGetCategories,
    handleGetProductByTerm,
  };
};
