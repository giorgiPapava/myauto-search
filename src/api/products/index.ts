import { ProductsResponse } from "@/api/products/types";
import { axiosInstance } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";
import { ReadonlyURLSearchParams, useSearchParams } from "next/navigation";

const fetchProducts = async (searchParams: ReadonlyURLSearchParams) => {
  const response = await axiosInstance.get<ProductsResponse>(`/ka/products`, {
    params: {
      TypeID: searchParams.get("vehicleType"),
      ForRent: searchParams.get("forRent"),
      PriceFrom: searchParams.get("priceFrom"),
      PriceTo: searchParams.get("priceTo"),
      CurrencyID: searchParams.get("currency"),
      Mans: searchParams.get("man"),
      Cats: searchParams.get("cat"),
      SortOrder: searchParams.get("sortOrder"),
      Period: searchParams.get("period"),
    },
  });
  return response.data;
};

export const useProducts = () => {
  const searchParams = useSearchParams();

  return useQuery({
    queryKey: ["products", searchParams.toString()],
    queryFn: () => fetchProducts(searchParams),
  });
};
