/* eslint-disable @next/next/no-img-element */
import { getMans } from "@/api/mans";
import { Item as Product } from "@/api/products/types";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import dayjs from "dayjs";
import Image from "next/image";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ka";
import { useCarFilters } from "@/app/providers/FiltersProvider";
import { CurrencyID } from "@/app/providers/type";
import { useSearchParams } from "next/navigation";

dayjs.locale("ka"); // use locale
dayjs.extend(relativeTime);

const Product = ({ item }: { item: Product }) => {
  const searchParams = useSearchParams();
  const mans = useQuery({
    queryKey: ["mans"],
    queryFn: getMans,
  });
  const man = mans.data?.find((m) => Number(m.man_id) === item.man_id);

  return (
    <div className="p-4 bg-white rounded-[14px] flex gap-4">
      <img
        src={`https://static.my.ge/myauto/photos/${item.photo}/thumbs/${item.car_id}_1.jpg?v=${item.photo_ver}`}
        alt="car"
        className="w-[182px] h-[144px] object-cover rounded-lg"
      />
      <div className="flex-1 flex flex-col justify-between">
        {/* first row */}
        <div className="flex justify-between">
          <p className="text-text-black-800 text-sm font-medium">
            {man?.man_name}
            <span className="text-text-black-500 ml-2">{item.prod_year} წ</span>
          </p>
          <div className="flex gap-2 justify-center">
            <img className="w-4 h-4" src="" alt="" />
            {/* TODO get from api */}
            <p className="text-sm text-secondary-black-600">თბილისი</p>
          </div>
        </div>

        {/* second row */}
        <div className="flex justify-between">
          <div className="grid grid-cols-2 gap-x-8 gap-y-4 w-[396px]">
            <div className="flex gap-3">
              <Image
                src="/icons/Motor.svg"
                alt="motor"
                width={16}
                height={12}
              />
              {/* TODO get from api */}
              <p className="text-text-black-900 text-xs">1.8 დატ. ჰიბრიდი</p>
            </div>
            <div className="flex gap-3">
              <Image
                src="/icons/avtomatic.svg"
                alt="motor"
                width={12}
                height={16}
              />
              <p className="text-text-black-900 text-xs">
                {item.car_run_km} კმ
              </p>
            </div>
            <div className="flex gap-3">
              <Image
                src="/icons/wheel.svg"
                alt="motor"
                width={14}
                height={14}
              />
              {/* TODO get from api */}
              <p className="text-text-black-900 text-xs">ავტომატიკა</p>
            </div>
            <div className="flex gap-3">
              <Image
                src="/icons/sache.svg"
                alt="motor"
                width={14}
                height={14}
              />
              <p className="text-text-black-900 text-xs">
                {item.right_wheel ? "მარჯვნივ" : "მარცხნივ"}
              </p>
            </div>
          </div>

          <div className="flex gap-2 items-center h-max">
            <p className="text-text-black-800 text-xl font-medium">
              {item.price_value}
            </p>
            <span className="text-primary-black-800 bg-primary-gray-200 w-6 h-6 rounded-full flex justify-center items-center">
              {Number(searchParams.get("currency")) === CurrencyID.USD
                ? "$"
                : "₾"}
            </span>
          </div>
        </div>

        {/* third row */}
        <div className="flex justify-between">
          <div className="flex gap-1 text-text-black-600 text-xs font-medium items-center">
            <p>{item.views} ნახვა</p>
            <div className="rounded-full w-1 h-1 bg-secondary-black-600" />
            <p>{dayjs().to(dayjs(item.order_date))}</p>
          </div>
          <div className="flex  items-center">
            <Button
              variant="outline"
              size="icon"
              className="bg-transparent border-none"
            >
              <Image src="/icons/note.svg" width={12} height={12} alt="note" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="bg-transparent border-none"
            >
              <Image
                src="/icons/shedareba.svg"
                width={16}
                height={14}
                alt="note"
              />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="bg-transparent border-none"
            >
              <Image src="/icons/heart.svg" width={14} height={13} alt="note" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
