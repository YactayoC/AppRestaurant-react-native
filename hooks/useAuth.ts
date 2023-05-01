import { useState } from 'react';
import { AxiosError } from 'axios';

import {
  AuthApiResponse,
  AuthFormLogin,
  AuthFormRegister,
  AuthLoginResponse,
  AuthRegisterResponse,
} from '../interfaces';
import AuthService from '../services/auth';

export const useAuth = () => {
  const authService = new AuthService();

  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (data: AuthFormLogin): Promise<AuthApiResponse<AuthLoginResponse>> => {
    try {
      setIsLoading(true);
      const response = await authService.login(data);
      if (response) setIsLoading(false);
      return { data: response };
    } catch (error) {
      setIsLoading(false);
      return { errorMessage: (error as AxiosError).message };
    }
  };

  const handleRegister = async (data: AuthFormRegister): Promise<AuthApiResponse<AuthRegisterResponse>> => {
    try {
      setIsLoading(true);
      const response = await authService.register(data);
      if (response) setIsLoading(false);
      return { data: response };
    } catch (error) {
      setIsLoading(false);
      return { errorMessage: (error as AxiosError).message };
    }
  };

  return {
    handleLogin,
    handleRegister,
    isLoading,
  };
};
