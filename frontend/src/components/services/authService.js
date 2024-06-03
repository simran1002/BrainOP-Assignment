import api from '../utils/api';

export const signup = async (userData) => {
  const res = await api.post('/auth/signup', userData);
  return res.data;
};
