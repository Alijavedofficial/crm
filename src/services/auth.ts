import axiosInstance from "@/lib/axios";

export const loginApi = async (payload: {
  email: string;
  password: string;
}) => {
  const response = await axiosInstance.post<any>("/login", {
    email: payload.email,
    password: payload.password,
  });
  return response.data;
};
