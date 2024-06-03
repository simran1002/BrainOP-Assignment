import api from '../utils/api';

export const getPosts = async (token) => {
  const res = await api.get('/posts', {
    headers: { 'x-auth-token': token },
  });
  return res.data;
};
