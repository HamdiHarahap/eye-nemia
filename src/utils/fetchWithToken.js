import { getAccessToken } from './token';

export const fetchWithToken = (url, options = {}) => {
  const token = getAccessToken();

  return fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${token}`,
    },
  });
};
