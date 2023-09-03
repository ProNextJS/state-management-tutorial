import { atom } from "jotai";
import { Cart, Review } from "@/api/types";

export const cartAtom = atom<Cart>({
  products: [],
});
export const reviewsAtom = atom<Review[] | null>(null);
