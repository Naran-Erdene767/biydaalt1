"use client";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full flex flex-col md:flex-row items-center md:items-start justify-between px-6 sm:px-10 md:px-20 lg:px-40 xl:px-80 py-10 bg-gray-50 text-sm gap-8 md:gap-0">
      <div className="flex flex-col sm:flex-row items-center md:items-start gap-8 sm:gap-16 text-center sm:text-left">
        <div className="flex flex-col items-center sm:items-start gap-4">
          <a href="/" className="flex flex-col items-center sm:items-start gap-4">
            <div className="flex items-center gap-2">
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
            </div>
          </a>
        </div>
        <nav className="flex flex-col items-center sm:items-start gap-2 text-gray-400 text-sm font-medium">
          <a href="#" className="hover:text-black border-b-2 border-transparent hover:border-black transition">Home</a>
          <a href="#" className="hover:text-black border-b-2 border-transparent hover:border-black transition">About</a>
          <a href="#" className="hover:text-black border-b-2 border-transparent hover:border-black transition">Terms & Conditions</a>
          <a href="#" className="hover:text-black border-b-2 border-transparent hover:border-black transition">Shipping & Return Policy</a>
          <a href="#" className="hover:text-black border-b-2 border-transparent hover:border-black transition">Privacy Policy</a>
          <a href="#" className="hover:text-black border-b-2 border-transparent hover:border-black transition">FAQ</a>
        </nav>
      </div>
      <button
        className="flex items-center flex-row-reverse gap-1 px-3 py-1.5 border rounded-md hover:bg-gray-100 transition cursor-pointer"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <ArrowUp size={14} />
        <span>Deploy</span>
      </button>
    </footer>
  );
}
