import { isAxiosError } from 'axios';

import RestaurantAPI from '../config/conn-db';
import { AuthFormLogin, AuthFormRegister, AuthLoginResponse, AuthRegisterResponse } from '../interfaces';

class AuthService {
  async login(data: AuthFormLogin): Promise<AuthLoginResponse> {
    try {
      const response = await RestaurantAPI.post('/auth/login', data);
      return response.data;
    } catch (error) {
      if (isAxiosError(error)) {
        throw new Error(error.response?.data.message);
      }

      throw error;
    }
  }

  async register(data: AuthFormRegister): Promise<AuthRegisterResponse> {
    try {
      const response = await RestaurantAPI.post('/auth/register', data);
      return response.data;
    } catch (error) {
      if (isAxiosError(error)) {
        throw new Error(error.response?.data.message);
      }

      throw error;
    }
  }
}

export default AuthService;
