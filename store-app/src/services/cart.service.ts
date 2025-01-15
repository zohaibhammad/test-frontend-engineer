import { Product, SerializedProduct } from "@/types/product";
import { toast } from "react-toastify";

export const getCart = (): SerializedProduct[] =>
  JSON.parse(localStorage.getItem("cart")!);

export const updateCart = (product: Product) => {
  if (alreadyInCart(product.id)) {
    toast("Product already in cart", { type: "info" });
    return;
  }

  const serializedProduct: SerializedProduct = {
    id: product.id,
    title: product.title,
    price: product.price,
    thumbnail: product.thumbnail,
    category: product.category,
  };

  const cart = getCart();
  const newCart = cart ? [...cart, serializedProduct] : [serializedProduct];
  localStorage.setItem("cart", JSON.stringify(newCart));
  toast("Product added to cart", { type: "success" });
};

export const clearCart = () => localStorage.removeItem("cart");

export const removeFromCart = (id: number) => {
  const cart = getCart();
  const newCart = cart.filter((item: SerializedProduct) => item.id !== id);
  localStorage.setItem("cart", JSON.stringify(newCart));
};

export const alreadyInCart = (id: number) => {
  const cart = getCart();
  return cart.some((item: SerializedProduct) => item.id === id);
};
