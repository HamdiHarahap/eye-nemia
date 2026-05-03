export const getAccessToken = () => {
  return localStorage.getItem('accessToken');
};

export const putAccessToken = (accessToken) => {
  return localStorage.setItem('accessToken', accessToken);
};

export const getRefreshToken = () => {
  return localStorage.getItem('refreshToken');
};

export const putRefreshToken = (refreshToken) => {
  return localStorage.setItem('refreshToken', refreshToken);
};
