import { CarFiltersProvider } from "@/app/providers/FiltersProvider";
import { PriceFilters } from "@/app/components/Filters/PriceFilters";
import SearchButton from "@/app/components/Filters/SearchButton";
import { SelectableFilters } from "@/app/components/Filters/SelectableFilters";
import { VehicleTypeFilter } from "@/app/components/Filters/VehicyleTypeFilter";

export const Filters = () => {
  return (
    <div className="flex flex-col bg-white rounded-tl-xl overflow-hidden rounded-tr-xl">
      <VehicleTypeFilter />
      <SelectableFilters />
      <PriceFilters />
      <SearchButton />
    </div>
  );
};
