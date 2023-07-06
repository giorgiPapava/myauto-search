"use client";

import { useProducts } from "@/api/products";
import { useCarFilters } from "@/app/providers/FiltersProvider";
import { Button } from "@/components/ui/button";
import { createQueryString } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const SearchButton = () => {
  const { state } = useCarFilters();
  const router = useRouter();
  const pathname = usePathname();
  const products = useProducts();

  const updateSearchParams = () => {
    router.push(
      pathname +
        "?" +
        createQueryString({
          ...state,
          man: state.man?.man_id,
          cat: state.cat?.category_id,
        })
    );
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
