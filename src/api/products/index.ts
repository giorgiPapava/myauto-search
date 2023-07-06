import { ProductsResponse } from "@/api/products/types";
import { axiosInstance } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

const fetchProducts = async (search: any) => {
  const response = await axiosInstance.get<ProductsResponse>("/ka/products", {
    params: search,
  });
  return response.data;
};

// TODO: add search types
export const useProducts = (search: any) => {
  return useQuery({
    queryKey: ["products", search],
    queryFn: () => fetchProducts(search),
  });
};
