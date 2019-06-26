import axios from 'axios';
import { getToken } from '../helpers/localStorage';

export const axiosWithAuth = () => {
  const token = getToken();
    console.log(token);
  return axios.create({
    headers: {
      authorization: token,
    },
    baseURL: '',
  });
};
