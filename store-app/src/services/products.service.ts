import type { Product, ProductsResponse } from "@/types/product";

export const getProducts = async (skip: number) => {
  const res = await fetch(
    `https://dummyjson.com/products?limit=8&skip=${skip}&select=title,price,thumbnail`,
  );
  const productData: ProductsResponse = await res.json();
  return productData;
};

export const getSingleProduct = async (id: string) => {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  const product: Product = await res.json();
  return product;
};
