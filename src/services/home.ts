import axiosInstance from "@/lib/axios";

export const homeStatsData = async () => {
  const response = await axiosInstance.get<any>("/home/count");
  return response.data;
};

export const homeRevenue = async () => {
    const response = await axiosInstance.get<any>("/home/revenue");
    return response.data;
  };