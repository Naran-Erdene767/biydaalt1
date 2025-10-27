"use client";
import Header from "../../../Header/header";
import Footer from "../../../Footer/footer";

const products = [
  {
    id: 1,
    name: "Acme Cowboy Hat",
    price: 160,
    image: "/images/hat.jpg",
    category: "Headwear"
  },
  {
    id: 2,
    name: "Acme Keyboard",
    price: 150,
    image: "/images/keyboard.jpg",
    category: "Electronics"
  },
  {
    id: 3,
    name: "Acme T-Shirt",
    price: 20,
    image: "/images/tshirt.jpg",
    category: "Shirts"
  },
  {
    id: 4,
    name: "Acme Hoodie",
    price: 50,
    image: "/images/hoodie.jpg",
    category: "Hoodies"
  },
  {
    id: 5,
    name: "Acme Circles T-Shirt",
    price: 20,
    image: "/images/circles-shirt.jpg",
    category: "Shirts"
  },
  {
    id: 6,
    name: "Acme Prism T-Shirt",
    price: 25,
    image: "/images/prism-shirt.jpg",
    category: "Shirts"
  }
];

export default function Home() {
  return (
    <div>
      <Header />
      <main className="p-8 flex flex-row px-60 gap-10">
        <div className="mb-8">
          <p className="text-sm text-gray-400 font-bold mb-4">Collections</p>
          <div className="flex flex-col gap-2 items-start text-sm">
            <button className="hover:text-black border-b-2 border-transparent hover:border-black transition cursor-pointer">All</button>
            <button className="hover:text-black border-b-2 border-transparent hover:border-black transition cursor-pointer">Headwear</button>
            <button className="hover:text-black border-b-2 border-transparent hover:border-black transition cursor-pointer">Electronics</button>
            <button className="hover:text-black border-b-2 border-transparent hover:border-black transition cursor-pointer">Shirts</button>
            <button className="hover:text-black border-b-2 border-transparent hover:border-black transition cursor-pointer">Hoodies</button>
          </div>
        </div>

        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products.map((product) => (
              <div key={product.id} className="border rounded-lg p-4 flex flex-col items-center">
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4 rounded" />
                <h2 className="font-semibold text-lg">{product.name}</h2>
                <p className="text-gray-600">${product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
