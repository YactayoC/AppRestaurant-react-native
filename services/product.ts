import { isAxiosError } from 'axios';

import RestaurantAPI from '../config/conn-db';
import { Category, Product } from '../models';

class ProductService {
  async getProducts(): Promise<Product[]> {
    try {
      const response = await RestaurantAPI.get('/product');
      return response.data;
    } catch (error) {
      if (isAxiosError(error)) {
        throw new Error(error.response?.data.message);
      }

      throw error;
    }
  }

  async getProductByTerm(term: string): Promise<Product> {
    try {
      const response = await RestaurantAPI.get(`/product/${term}`);
      return response.data;
    } catch (error) {
      if (isAxiosError(error)) {
        throw new Error(error.response?.data.message);
      }

      throw error;
    }
  }

  async getCategories(): Promise<Category[]> {
    try {
      const response = await RestaurantAPI.get('/product/categories/all');
      return response.data;
    } catch (error) {
      if (isAxiosError(error)) {
        throw new Error(error.response?.data.message);
      }

      throw error;
    }
  }

  // async register(data: AuthFormRegister): Promise<AuthRegisterResponse> {
  //   try {
  //     const response = await RestaurantAPI.post('/product', data);
  //     return response.data;
  //   } catch (error) {
  //     if (isAxiosError(error)) {
  //       throw new Error(error.response?.data.message);
  //     }

  //     throw error;
  //   }
  // }
}

export default ProductService;
