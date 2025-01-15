import { Product } from "@/types/product";
import { toast } from "react-toastify";

export const getCart = () => localStorage.getItem("cart")!;

export const updateCart = (product: Product) => {
  const cart = JSON.parse(getCart());

  if (alreadyInCart(product.id)) {
    toast("Product already in cart", { type: "info" });
    return;
  }

  const serializedProduct = {
    id: product.id,
    title: product.title,
    price: product.price,
    thumbnail: product.thumbnail,
    category: product.category,
  };

  const newCart = cart ? [...cart, serializedProduct] : [serializedProduct];
  localStorage.setItem("cart", JSON.stringify(newCart));
};

export const clearCart = () => localStorage.removeItem("cart");

export const removeFromCart = (id: number) => {
  const cart = JSON.parse(getCart());
  const newCart = cart.filter((item: Product) => item.id !== id);
  localStorage.setItem("cart", JSON.stringify(newCart));
};

export const alreadyInCart = (id: number) => {
  const cart = JSON.parse(getCart());
  return cart.some((item: Product) => item.id === id);
};
