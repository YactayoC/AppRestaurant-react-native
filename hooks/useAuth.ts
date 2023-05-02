import { useState } from 'react';
import { AxiosError } from 'axios';
import { useSetAtom } from 'jotai';

import { ApiResponse, AuthFormLogin, AuthFormRegister, AuthLoginResponse, AuthRegisterResponse } from '../interfaces';
import AuthService from '../services/auth';
import { authAtom } from '../store';

export const useAuth = () => {
  const authService = new AuthService();
  const setUser = useSetAtom(authAtom);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (data: AuthFormLogin): Promise<ApiResponse<AuthLoginResponse>> => {
    try {
      setIsLoading(true);
      const response = await authService.login(data);
      if (response) setIsLoading(false);
      setUser(response);
      return { data: response };
    } catch (error) {
      setIsLoading(false);
      return { errorMessage: (error as AxiosError).message };
    }
  };

  const handleRegister = async (data: AuthFormRegister): Promise<ApiResponse<AuthRegisterResponse>> => {
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

  const handleLogout = () => {
    setUser(null);
  };

  return {
    handleLogin,
    handleRegister,
    handleLogout,
    isLoading,
  };
};
