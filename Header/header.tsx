"use client";
import { Search, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
export default function Header() {
  const router = useRouter();
  return (
    <header className="w-full flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 px-4 sm:px-6 py-3 bg-gray-100 mt-6">
      <div className="flex flex-col sm:flex-row items-center sm:items-center md:items-center justify-center md:justify-start gap-3 sm:gap-6 w-full md:w-auto">
        <a href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 bg-white border border-gray-300 flex items-center justify-center rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Acme Store logo"
              viewBox="0 0 32 28"
              className="h-4 w-4 fill-black"
            >
              <path d="M21.5758 9.75769L16 0L0 28H11.6255L21.5758 9.75769Z"></path>
              <path d="M26.2381 17.9167L20.7382 28H32L26.2381 17.9167Z"></path>
            </svg>
          </div>
          <span className="font-semibold text-sm text-gray-700">ACME STORE</span>
        </a>
        <nav className="flex items-center justify-center flex-wrap gap-2 sm:gap-4 text-gray-400 text-sm font-medium">
          <button
            onClick={() => router.push("/all")}
            className="hover:text-black border-b-2 border-transparent hover:border-black transition cursor-pointer">All</button>
          <button
            onClick={() => router.push("/all")}
            className="hover:text-black border-b-2 border-transparent hover:border-black transition cursor-pointer">Shirts</button>
          <button
            onClick={() => router.push("/all")}
            className="hover:text-black border-b-2 border-transparent hover:border-black transition cursor-pointer">Stickers</button>
        </nav>
      </div>
      <div className="w-full md:flex-1 flex justify-center order-last md:order-none">
        <div className="relative w-full max-w-[600px] px-2">
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full bg-white h-10 border border-gray-300 rounded-md py-2 px-4 pr-10 text-sm font-semibold focus:ring-1 focus:ring-gray-600 focus:outline-none"
          />
          <Search className="absolute right-5 top-3.5 h-4 w-4 text-gray-400" />
        </div>
      </div>
      <button className="p-2 rounded-lg hover:bg-gray-200 border border-gray-300">
        <ShoppingCart className="h-5 w-5" />
      </button>
    </header>
  );
}
