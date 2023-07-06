import { CatsResponse } from "@/api/cats/types";
import { axiosInstance } from "@/lib/axios";

export const getCats = async () => {
  const response = await axiosInstance.get<CatsResponse>("/ka/cats/get");
  return response.data;
};
