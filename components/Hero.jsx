"use client";

import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative bg-gray-100 py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div className="text-center md:text-left">
          <h2 className="text-slate-900 font-bold text-4xl md:text-5xl leading-tight">
            My <span className="text-orange-500">Boutique</span>
          </h2>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            Get all your fashion needs met here. We offer a wide range of
            affordable, quality, and stylish products.
          </p>
          <Link href="/products">
            <button
              type="button"
              className="px-6 py-3 mt-6 rounded-lg text-lg font-semibold bg-orange-500 hover:bg-orange-600 transition duration-300 shadow-lg"
            >
              Explore
            </button>
          </Link>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <Image
            src="/cover.webp"
            alt="Boutique Banner"
            width={500}
            height={400}
            className="rounded-lg shadow-lg"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
