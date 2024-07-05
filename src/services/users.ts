import axiosInstance from "@/lib/axios";

export const getAllUsers = async () => {
  const response = await axiosInstance.get<any>("/users");
  return response.data;
};
