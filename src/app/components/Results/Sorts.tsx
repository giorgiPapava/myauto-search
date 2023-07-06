import { useCarFilters } from "@/app/providers/FiltersProvider";
import { CarFiltersActionTypes, SortOrder } from "@/app/providers/type";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";

function Sorts({}) {
  const { state, dispatch } = useCarFilters();

  return (
    <div className="flex gap-2">
      <Select
        value={state.period}
        onValueChange={(val) => {
          dispatch({
            type: CarFiltersActionTypes.SET_PERIOD,
            payload: val,
          });
        }}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="პერიოდი" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="1h">1 საათი</SelectItem>
          <SelectItem value="3h">3 საათი</SelectItem>
          <SelectItem value="6h">6 საათი</SelectItem>
          <SelectItem value="12h">12 საათი</SelectItem>
          <SelectItem value="24h">24 საათი</SelectItem>
        </SelectContent>
      </Select>

      <Select
        value={state.sortOrder.toString()}
        onValueChange={(val) =>
          dispatch({
            type: CarFiltersActionTypes.SET_SORT_ORDER,
            payload: Number(val),
          })
        }
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value={SortOrder.DateDesc.toString()}>
            თარიღი კლებადი
          </SelectItem>
          <SelectItem value={SortOrder.DateAsc.toString()}>
            თარიღი ზრდადი
          </SelectItem>
          <SelectItem value={SortOrder.PriceDesc.toString()}>
            ფასი კლებადი
          </SelectItem>
          <SelectItem value={SortOrder.PriceAsc.toString()}>
            ფასი ზრდადი
          </SelectItem>
          <SelectItem value={SortOrder.MileageDesc.toString()}>
            გარბენი კლებადი
          </SelectItem>
          <SelectItem value={SortOrder.MileageAsc.toString()}>
            გარბენი ზრდადი
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}

export default Sorts;
