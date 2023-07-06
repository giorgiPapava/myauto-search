"use client";

import { useProducts } from "@/api/products";
import { useCarFilters } from "@/app/providers/FiltersProvider";
import { Button } from "@/components/ui/button";
import { createQueryString } from "@/lib/utils";
import { pickBy } from "lodash";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const SearchButton = () => {
  const { state } = useCarFilters();
  const router = useRouter();
  const pathname = usePathname();
  const products = useProducts();

  const params = {
    currency: state.currency,
    forRent: state.forRent,
    priceFrom: state.priceFrom,
    priceTo: state.priceTo,
    sortOrder: state.sortOrder,
    vehicleType: state.vehicleType,
    man: state.man?.man_id,
    cat: state.cat?.category_id,
    period: state.period,
  };
  const cleanedParams = pickBy(params, (value) => value !== undefined);

  const updateSearchParams = () => {
    router.push(pathname + "?" + createQueryString(cleanedParams));
  };

  return (
    <div className="px-6 pt-4 pb-5">
      <Button
        disabled={products.isLoading}
        onClick={updateSearchParams}
        variant="default"
        className="w-full"
      >
        ძებნა
      </Button>
    </div>
  );
};

export default SearchButton;
