"use client";

import { useCarFilters } from "@/app/providers/FiltersProvider";
import { CarFiltersActionTypes, CurrencyID } from "@/app/providers/type";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const PriceRadio = () => {
  const { state, dispatch } = useCarFilters();

  return (
    <div className="h-6 border-gray-200 border-solid border rounded-3xl flex">
      <label htmlFor="price-gel" className="flex items-center cursor-pointer">
        <input
          onClick={() =>
            dispatch({
              type: CarFiltersActionTypes.SET_CURRENCY_ID,
              payload: CurrencyID.GEL,
            })
          }
          type="radio"
          name="price"
          id="price-gel"
          className="sr-only"
        />
        <span
          className={cn(
            "w-[26px] flex justify-center items-center",
            state.currency === CurrencyID.GEL &&
              "bg-primary-black-800 text-white rounded-full"
          )}
        >
          ₾
        </span>
      </label>
      <label htmlFor="price-usd" className="flex items-center cursor-pointer">
        <input
          onClick={() =>
            dispatch({
              type: CarFiltersActionTypes.SET_CURRENCY_ID,
              payload: CurrencyID.USD,
            })
          }
          type="radio"
          name="price"
          id="price-usd"
          className="sr-only"
        />
        <span
          className={cn(
            "w-[26px] flex justify-center items-center",
            state.currency === CurrencyID.USD &&
              "bg-primary-black-800 text-white rounded-full"
          )}
        >
          $
        </span>
      </label>
    </div>
  );
};

export const PriceFilters = () => {
  const { state, dispatch } = useCarFilters();

  return (
    <div className="px-6 pb-11 pt-4 border-t border-t-gray-100">
      <div className="flex justify-between">
        <p className="text-sm font-medium text-text-black-800">ფასი</p>
        <PriceRadio />
      </div>
      <div className="mt-3 flex gap-1 w-[202px]">
        <Input
          onChange={(e) => {
            dispatch({
              type: CarFiltersActionTypes.SET_PRICE_FROM,
              payload: e.target.value,
            });
          }}
          value={state.priceFrom}
          placeholder="დან"
          className="flex-1"
        />
        <div className="w-[6px] h-[2px] flex-shrink-0 rounded-full bg-secondary-black-700 my-auto" />
        <Input
          onChange={(e) => {
            dispatch({
              type: CarFiltersActionTypes.SET_PRICE_TO,
              payload: e.target.value,
            });
          }}
          value={state.priceTo}
          placeholder="მდე"
          className="flex-1"
        />
      </div>
    </div>
  );
};
