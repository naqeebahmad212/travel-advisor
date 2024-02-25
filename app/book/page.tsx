import FeatureImages from "@/components/bookingDetails/FeatureImages";
import ProductDetails from "@/components/bookingDetails/ProductDetails";
import React from "react";

const BookPage = () => {
  return (
    <section className=" pb-[50px] bg-[#162237]">
      <div className="featured-Image  flex items-center justify-center min-h-[100vh] ">
        <div className="flex flex-col lg:flex-row h-[60%] w-[85%] gap-[100px]">
          <div className="w-full lg:w-[60%] rounded-lg min-h-[300px] overflow-hidden">
            <FeatureImages />
          </div>
          <div className="bg-[#142441] rounded-xl mx-auto w-[40%] shadow-lg p-5">
            <ProductDetails />
          </div>
        </div>
      </div>

      <div className="description w-[60%] bg-white mx-auto p-6 rounded-lg">
        <h2 className="font-bold text-lg mb-3">Package Description</h2>
        <p>
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