"use client";
import { useState } from "react";
import Link from "next/link";

import { useCart } from "../store/store";
import CartPopup from "./CartPopup";
import { type Cart } from "@/api/types";

export default function Header({
  clearCartAction,
}: {
  clearCartAction: () => Promise<Cart>;
}) {
  const cart = useCart();
  const [showCart, setShowCart] = useState(false);

  return (
    <header className="mx-2 flex items-center justify-between p-4 bg-blue-800 mb-10 shadow-lg shadow-white rounded-b-2xl">
      <Link href="/">
        <h1 className="text-3xl font-bold leading-10 text-gray-100">
          Donuts &amp; Dragoons Store
        </h1>
      </Link>
      <div
        className="flex items-center justify-center w-10 h-10 bg-blue-700 rounded-full"
        onClick={() => {
          setShowCart(!showCart);
        }}
      >
        <span className="text-xl font-bold leading-10 text-gray-100">
          {cart.products.length}
        </span>
        {showCart && <CartPopup clearCartAction={clearCartAction} />}
      </div>
    </header>
  );
}
