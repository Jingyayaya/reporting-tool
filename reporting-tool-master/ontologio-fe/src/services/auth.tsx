import axios from "axios";

const API_URL = "http://localhost:2020/api/auth/";

const register = (username: string, email: string, password: string, firstName: string, lastName: string) => {
  return axios.post(API_URL + "signup", {
    username,
    email,
    password,
    firstName,
    lastName,
  });
};

const login = (username: string, password: string) => {
  return axios
      .post(API_URL + "signin", {
        username,
        password,
      })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user") as string );
};

export default {
  register,
  login,
  logout,
  getCurrentUser,
};
