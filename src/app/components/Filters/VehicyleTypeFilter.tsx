"use client";

import CarIcon from "@/components/icons/CarIcon";
import MotorcycleIcon from "@/components/icons/Motorcycle";
import TractorIcon from "@/components/icons/Tractor";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useCarFilters } from "@/app/providers/FiltersProvider";
import { CarFiltersActionTypes } from "@/app/providers/type";

export enum VehicleType {
  Car,
  Tractor,
  Motorcycle,
}

export const VehicleTypeFilter = () => {
  const { state, dispatch } = useCarFilters();

  return (
    <div className="w-[250px] rounded-tl-xl rounded-tr-xl bg-white border-gray-200 border-solid border">
      <div className="flex h-12">
        <Button
          variant="ghost"
          onClick={() =>
            dispatch({
              type: CarFiltersActionTypes.SET_VEHICLE_TYPE,
              payload: VehicleType.Car,
            })
          }
          className={cn(
            "flex-1 flex justify-center items-center h-full",
            state.vehicleType === VehicleType.Car
              ? "[&_path]:fill-primary border-b-primary-orange-700 border-b rounded-none"
              : "bg-[#F9F9FB]"
          )}
        >
          <CarIcon />
        </Button>
        <div className="bg-gray-100 w-px h-full" />
        <Button
          variant="ghost"
          onClick={() =>
            dispatch({
              type: CarFiltersActionTypes.SET_VEHICLE_TYPE,
              payload: VehicleType.Tractor,
            })
          }
          className={cn(
            "flex-1 flex justify-center items-center h-full",
            state.vehicleType === VehicleType.Tractor
              ? "[&_path]:fill-primary border-b-primary-orange-700 border-b rounded-none"
              : "bg-[#F9F9FB]"
          )}
        >
          <TractorIcon />
        </Button>
        <div className="bg-gray-100 w-px h-full" />
        <Button
          variant="ghost"
          onClick={() =>
            dispatch({
              type: CarFiltersActionTypes.SET_VEHICLE_TYPE,
              payload: VehicleType.Motorcycle,
            })
          }
          className={cn(
            "flex-1 flex justify-center items-center h-full",
            state.vehicleType === VehicleType.Motorcycle
              ? "[&_path]:fill-primary border-b-primary-orange-700 border-b rounded-none"
              : "bg-[#F9F9FB]"
          )}
        >
          <MotorcycleIcon />
        </Button>
      </div>
    </div>
  );
};
