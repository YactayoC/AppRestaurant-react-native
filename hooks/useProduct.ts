import { AxiosError } from 'axios';
import { useSetAtom } from 'jotai';

import { ApiResponse } from '../interfaces';
import ProductService from '../services/product';
import { categoriesAtom, productsAtom } from '../store';

export const useProduct = () => {
  const productService = new ProductService();
  const setProducts = useSetAtom(productsAtom);
  const setCategories = useSetAtom(categoriesAtom);

  const handleGetProducts = async (): Promise<ApiResponse<void>> => {
    try {
      setProducts((prev) => ({ ...prev, isLoading: true }));
      const data = await productService.getProducts();
      setProducts((prev) => ({ ...prev, data, isLoading: false }));
      return {};
    } catch (error) {
      return { errorMessage: (error as AxiosError).message };
    }
  };

  const handleGetCategories = async (): Promise<ApiResponse<void>> => {
    try {
      const data = await productService.getCategories();
      setCategories(data);
      return {};
    } catch (error) {
      return { errorMessage: (error as AxiosError).message };
    }
  };

  const handleGetProductByTerm = async (term: string): Promise<ApiResponse<void>> => {
    try {
      const data = await productService.getProductByTerm(term);
      return {};
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
