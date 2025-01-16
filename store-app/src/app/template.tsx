"use client";
import Header from "@/components/header";
import Cart from "@/components/cart";
import { ReactNode, useState } from "react";

export default function Template({ children }: { children: ReactNode }) {
  const [cartOpen, setCartOpen] = useState<boolean>(false);

  return (
    <div>
      <Header setCartOpenAction={setCartOpen} />
      <Cart cartOpen={cartOpen} setCartOpenAction={setCartOpen} />
      {children}
    </div>
  );
}
