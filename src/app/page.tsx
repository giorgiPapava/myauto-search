import { getMans } from "@/api/mans";
import { Filters } from "@/app/components/Filters";
import Results from "@/app/components/Results";
import getQueryClient from "@/lib/getQueryClient";
import { Hydrate, dehydrate } from "@tanstack/react-query";

export default async function Home() {
  const queryClient = getQueryClient();
  const a = await queryClient.prefetchQuery({
    queryFn: getMans,
    queryKey: ["mans"],
  });
  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      <div className="flex gap-5">
        <Filters />
        <Results />
      </div>
    </Hydrate>
  );
}
