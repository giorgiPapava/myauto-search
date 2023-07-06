"use client";

import { VehicleType } from "@/app/components/Filters/VehicyleTypeFilter";
import {
  CarFiltersAction,
  CarFiltersActionTypes,
  CarFiltersContext,
  CarFiltersState,
  CurrencyID,
  ForRentType,
} from "@/app/providers/type";
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
    default: {
      throw new Error(
        `[CarFiltersProvider-context] Unhandled action type: ${action}`
      );
    }
  }
};

const CarFiltersProvider = ({ children }: { children: React.ReactNode }) => {
  const searchParams = useSearchParams();
  const vehicleType = Number(searchParams.get("vehicleType")) as VehicleType;
  const forRent = Number(searchParams.get("forRent")) as ForRentType;

  const [state, dispatch] = useReducer<
    Reducer<CarFiltersState, CarFiltersAction>
  >(carFiltersReducer, {
    vehicleType,
    forRent,
    priceFrom: "",
    priceTo: "",
    currency: CurrencyID.GEL,
    man: null,
    cat: null,
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
