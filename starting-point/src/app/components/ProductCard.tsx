import Image from "next/image";

const ProductCard = ({
  name,
  description,
  price,
  image,
  small,
}: {
  name?: string;
  image?: string | null;
  description?: string;
  price?: number;
  small?: boolean;
}) => (
  <div className="p-2 flex flex-col">
    <Image
      className={`aspect-[2/2] rounded-md object-cover`}
      src={image ?? ""}
      alt={`${name} image`}
      width={1024}
      height={1024}
    />
    <div>
      {name && (
        <h3
          className={`mt-2 font-bold leading-10 text-gray-100 ${
            small ? "" : "text-xl"
          }`}
        >
          {name}
        </h3>
      )}
      {!small && price && (
        <div className="my-1 text-md leading-5 text-gray-300">
          {price.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </div>
      )}
      {!small && description && (
        <div className="mt-1 text-sm leading-5 text-gray-300 font-light italic">
          {description}
        </div>
      )}
    </div>
  </div>
);

export default ProductCard;
