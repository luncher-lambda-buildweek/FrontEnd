import routes from '../consts/urls';
import { isTokenExpired } from './tokenHelper';

export const setToken = payload => {
  try {
    const token = JSON.stringify(payload);
    localStorage.setItem('luncher-token', token);
  } catch {
    return undefined;
  }
};

export const getToken = () => {
  try {
    const token = localStorage.getItem('luncher-token');
    if (token === null) {
      return undefined;
    } else {
      const isExpired = isTokenExpired(token); // Check if token is expired
      if (isExpired) {
        clearLocalStorage();
        return undefined;
      }
    }
    return JSON.parse(token);
  } catch {
    return undefined;
  }
};

export const clearLocalStorage = () => {
  localStorage.removeItem('luncher-token');
  window.location.href = routes.login;
};
