import type { ProductsResponse } from "@/types/product";

export const getProducts = async () => {
  const res = await fetch("https://dummyjson.com/products?limit=8");
  const productData: ProductsResponse = await res.json();
  return productData;
};
