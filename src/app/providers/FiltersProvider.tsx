"use client";

import { getCats } from "@/api/cats";
import { getMans } from "@/api/mans";
import { VehicleType } from "@/app/components/Filters/VehicyleTypeFilter";
import {
  CarFiltersAction,
  CarFiltersActionTypes,
  CarFiltersContext,
  CarFiltersState,
  CurrencyID,
  ForRentType,
  SortOrder,
} from "@/app/providers/type";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { Reducer, createContext, useContext, useMemo, useReducer } from "react";

const CarFiltersContext = createContext<CarFiltersContext | undefined>(
  undefined
);

const carFiltersReducer: (
  state: CarFiltersState,
  action: CarFiltersAction
) => CarFiltersState = (state, action) => {
  switch (action.type) {
    case CarFiltersActionTypes.SET_VEHICLE_TYPE:
      return {
        ...state,
        vehicleType: action.payload,
      };
    case CarFiltersActionTypes.SET_FOR_RENT_TYPE:
      return {
        ...state,
        forRent: action.payload,
      };
    case CarFiltersActionTypes.SET_PRICE_FROM:
      return {
        ...state,
        priceFrom: action.payload,
      };
    case CarFiltersActionTypes.SET_PRICE_TO:
      return {
        ...state,
        priceTo: action.payload,
      };
    case CarFiltersActionTypes.SET_CURRENCY_ID:
      return {
        ...state,
        currency: action.payload,
      };
    case CarFiltersActionTypes.SET_MAN:
      return {
        ...state,
        man: action.payload,
      };
    case CarFiltersActionTypes.SET_CAT:
      return {
        ...state,
        cat: action.payload,
      };
    case CarFiltersActionTypes.SET_SORT_ORDER:
      return {
        ...state,
        sortOrder: action.payload,
      };
    case CarFiltersActionTypes.SET_PERIOD:
      return {
        ...state,
        period: action.payload,
      };
    default: {
      throw new Error(
        `[CarFiltersProvider-context] Unhandled action type: ${action}`
      );
    }
  }
};

const CarFiltersProvider = ({ children }: { children: React.ReactNode }) => {
  const cats = useQuery({
    queryKey: ["cats"],
    queryFn: getCats,
  });
  const mans = useQuery({
    queryKey: ["mans"],
    queryFn: getMans,
  });
  const searchParams = useSearchParams();
  const vehicleType = Number(searchParams.get("vehicleType")) as VehicleType;
  const forRent = Number(searchParams.get("forRent")) as ForRentType;
  const sortOrder = Number(searchParams.get("sortOrder")) as SortOrder;
  const cat =
    cats.data?.data.find(
      (c) => c.category_id.toString() === searchParams.get("cat")
    ) || null;
  const priceFrom = searchParams.get("priceFrom") || "";
  const priceTo = searchParams.get("priceTo") || "";
  const period = searchParams.get("period") || undefined;
  const currency =
    (Number(searchParams.get("currency")) as CurrencyID) || CurrencyID.GEL;
  const man =
    mans.data?.find((m) => m.man_id === searchParams.get("man")) || null;

  const [state, dispatch] = useReducer<
    Reducer<CarFiltersState, CarFiltersAction>
  >(carFiltersReducer, {
    vehicleType,
    forRent,
    priceFrom,
    priceTo,
    currency,
    man,
    cat,
    sortOrder,
    period,
  });

  const value = useMemo(
    () => ({
      state,
      dispatch,
    }),
    [state]
  );
  return (
    <CarFiltersContext.Provider value={value}>
      {children}
    </CarFiltersContext.Provider>
  );
};

const useCarFilters = () => {
  const ctx = useContext(CarFiltersContext);
  if (ctx === undefined) {
    throw new Error("useCarFilters must be used with a CarFiltersProvider");
  }

  return ctx;
};

export { CarFiltersProvider, useCarFilters };
