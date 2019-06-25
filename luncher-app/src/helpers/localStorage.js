import routes from '../consts/urls';

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
