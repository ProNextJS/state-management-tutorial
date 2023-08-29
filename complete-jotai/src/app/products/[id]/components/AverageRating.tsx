"use client";
import { useRef } from "react";
import { useStore, useAtomValue } from "jotai";

import { Review } from "@/api/types";
import { reviewsAtom } from "@/app/store/atoms";

export default function AverageRating({
  reviews: initialReviews,
}: {
  reviews: Review[];
}) {
  const store = useStore();
  const initialized = useRef(false);
  if (!initialized.current) {
    store.set(reviewsAtom, initialReviews);
    initialized.current = true;
  }
  const reviews = useAtomValue(reviewsAtom, {
    store,
  });

  return (
    <>
      {reviews && reviews?.length && (
        <div className="mt-4 font-light">
          Average Rating:{" "}
          {(
            reviews?.reduce((a, b) => a + b.rating, 0) / reviews?.length
          ).toFixed(1)}
        </div>
      )}
    </>
  );
}
