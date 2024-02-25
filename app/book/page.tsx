import FeatureImages from "@/components/bookingDetails/FeatureImages";
import ProductDetails from "@/components/bookingDetails/ProductDetails";
import React from "react";
import { Inter } from "next/font/google";

const inter: any = Inter({
  weight: "400",
  subsets: ["latin"],
});

const BookPage = () => {
  return (
    <section className="pb-[50px] bg-[#162237]">
      <div className="featured-Image flex items-center justify-center min-h-[120vh] lg:min-h-[100vh] ">
        <div className="flex flex-col lg:flex-row items-center h-[60%] w-[85%]  lg:gap-[100px]">
          <div className="w-full mt-5 lg:mt-0 lg:w-[60%] rounded-lg min-h-[260px] lg:min-h-[300px] overflow-hidden">
            <FeatureImages />
          </div>
          <div className="bg-[#142441] rounded-xl mx-auto w-full lg:w-[40%] shadow-lg p-5">
            <ProductDetails />
          </div>
        </div>
      </div>

      <div className="description w-[85%] mt-5 lg:mt-0 lg:w-[60%] bg-[#142441] shadow-xl text-white mx-auto p-6 rounded-lg">
        <h2 className="font-bold text-lg mb-3">Package Description</h2>
        <p className={`${inter.className}`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
          sit ab placeat vel fugit velit aspernatur fuga non, deserunt
          asperiores officia in quidem atque dolorem vero porro doloremque alias
          odit.
        </p>
      </div>
    </section>
  );
};

export default BookPage;
