"use client";
import { useState, createContext, useContext } from "react";
import { create } from "zustand";
import { Review } from "@/api/types";

const createStore = (reviews: Review[]) =>
  create<{
    reviews: Review[];
    setReviews: (Reviews: Review[]) => void;
  }>((set) => ({
    reviews,
    setReviews(reviews: Review[]) {
      set({ reviews });
    },
  }));

const ReviewsContext = createContext<ReturnType<typeof createStore>>(null!);

export const useReviews = () => {
  if (!ReviewsContext)
    throw new Error("useCart must be used within a CartProvider");
  return useContext(ReviewsContext);
};

const ReviewsProvider = ({
  reviews,
  children,
}: {
  reviews: Review[];
  children: React.ReactNode;
}) => {
  const [store] = useState(() => createStore(reviews));
  return (
    <ReviewsContext.Provider value={store}>{children}</ReviewsContext.Provider>
  );
};

export default ReviewsProvider;
