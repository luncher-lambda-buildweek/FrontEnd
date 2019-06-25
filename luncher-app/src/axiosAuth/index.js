import axios from 'axios';
import { getToken } from '../helpers/localStorage';

export const axiosWithAuth = () => {
  const token = getToken();

  return axios.create({
    headers: {
      Authorization: token,
    },
    baseURL: '',
  });
};
