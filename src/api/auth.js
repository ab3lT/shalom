import axios from "axios";

const BASE_URL = "http://localhost:8001/api/v1/shalom/auth";

export const login = async (userName, password) => {
  const response = await axios.post(`${BASE_URL}/login`, { userName, password });
  return response.data;
};

export const changePassword = async (token, oldPassword, newPassword) => {
  const response = await axios.post('http://localhost:8003/api/v1/shalom/auth/changePassword', {
    token,
    oldPassword,
    newPassword
  });
  return response.data;
};