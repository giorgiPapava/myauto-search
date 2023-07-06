import { VehicleType } from "@/app/components/Filters/VehicyleTypeFilter";
import { Dispatch } from "react";

export enum CarFiltersActionTypes {
  SET_VEHICLE_TYPE = "SET_VEHICLE_TYPE",
}

export interface CarFiltersState {
  vehicleType: VehicleType;
}
export type CarFiltersAction = {
  type: CarFiltersActionTypes.SET_VEHICLE_TYPE;
  payload: VehicleType;
};

export interface CarFiltersContext {
  state: CarFiltersState;
  dispatch: Dispatch<CarFiltersAction>;
}
