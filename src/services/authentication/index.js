const BASE_URL = 'http://localhost:3000';

export const register = async (name, username, password) => {
  const response = await fetch(`${BASE_URL}/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, username, password }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Registrasi Gagal');
  }

  return data;
};
