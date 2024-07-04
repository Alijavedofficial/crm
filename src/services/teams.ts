import axiosInstance from "@/lib/axios";

export const getAllTeams = async () => {
  const response = await axiosInstance.get<any>("/team");
  return response.data;
};
