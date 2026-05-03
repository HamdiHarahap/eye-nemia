import { getRefreshToken } from '../../utils/token.js';
import { fetchWithToken } from '../../utils/fetchWithToken.js';

const BASE_URL = 'http://localhost:3000';

export const register = async (name, username, password) => {
  const response = await fetch(`${BASE_URL}/users`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password, name }),
  });

  const data = await response.json();

  if (data.status !== 'success') {
    throw new Error(data.message || 'Registrasi Gagal');
  }

  return data;
};

export const login = async (username, password) => {
  const response = await fetch(`${BASE_URL}/authentications`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  });

  const data = await response.json();

  if (data.status !== 'success') {
    throw new Error(data.message || 'Login Gagal');
  }
  console.log(data);

  return data;
};

export const logout = async () => {
  const refreshToken = getRefreshToken();

  const response = await fetch(`${BASE_URL}/authentications`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ refreshToken }),
  });

  const data = await response.json();

  if (data.status !== 'success') {
    throw new Error(data.message || 'Logout gagal');
  }

  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');
  localStorage.removeItem('userId');
};

export const getUserLogged = async () => {
  const response = await fetchWithToken(`${BASE_URL}/users/me`);

  const data = await response.json();

  if (data.status !== 'success') {
    throw new Error(data.message);
  }

  return data.data;
};
