import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import firebase from 'firebase/compat/app';
import { onAuthStateChanged } from 'firebase/auth';

import { load } from '../utils/storage';
import { DEFAULT_API } from '../utils/constants';

const api: AxiosInstance = axios.create({
  baseURL: DEFAULT_API,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 1000,
});

// Authentication
const login = async (body) => {
  return api.post<any>('/signin', {
    ...body,
  });
};

const signUp = async (body) => {
  return api.post<any>('/signup-mb', {
    ...body,
  });
};

const signOut = async (body) => {
  const token = await load('FirebaseRememberAccount');
  return api.post<any>('/signout', body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export { api, login, signUp, signOut };
