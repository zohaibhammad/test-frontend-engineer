"use client";

import Product from "@/components/product";
import Pagination from "@/components/pagination";
import React, { CSSProperties, useEffect, useState } from "react";
import { getProducts } from "@/services/products.service";
import type { Metadata, Product as ProductModel } from "@/types/product";
import { ClipLoader } from "react-spinners";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
};

export default function Home() {
  const [products, setProducts] = useState<ProductModel[] | []>([]);
  const [metadata, setMetadata] = useState<Metadata>({
    total: 0,
    skip: 0,
    limit: 0,
  });
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    productsAPI();
  }, []);

  const productsAPI = async (skip = 0) => {
    const { products, ...metadata } = await getProducts(skip);
    setProducts(products);
    setMetadata(metadata);
    setLoading(false);
  };

  const handlePageChange = (skip: number) => {
    setLoading(true);
    productsAPI(skip);
  };

  return (
    <>
      {!loading ? (
        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 className="sr-only">Products</h2>

            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              {products.map((product) => (
                <Product product={product} key={product.id} />
              ))}
            </div>
            <Pagination metadata={metadata} onPageChange={handlePageChange} />
          </div>
        </div>
      ) : (
        <ClipLoader
          color="#000000"
          cssOverride={override}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      )}
    </>
  );
}
