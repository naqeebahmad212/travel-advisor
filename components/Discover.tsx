import React from "react";

const Discover = () => {
  return (
    <div
      className="w-full h-[100%] bg-cover object-cover bg-center"
      style={{ backgroundImage: `url("/images/discover.png")` }}
    >
      <div className="w-full">
        <h2 className="pt-10 mx-auto text-center text-red-400 w-full">
          Discover
        </h2>
        <p className="mx-auto text-center text-white w-full text-lg">
          {" "}
          Discover the world through <br /> our eyes
        </p>
      </div>

      <div
        className="w-full mx-auto mt-[170px] min-h-[60%] text-white flex items-center justify-center bg-center object-cover overflow-hidden bg-cover"
        style={{ backgroundImage: `url("/images/chrome_OPTmRBDa4n.gif")` }}
      >
        <button className="btn btn-success text-white mt-10">Book Now</button>
      </div>
    </div>
  );
};

export default Discover;
