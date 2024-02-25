import React from "react";

const ProductDetails = () => {
  return (
    <div className="flex gap-[30px] h-full justify-center">
      <div className="border-r border-gray-400 pr-3 my-auto">
        <h1 className="lg:text-lg mb-5 text-white font-bold">
          {" "}
          Check Product Details
        </h1>
        <h2 className="my-2 text-white">Product name goes here</h2>
        <div className="text-white">Example.com</div>
        <div className="text-red-600 line-through my-2">
          ₹ 968 <span className="badge badge-sm line-through">30%</span>
        </div>
        <p className="text-white">₹ 768</p>

        <button className="bg-green-400 mt-4 p-2 rounded-3xl hover:scale-[1.02] transition-all duration-150">
          Book Now
        </button>
      </div>
      <div className="my-auto text-white text-[14px]">
        <div className=" text-center px-2 my-2">
          Example.com <br /> <hr className=" divide-gray-600" />₹ 1265
        </div>
        <div className=" text-center px-2 my-2">
          Example.com <br /> <hr className=" divide-gray-600" />₹ 1265
        </div>
        <div className=" text-center px-2 my-2">
          Example.com <br /> <hr className=" divide-gray-600" />₹ 1265
        </div>
        <div className=" text-center px-2 my-2">
          Example.com <br /> <hr className=" divide-gray-600" />₹ 1265
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
