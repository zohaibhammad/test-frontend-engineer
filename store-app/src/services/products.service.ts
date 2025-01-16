import type { Product, ProductsResponse } from "@/types/product";

export const getProducts = async (skip: number): Promise<ProductsResponse> => {
  const res = await fetch(
    `https://dummyjson.com/products?limit=8&skip=${skip}&select=title,price,thumbnail`,
  );
  return await res.json();
};

export const getSingleProduct = async (id: string): Promise<Product> => {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  return await res.json();
};
