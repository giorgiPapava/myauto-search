"use client";

import { getCats } from "@/api/cats";
import { getMans } from "@/api/mans";
import { Man } from "@/api/mans/types";
import { VehicleType } from "@/app/components/Filters/VehicyleTypeFilter";
import { useCarFilters } from "@/app/providers/FiltersProvider";
import { CarFiltersActionTypes } from "@/app/providers/type";
import { Button } from "@/components/ui/button";
import {
  CommandEmpty,
  CommandGroup,
  Command,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import { ChevronsUpDown, Check } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";

export const SelectableFilters = () => {
  const searchParams = useSearchParams();
  const vehichleType = Number(searchParams.get("vehichleType")) as VehicleType;
  const { state, dispatch } = useCarFilters();

  const [openMan, setOpenMan] = useState(false);
  const [openCat, setOpenCat] = useState(false);

  const cats = useQuery({
    queryKey: ["cats"],
    queryFn: getCats,
  });
  const mans = useQuery({
    queryKey: ["mans"],
    queryFn: getMans,
  });
  const filteredMans = useMemo(
    () =>
      mans.data?.filter((man) => {
        if (vehichleType === VehicleType.Car) return man.is_car === "1";
        if (vehichleType === VehicleType.Motorcycle) return man.is_moto === "1";
        if (vehichleType === VehicleType.Tractor) return man.is_spec === "1";
        return false;
      }),
    [mans.data, vehichleType]
  );
  const filteredCats = useMemo(
    () => cats.data?.data.filter((c) => c.vehicle_types.includes(vehichleType)),
    [cats.data?.data, vehichleType]
  );

  return (
    <div className="p-6 flex flex-col gap-5">
      <div>
        <p className="mb-2 text-sm font-medium text-text-black-800">
          გარიგების ტიპი
        </p>
        <Select
          onValueChange={(val) =>
            dispatch({
              type: CarFiltersActionTypes.SET_FOR_RENT_TYPE,
              payload: Number(val),
            })
          }
          value={state.forRent.toString()}
        >
          <SelectTrigger>
            <SelectValue placeholder="გარიგების ტიპი" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="0">იყიდება</SelectItem>
              <SelectItem value="1">ქირავდება</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div>
        <p className="mb-2 text-sm font-medium text-text-black-800">
          მწარმოებელი
        </p>
        <Popover open={openMan} onOpenChange={(open) => setOpenMan(open)}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={openMan}
              className="w-[200px] justify-between"
            >
              {state.man?.man_name.toString() || "მწარმოებელი"}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[200px] p-0">
            <Command
              filter={(value, search) => {
                const man = filteredMans?.find((m) => m.man_id === value);
                return man?.man_name
                  .toLocaleLowerCase()
                  .includes(search.toLowerCase())
                  ? 1
                  : 0;
              }}
            >
              <CommandInput placeholder="მწარმოებელი" />
              <CommandEmpty>მწარმოებელი ვერ მოიძებნა</CommandEmpty>
              <CommandGroup>
                {filteredMans?.map((m) => (
                  <CommandItem
                    key={m.man_id}
                    value={m.man_id}
                    onSelect={(currentValue) => {
                      const man = filteredMans.find(
                        (m) => m.man_id === currentValue
                      );
                      if (!man) return;
                      dispatch({
                        payload: man,
                        type: CarFiltersActionTypes.SET_MAN,
                      });
                      setOpenMan(false);
                    }}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        state.man?.man_id === m.man_id
                          ? "opacity-100"
                          : "opacity-0"
                      )}
                    />
                    {m.man_name}
                  </CommandItem>
                ))}
              </CommandGroup>
            </Command>
          </PopoverContent>
        </Popover>
      </div>

      <div>
        <p className="mb-2 text-sm font-medium text-text-black-800">
          კატეგორია
        </p>
        <Popover open={openCat} onOpenChange={(open) => setOpenCat(open)}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={openCat}
              className="w-[200px] justify-between"
            >
              {state.cat?.title.toUpperCase() || "მწარმოებელი"}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[200px] p-0">
            <Command
              filter={(value, search) => {
                const cat = filteredCats?.find((m) => m.category_id.toString() === value);
                return cat?.title
                  .toLocaleLowerCase()
                  .includes(search.toLowerCase())
                  ? 1
                  : 0;
              }}
            >
              <CommandInput placeholder="კატეგორია" />
              <CommandEmpty>კატეგორია ვერ მოიძებნა</CommandEmpty>
              <CommandGroup>
                {filteredCats?.map((c) => (
                  <CommandItem
                    key={c.category_id}
                    value={c.category_id.toString()}
                    onSelect={(currentValue) => {
                      const cat = filteredCats.find(
                        (c) => c.category_id.toString() === currentValue
                      );
                      if (!cat) return;
                      dispatch({
                        payload: cat,
                        type: CarFiltersActionTypes.SET_CAT,
                      });
                      setOpenCat(false);
                    }}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        state.cat?.category_id === c.category_id
                          ? "opacity-100"
                          : "opacity-0"
                      )}
                    />
                    {c.title}
                  </CommandItem>
                ))}
              </CommandGroup>
            </Command>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};
