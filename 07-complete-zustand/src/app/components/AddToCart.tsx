"use client";
import { type Cart } from "@/api/types";
import { useCart } from "../store/CartProvider";

export default function AddToCart({
  addToCartAction,
}: {
  addToCartAction: () => Promise<Cart>;
}) {
  const setCart = useCart()((state) => state.setCart);

  return (
    <button
      className="mt-6 px-8 py-2 text-lg font-bold text-white bg-blue-800 rounded-lg"
      onClick={async () => setCart(await addToCartAction())}
    >
      Add To Cart
    </button>
  );
}
