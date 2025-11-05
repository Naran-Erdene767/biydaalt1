"use client";
import React from "react";
import Header from "../../../Header/header";
import Footer from "../../../Footer/footer";
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
        images: {
            black: "t-shirt-1.avif",
            white: "t-shirt-2.avif",
        },
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
        images: {
            black: "bag-1-dark.avif",
            white: "bag-1-light.avif",
        },
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
const Home = () => {
    const [selectedColor, setSelectedColor] = React.useState("black");
    const [selectedSize, setSelectedSize] = React.useState("");

    const colors = ["black"];
    const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
    const product = products[2];
    const getImage = (color: string) => product.images?.[color as keyof typeof product.images] ?? product.image;
    return (
        <div className="bg-gray-100 text-black selection:bg-teal-300 dark:bg-neutral-900 dark:text-white dark:selection:bg-pink-500 min-h-screen relative">
            <Header />

            <div className="flex flex-col m-10 md:flex-row gap-10 p-6 max-w-[1400px] mx-auto bg-white shadow-lg rounded-xl">
                <div className="flex flex-col gap-4 w-full md:w-1/2">
                    <div className="relative w-full h-[500px] overflow-hidden flex justify-center items-center rounded-xl">
                        <img
                            src={getImage(selectedColor)}
                            alt={`${selectedColor} t-shirt`}
                            className="object-contain w-full h-full transition-transform duration-300 ease-in-out hover:scale-105"
                        />
                    </div>
                    <div className="flex gap-3 justify-center mt-2">
                        {colors.map((color) => (
                            <div
                                key={color}
                                className={`w-20 h-20 rounded-lg overflow-hidden cursor-pointer border-2 ${selectedColor === color ? "border-blue-500" : "border-gray-200"
                                    }`}
                                onClick={() => setSelectedColor(color)}
                            >
                                <img
                                    src={getImage(color)}
                                    alt={`${color} t-shirt`}
                                    className="object-contain w-full h-full"
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col gap-6 w-full md:w-1/2">
                    <h1 className="text-3xl font-bold">{product.name}</h1>
                    <span className="text-white bg-blue-600 px-3 py-1 rounded-full w-max font-semibold">
                        ${product.price} USD
                    </span>
                    <div className="flex flex-col gap-2">
                        <p className="font-semibold">Color</p>
                        <div className="flex gap-2">
                            {colors.map((color) => (
                                <button
                                    key={color}
                                    onClick={() => setSelectedColor(color)}
                                    className={`px-4 py-2 rounded-full border ${selectedColor === color
                                            ? "border-blue-500 bg-blue-100"
                                            : "border-gray-300"
                                        }`}
                                >
                                    {color.charAt(0).toUpperCase() + color.slice(1)}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="font-semibold">Size</p>
                        <div className="flex gap-2 flex-wrap">
                            {sizes.map((size) => (
                                <button
                                    key={size}
                                    onClick={() => setSelectedSize(size)}
                                    className={`px-4 py-2 rounded-full border ${selectedSize === size
                                            ? "border-blue-500 bg-blue-100"
                                            : "border-gray-300"
                                        }`}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>
                    <p className="text-gray-600">Fabric blend of Supima Cotton and Micromodal.</p>
                    <button
                        className={`w-full py-4 rounded-full font-semibold text-white transition-colors duration-200 ${selectedColor && selectedSize
                                ? "bg-blue-600"
                                : "bg-gray-400 cursor-not-allowed"
                            }`}
                        disabled={!selectedColor || !selectedSize}
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Home;