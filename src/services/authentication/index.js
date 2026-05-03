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
