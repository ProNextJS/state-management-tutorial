import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { revalidatePath } from "next/cache";

import Reviews from "./components/Reviews";
import AddToCart from "@/app/components/AddToCart";
import ProductCard from "@/app/components/ProductCard";
import AverageRating from "./components/AverageRating";

import { getProductById, getProducts } from "@/api/products";
import { addToCart } from "@/api/cart";
import { addReview } from "@/api/products";

export const dynamic = "force-dynamic";

export default async function ProductDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  const product = await getProductById(+id);
  const products = await getProducts();

  if (!product) {
    notFound();
  }

  const addToCartAction = async () => {
    "use server";
    return await addToCart(+id);
  };
  const addReviewAction = async (text: string, rating: number) => {
    "use server";
    const reviews = await addReview(+id, { text, rating });
    revalidatePath(`/products/${id}`);
    return reviews || [];
  };

  return (
    <div className="flex flex-wrap">
      <div className="w-full md:w-1/2">
        <Image
          className="aspect-[2/2] rounded-md object-cover"
          src={product.image ?? ""}
          alt={`${product.name} image`}
          width={1024}
          height={1024}
        />
      </div>
      <div className="w-full md:w-1/2 p-5">
        <h1 className="text-3xl font-bold leading-10 text-gray-100">
          {product.name}
        </h1>
        <div className="my-1 text-md leading-5 text-gray-300">
          {product.price.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </div>
        <div className="mt-1 text-sm leading-5 text-gray-300 font-light italic">
          {product.description}
        </div>
        <AverageRating reviews={product.reviews} />
        <div className="flex justify-end">
          <AddToCart addToCartAction={addToCartAction} />
        </div>
      </div>
      <div className="w-full">
        <Reviews reviews={product.reviews} addReviewAction={addReviewAction} />
      </div>
      <div className="flex flex-wrap gap-2 w-full">
        <h1 className="text-2xl font-bold mt-2 -mb-2">Related Products</h1>
        <ul role="list" className="flex flex-row flex-wrap m-2">
          {products
            .filter((p) => p.id !== +id)
            .map((product) => (
              <li key={product.id} className="md:w-1/5">
                <Link href={`/products/${product.id}`}>
                  <ProductCard {...product} small />
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
