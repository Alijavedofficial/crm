import axiosInstance from "@/lib/axios";

export const getAllUsers = async () => {
  const response = await axiosInstance.get<any>("/users");
  return response.data;
};

export const getUnassignedLeads = async () => {
  const response = await axiosInstance.get<any>("/users/leads/unassigned");
  return response.data;
};
