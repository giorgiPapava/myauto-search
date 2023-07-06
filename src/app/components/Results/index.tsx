"use client";

import { useProducts } from "@/api/products";
import Product from "@/app/components/Results/Item";
import Sorts from "@/app/components/Results/Sorts";

const Results = () => {
  const products = useProducts();

  return (
    <div className="flex-1">
      <div className="flex justify-between">
        <p className="text-primary-black-800">{products.data?.data.meta.total} განცხადება</p>
        <Sorts />
      </div>

      <div className="mt-6 flex flex-col gap-[10px]">
        {products.data?.data.items.map((product) => (
          <Product item={product} key={product.car_id} />
        ))}
      </div>
    </div>
  );
};

export default Results;
