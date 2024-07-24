import exp from "constants";

export const setToken = (token: string) => {
  localStorage.setItem("token", `Bearer ${token}`);
};

export const getToken = () => {
  return localStorage.getItem("token");
};

export const removeToken = () => {
  localStorage.removeItem("token");
};
