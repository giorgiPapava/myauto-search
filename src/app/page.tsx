import { getCats } from "@/api/cats";
import { getMans } from "@/api/mans";
import { Filters } from "@/app/components/Filters";
import Results from "@/app/components/Results";
import { CarFiltersProvider } from "@/app/providers/FiltersProvider";
import getQueryClient from "@/lib/getQueryClient";
import { Hydrate, dehydrate } from "@tanstack/react-query";

export default async function Home() {
  const queryClient = getQueryClient();
  await Promise.all([
    queryClient.prefetchQuery({
      queryFn: getMans,
      queryKey: ["mans"],
    }),
    queryClient.prefetchQuery({
      queryFn: getCats,
      queryKey: ["cats"],
    }),
  ]);

  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      <CarFiltersProvider>
        <div className="flex gap-5">
          <Filters />
          <Results />
        </div>
      </CarFiltersProvider>
    </Hydrate>
  );
}
