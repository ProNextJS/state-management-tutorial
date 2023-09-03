import { Product, Review } from "./types";

const products = [
  {
    id: 1,
    image: "/castle-t-shirt.jpg",
    name: "Castle T-Shirt",
    price: 25,
    description:
      "Beware the castle of the blue wizard of Bazmagar! It is said that he has a dragon!",
    reviews: [
      {
        rating: 5,
        text: "This is the best t-shirt I've ever owned! The design is amazing and the quality is top-notch.",
      },
      {
        rating: 4,
        text: "I really like this t-shirt, the design is cool and it's comfortable to wear. The only downside is that it shrunk a bit after washing.",
      },
    ],
  },
  {
    id: 2,
    image: "/dragon-t-shirt.jpg",
    name: "Dragon T-Shirt",
    price: 25,
    description:
      "This dragon is not to be trifled with, his fire has burned many enemies to ash!",
    reviews: [
      {
        rating: 5,
        text: "I love this t-shirt! The dragon design is awesome and the material is high-quality.",
      },
      {
        rating: 5,
        text: "This is my new favorite t-shirt! The dragon design is so cool and the fit is perfect.",
      },
    ],
  },
  {
    id: 3,
    image: "/elf-t-shirt.jpg",
    name: "Elf T-Shirt",
    price: 25,
    description:
      "This fierce elf is ready to take on any foe, with her trusty bow and arrow!",
    reviews: [
      {
        rating: 4,
        text: "I really like this t-shirt, the elf design is unique and the fabric is soft. The only downside is that it's a bit too long for my liking.",
      },
      {
        rating: 5,
        text: "This t-shirt is amazing! The elf design is so cool and the fit is perfect. I've gotten so many compliments on it.",
      },
    ],
  },
  {
    id: 4,
    image: "/wizard-t-shirt.jpg",
    name: "Wizard T-Shirt",
    price: 25,
    description:
      "This wizard is ready to cast a spell on you, and it won't be a good one!",
    reviews: [
      {
        rating: 5,
        text: "This t-shirt is awesome! The wizard design is so cool and the material is high-quality.",
      },
      {
        rating: 4,
        text: "I really like this t-shirt, the wizard design is unique and the fabric is soft. The only downside is that it's a bit too tight around the neck.",
      },
    ],
  },
  {
    id: 5,
    image: "/wizard-t-shirt-2.jpg",
    name: "Wizard T-Shirt ][",
    price: 25,
    description:
      "The wizard is powerful and knows many dangerous spells, beware traveller!",
    reviews: [
      {
        rating: 5,
        text: "This is the best t-shirt I've ever owned! The wizard design is amazing and the quality is top-notch.",
      },
      {
        rating: 5,
        text: "I love this t-shirt! The wizard design is so cool and the fit is perfect. I wear it all the time.",
      },
    ],
  },
  {
    id: 6,
    image: "/barbarian-t-shirt.jpg",
    name: "Barbarian T-Shirt",
    price: 25,
    description:
      "This barbarian is ready to take on any foe, with his trusty broadsword!",
    reviews: [
      {
        rating: 4,
        text: "I really like this t-shirt, the barbarian design is unique and the fabric is soft. The only downside is that it's a bit too baggy.",
      },
      {
        rating: 5,
        text: "This t-shirt is amazing! The barbarian design is so cool and the fit is perfect. I've gotten so many compliments on it.",
      },
    ],
  },
];

export const getProducts = async (): Promise<Product[]> => products;

export const addReview = async (
  id: number,
  review: {
    rating: number;
    text: string;
  }
): Promise<Review[] | undefined> => {
  const product = await getProductById(id);
  if (product) {
    product.reviews.push(review);
  }
  return product?.reviews;
};

export const getProductById = async (
  id: number
): Promise<Product | undefined> =>
  getProducts().then((products) => products.find((p) => p.id === id));
