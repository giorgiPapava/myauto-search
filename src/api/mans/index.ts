import { MansResponse } from "@/api/mans/types";
import { axiosInstance } from "@/lib/axios";

export const getMans = async () => {
  const response = await axiosInstance.get<MansResponse>("https://static.my.ge/myauto/js/mans.json");
  return response.data;
};
