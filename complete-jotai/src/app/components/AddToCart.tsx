"use client";
import { useStore, useAtom } from "jotai";
import { type Cart } from "@/api/types";
import { cartAtom } from "../store/atoms";

export default function AddToCart({
  addToCartAction,
}: {
  addToCartAction: () => Promise<Cart>;
}) {
  const [cart, setCart] = useAtom(cartAtom, {
    store: useStore(),
  });

  return (
    <button
      className="mt-6 px-8 py-2 text-lg font-bold text-white bg-blue-800 rounded-lg"
      onClick={async () => setCart(await addToCartAction())}
    >
      Add To Cart
    </button>
  );
}
