"use client";
import { useRef } from "react";
import { Provider } from "react-redux";
import { type Cart } from "@/api/types";
import { createStore, setCart } from "./store";

export default function StoreProvider({
  cart,
  children,
}: {
  cart: Cart;
  children: React.ReactNode;
}) {
  const storeRef = useRef<ReturnType<typeof createStore> | null>(null);
  if (!storeRef.current) {
    storeRef.current = createStore();
    storeRef.current.dispatch(setCart(cart));
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
