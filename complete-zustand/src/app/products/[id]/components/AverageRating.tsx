"use client";
import { useReviews } from "@/app/store/ReviewsProvider";

export default function AverageRating() {
  const reviews = useReviews()((state) => state.reviews);

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
