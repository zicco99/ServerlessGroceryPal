import React, { createContext, useContext } from 'react';
import axios, { AxiosInstance } from 'axios';

const AxiosContext = createContext<AxiosInstance | undefined>(undefined);

export const useAxios = (): AxiosInstance => {
  const instance = useContext(AxiosContext);
  if (!instance) {
    throw new Error('useAxios must be used within an AxiosProvider');
  }
  return instance;
};

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_NESTJSBASEURL ?? 'https://api.example.com',
  timeout: 5000,
});

export const AxiosProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <AxiosContext.Provider value={axiosInstance}>
      {children}
    </AxiosContext.Provider>
  );
};

