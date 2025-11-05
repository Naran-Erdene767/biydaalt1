"use client";
import Header from "../../../Header/header";
import Footer from "../../../Footer/footer";
import { useState } from "react";
import { useRouter } from "next/navigation";
const products = [
  {
    id: 1,
    name: "Acme Keyboard",
    price: 150,
    image: "/keyboard.avif",
    category: "Electronics",
    popularity: 90,
  },
  {
    id: 2,
    name: "Acme T-Shirt",
    price: 20,
    image: "/t-shirt-color-black.avif",
    category: "Shirts",
    popularity: 80,
  },
  {
    id: 3,
    name: "Acme Hoodie",
    price: 50,
    image: "hoodie-1.avif",
    category: "Hoodies",
    popularity: 95,
  },
  {
    id: 4,
    name: "Acme Cowboy Hat",
    price: 160,
    image: "/cowboy-hat-black-1.avif",
    category: "Headwear",
    popularity: 70,
  },
  {
    id: 5,
    name: "Acme Circles T-Shirt",
    price: 20,
    image: "/t-shirt-1.avif",
    category: "Shirts",
    popularity: 75,
  },
  {
    id: 6,
    name: "Acme Prism T-Shirt",
    price: 25,
    image: "/t-shirt-spiral-1.avif",
    category: "Shirts",
    popularity: 65,
  },
  {
    id: 7,
    name: "Acme Sticker",
    price: 4,
    image: "sticker.avif",
    category: "Stickers",
    popularity: 50,
  },
  {
    id: 8,
    name: "Acme Mug",
    price: 15,
    image: "/mug-1.avif",
    category: "Drinkware",
    popularity: 85,
  },
  {
    id: 9,
    name: "Acme Slip-on Shoes",
    price: 45,
    image: "/shoes-1.avif",
    category: "Footware",
    popularity: 88,
  },
  {
    id: 10,
    name: "Acme Rainbow Stickers",
    price: 4,
    image: "/sticker-rainbow.avif",
    category: "Stickers",
    popularity: 55,
  },
  {
    id: 11,
    name: "Acme Cap",
    price: 20,
    image: "/hat-1.avif",
    category: "Headwear",
    popularity: 60,
  },
  {
    id: 12,
    name: "Acme Dog Sweater",
    price: 20,
    image: "/dog-sweater-1.avif",
    category: "Pets",
    popularity: 68,
  },
  {
    id: 13,
    name: "Acme Cup",
    price: 15,
    image: "/cup-black.avif",
    category: "Drinkware",
    popularity: 75,
  },
  {
    id: 14,
    name: "Acme Bomber Jacket",
    price: 50,
    image: "/bomber-jacket-army.avif",
    category: "Jackets",
    popularity: 92,
  },
  {
    id: 15,
    name: "Acme Baby Cap",
    price: 10,
    image: "/baby-cap-black.avif",
    category: "Headwear",
    popularity: 58,
  },
  {
    id: 16,
    name: "Acme Drawstring Bag",
    price: 12,
    image: "/bag-1-dark.avif",
    category: "Bags",
    popularity: 64,
  },
  {
    id: 17,
    name: "Acme Pacifier",
    price: 10,
    image: "/pacifier-1.avif",
    category: "Kids",
    popularity: 67,
  },
  {
    id: 18,
    name: "Acme Baby Onesie",
    price: 10,
    image: "/baby-onesie-beige-1.avif",
    category: "Kids",
    popularity: 72,
  },
];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOption, setSortOption] = useState("Relevance");
  const router = useRouter();
  const categories = [
    "All", "Bags", "Drinkware", "Electronics", "Footware", "Headwear",
    "Hoodies", "Jackets", "Kids", "Pets", "Shirts", "Stickers"
  ];

  let filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === "Price: Low to high") return a.price - b.price;
    if (sortOption === "Price: High to low") return b.price - a.price;
    if (sortOption === "Latest arrivals") return b.id - a.id;
    if (sortOption === "Trending") return b.popularity - a.popularity;
    if (sortOption === "Relevance") return a.id - b.id;
    return 0;
  });

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100">
      <Header />

      <main className="p-4 sm:p-8 flex flex-col md:flex-row gap-6 w-full max-w-[1440px]">
        <div className="flex-shrink-0 mb-6 md:mb-0">
          <p className="text-sm text-gray-400 font-bold mb-4">Collections</p>
          <div className="flex flex-wrap md:flex-col gap-2 items-start text-sm mb-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`hover:text-black border-b-2 border-transparent hover:border-black transition cursor-pointer text-xs sm:text-sm ${selectedCategory === cat
                    ? "border-black text-black font-medium"
                    : "text-gray-500"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 flex-grow">
          {sortedProducts.map((product) => (
            <div
              onClick={() => router.push(`/product${product.id}`)}
              key={product.id}
              className="cursor-pointer relative group bg-white rounded-2xl overflow-hidden shadow-sm flex flex-col justify-center items-center p-6 sm:p-8 md:p-10 h-full border border-transparent hover:border-blue-400 transition"
            >
              <div className="flex-grow flex justify-center items-center w-full">
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-contain w-full h-auto max-h-[250px] sm:max-h-[300px] md:max-h-[350px] transition-transform duration-300 ease-in-out group-hover:scale-110"
                />
              </div>

              <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 bg-white/80 backdrop-blur-sm rounded-full px-3 py-1 sm:px-3 sm:py-2 flex items-center gap-2 sm:gap-3 border border-gray-200">
                <p className="text-xs sm:text-sm text-black font-medium">
                  {product.name}
                </p>
                <span className="text-xs sm:text-sm bg-blue-600 text-white font-semibold px-3 py-1 rounded-full">
                  ${product.price}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="flex-shrink-0 mt-6 md:mt-0">
          <p className="text-sm text-gray-400 font-bold mb-4">Sort by</p>
          <div className="flex flex-wrap md:flex-col gap-2 items-start text-sm">
            {[
              "Relevance",
              "Trending",
              "Latest arrivals",
              "Price: Low to high",
              "Price: High to low",
            ].map((sort) => (
              <button
                key={sort}
                onClick={() => setSortOption(sort)}
                className={`hover:text-black border-b-2 border-transparent hover:border-black transition cursor-pointer text-xs sm:text-sm ${sortOption === sort
                    ? "border-black text-black font-medium"
                    : "text-gray-500"
                  }`}
              >
                {sort}
              </button>
            ))}
          </div>
        </div>
      </main>
      <div className="mt-96"></div>
      <Footer />
    </div>
  );
}
