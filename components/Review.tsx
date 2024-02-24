import { Rating } from "@mui/material";
import React from "react";

const Review = () => {
  return (
    <div className=" flex flex-col">
      <div>
        <h2 className="text-red-500 text-center">Reviews</h2>
        <h2 className="text-xl text-center text-white">
          What our clients <br /> say
        </h2>
      </div>
      <div
        className="rev w-[50%] text-center mx-auto py-3 bg-cover object-cover bg-center"
        style={{ backgroundImage: `url("/images/qoutes.png")` }}
      >
        <Rating value={4} />
        <p className="text-center px-10 text-sm text-white">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          non sint mollitia nihil placeat, rem a, ratione doloremque harum rerum
          fugit dolorem iste quam asperiores, quae maxime beatae amet qui!
        </p>
      </div>
    </div>
  );
};

export default Review;
