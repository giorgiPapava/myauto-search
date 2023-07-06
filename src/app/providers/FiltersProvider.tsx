"use client";

import { VehicleType } from "@/app/components/Filters/VehicyleTypeFilter";
import {
  CarFiltersAction,
  CarFiltersActionTypes,
  CarFiltersContext as CarFiltersContext,
  CarFiltersState,
} from "@/app/providers/type";
import { useSearchParams } from "next/navigation";
import {
  Dispatch,
  Reducer,
  createContext,
  useContext,
  useMemo,
  useReducer,
} from "react";

const CarFiltersContext = createContext<CarFiltersContext | undefined>(
  undefined
);

const carFiltersReducer = (
  state: CarFiltersState,
  action: CarFiltersAction
) => {
  switch (action.type) {
    case CarFiltersActionTypes.SET_VEHICLE_TYPE:
      return {
        ...state,
        vehicleType: action.payload,
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

  const [state, dispatch] = useReducer<
    Reducer<CarFiltersState, CarFiltersAction>
  >(carFiltersReducer, {
    vehicleType,
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
