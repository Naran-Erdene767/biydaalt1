"use client";
import Header from "../../Header/header";
import Footer from "../../Footer/footer";
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Acme Circles T-Shirt",
    price: "$20.00 USD",
    image: "/t-shirt-1.avif"
  },
  {
    id: 2,
    name: "Acme Drawstring Bag",
    price: "$12.00 USD",
    image: "/bag-1-dark.avif"
  },
  {
    id: 3,
    name: "Acme Cup",
    price: "$15.00 USD",
    image: "/cup-black.avif"
  },
  {
    id: 4,
    name: "Acme Hoodie",
    price: "$50.00 USD",
    image: "/hoodie-1.avif"
  },
  {
    id: 5,
    name: "Acme Baby Onesie",
    price: "$10.00 USD",
    image: "/baby-onesie-beige-1.avif"
  },
  {
    id: 6,
    name: "Acme Baby Cap",
    price: "$10.00 USD",
    image: "/baby-cap-black.avif"
  },
  {
    id: 7,
    name: "Acme Mug",
    price: "$10.00 USD",
    image: "/mug-1.avif"
  },
];

export default function Home() {
  return (
    <div className="w-full flex flex-col bg-gray-100 min-h-screen">
      <Header />

      <main className="flex justify-center px-2 py-4">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-[1500px] mx-auto items-start">
          <div className="relative group col-span-1 md:col-span-2 bg-white rounded-2xl overflow-hidden shadow-sm flex justify-center items-center h-full">
            <Image
              src={products[0].image}
              alt={products[0].name}
              width={550}
              height={550}
              className="object-contain w-full max-h-[300px] sm:max-h-[400px] md:max-h-[550px] transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
            <div className="flex justify-center items-center absolute top-1/2 -translate-y-1/2 left-4 sm:left-8 md:left-20 bg-white/80 backdrop-blur-sm rounded-full px-2 py-2 gap-2 sm:gap-3 border border-gray-200">
              <p className="text-xs sm:text-sm text-black font-semibold">{products[0].name}</p>
              <span className="text-xs sm:text-sm bg-blue-600 text-white font-semibold px-3 py-1 rounded-full">
                {products[0].price}
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {products.slice(1, 3).map((product) => (
              <div
                key={product.id}
                className="relative group bg-white rounded-2xl overflow-hidden shadow-sm flex flex-col justify-center items-center p-4 sm:p-6 md:p-10 h-full"
              >
                <div className="flex-grow flex justify-center items-center">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="object-contain w-full h-auto max-h-[200px] sm:max-h-[250px] md:max-h-[300px] transition-transform duration-300 ease-in-out group-hover:scale-105"
                  />
                </div>
                <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 bg-white/80 backdrop-blur-sm rounded-full px-2 py-1 sm:px-2 sm:py-2 flex items-center gap-2 sm:gap-3 border border-gray-200">
                  <p className="text-xs sm:text-sm text-black font-medium">{product.name}</p>
                  <span className="text-xs sm:text-sm bg-blue-600 text-white font-semibold px-3 py-1 rounded-full">
                    {product.price}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <div className="relative overflow-x-scroll py-6">
        <div className="flex gap-6 w-max animate-marquee">
          {[...products.slice(3, 7), ...products.slice(3, 7)].map((product, idx) => (
            <div
              key={`${product.id}-${idx}`}
              className="relative flex-shrink-0 w-96 sm:w-[26rem] md:w-[28rem] h-48 sm:h-60 md:h-64 bg-white rounded-2xl overflow-hidden shadow-lg flex flex-col justify-center items-center p-4 sm:p-6"
            >
              <div className="flex-grow flex justify-center items-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-contain w-full h-auto max-h-[150px] sm:max-h-[180px] md:max-h-[200px] transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
              </div>
              <div className="absolute bottom-3 left-3 bg-white/80 backdrop-blur-sm rounded-full px-3 py-1.5 flex items-center gap-2 sm:gap-3 border border-gray-200">
                <p className="text-xs sm:text-sm text-black font-medium">{product.name}</p>
                <span className="text-xs sm:text-sm bg-blue-600 text-white font-semibold px-3 py-1.5 rounded-full whitespace-nowrap">
                  {product.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>



      <Footer />
    </div>
  );
}
