import { Cat } from "@/api/cats/types";
import { Man } from "@/api/mans/types";
import { VehicleType } from "@/app/components/Filters/VehicyleTypeFilter";
import { Dispatch } from "react";

export enum CurrencyID {
  USD = 1,
  GEL = 3,
}

export enum ForRentType {
  Sale,
  Rent,
}

export enum CarFiltersActionTypes {
  SET_VEHICLE_TYPE = "SET_VEHICLE_TYPE",
  SET_FOR_RENT_TYPE = "SET_FOR_RENT_TYPE",
  SET_PRICE_FROM = "SET_PRICE_FROM",
  SET_PRICE_TO = "SET_PRICE_TO",
  SET_CURRENCY_ID = "SET_CURRENCY_ID",
  SET_MAN = "SET_MAN",
  SET_CAT = "SET_CAT",
}

export interface CarFiltersState {
  vehicleType: VehicleType;
  forRent: ForRentType;
  priceFrom: string;
  priceTo: string;
  currency: CurrencyID;
  man: Man | null;
  cat: Cat | null;
}
export type CarFiltersAction =
  | {
      type: CarFiltersActionTypes.SET_VEHICLE_TYPE;
      payload: VehicleType;
    }
  | {
      type: CarFiltersActionTypes.SET_FOR_RENT_TYPE;
      payload: ForRentType;
    }
  | {
      type: CarFiltersActionTypes.SET_PRICE_FROM;
      payload: string;
    }
  | {
      type: CarFiltersActionTypes.SET_PRICE_TO;
      payload: string;
    }
  | {
      type: CarFiltersActionTypes.SET_CURRENCY_ID;
      payload: CurrencyID;
    }
  | {
      type: CarFiltersActionTypes.SET_MAN;
      payload: Man;
    }
  | {
      type: CarFiltersActionTypes.SET_CAT;
      payload: Cat;
    };

export interface CarFiltersContext {
  state: CarFiltersState;
  dispatch: Dispatch<CarFiltersAction>;
}
