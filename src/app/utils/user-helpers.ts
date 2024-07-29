export const setToken = (token: string) => {
  localStorage.setItem("token", `Bearer ${token}`);
};


export const getToken = () => {
  return localStorage.getItem("token");
};

export const removeToken = () => {
  localStorage.removeItem("token");
};

export const setUser = (user: any) => {
  localStorage.setItem("user", JSON.stringify(user));
};

export const getUser = () => {
  const user = localStorage.getItem("user")
  return user ? JSON.parse(user) : {};
};

export const removeUser = () => {
  localStorage.removeItem("user");
};
