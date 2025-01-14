"use client";

import Product from "@/components/product";
import Pagination from "@/components/pagination";
import React, { useEffect, useState } from "react";
import { getProducts } from "@/Services/products.service";
import type { ProductsResponse } from "@/types/product";

export default function Home() {
  const [productsData, setProductsData] = useState<ProductsResponse | null>(
    null,
  );

  useEffect(() => {
    productsAPI();
  }, []);

  const productsAPI = async () => {
    setProductsData(await getProducts());
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {productsData?.products.map((product) => (
            <Product product={product} key={product.id} />
          ))}
        </div>
      </div>
      <Pagination />
    </div>
  );
}
