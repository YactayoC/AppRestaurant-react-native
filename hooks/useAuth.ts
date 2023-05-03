import { useState } from 'react';
import { AxiosError } from 'axios';
import { useSetAtom } from 'jotai';

import { ApiResponse, AuthFormLogin, AuthFormRegister, AuthLoginResponse, AuthRegisterResponse } from '../interfaces';
import AuthService from '../services/auth';
import { authAtom } from '../store';

export const useAuth = () => {
  const authService = new AuthService();
  const setUser = useSetAtom(authAtom);

  const handleLogin = async (data: AuthFormLogin): Promise<ApiResponse<AuthLoginResponse>> => {
    try {
      setUser((prev) => ({ ...prev, isLoading: true }));
      const response = await authService.login(data);
      setUser((prev) => ({ ...prev, data: response, isLoading: false }));
      return { data: response };
    } catch (error) {
      setUser((prev) => ({ ...prev, isLoading: false }));
      return { errorMessage: (error as AxiosError).message };
    }
  };

  const handleRegister = async (data: AuthFormRegister): Promise<ApiResponse<AuthRegisterResponse>> => {
    try {
      const response = await authService.register(data);
      return { data: response };
    } catch (error) {
      return { errorMessage: (error as AxiosError).message };
    }
  };

  const handleLogout = () => {
    setUser((prev) => ({ ...prev, data: null }));
  };

  return {
    handleLogin,
    handleRegister,
    handleLogout,
  };
};
