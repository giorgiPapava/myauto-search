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
export enum SortOrder {
  None,
  DateDesc,
  DateAsc,
  PriceDesc,
  PriceAsc,
  MileageDesc,
  MileageAsc,
}

export enum CarFiltersActionTypes {
  SET_VEHICLE_TYPE = "SET_VEHICLE_TYPE",
  SET_FOR_RENT_TYPE = "SET_FOR_RENT_TYPE",
  SET_PRICE_FROM = "SET_PRICE_FROM",
  SET_PRICE_TO = "SET_PRICE_TO",
  SET_CURRENCY_ID = "SET_CURRENCY_ID",
  SET_MAN = "SET_MAN",
  SET_CAT = "SET_CAT",
  SET_SORT_ORDER = "SET_SORT_ORDER",
  SET_PERIOD = "SET_PERIOD",
}

export interface CarFiltersState {
  vehicleType: VehicleType;
  forRent: ForRentType;
  priceFrom: string;
  priceTo: string;
  currency: CurrencyID;
  man: Man | null;
  cat: Cat | null;
  sortOrder: SortOrder;
  period?: string;
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
    }
  | {
      type: CarFiltersActionTypes.SET_SORT_ORDER;
      payload: SortOrder;
    }
  | {
      type: CarFiltersActionTypes.SET_PERIOD;
      payload: string;
    }
    ;

export interface CarFiltersContext {
  state: CarFiltersState;
  dispatch: Dispatch<CarFiltersAction>;
}
