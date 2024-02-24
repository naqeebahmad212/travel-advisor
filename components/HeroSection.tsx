"use client";
import { Search } from "@mui/icons-material";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import { useRef } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import HolidayVillageIcon from "@mui/icons-material/HolidayVillage";
import BusAlertIcon from "@mui/icons-material/BusAlert";
const HeroSection = () => {
  const slide1 = useRef<HTMLDivElement>(null);

  return (
    <div className="h-screen w-full">
      <div className="h-[100%] w-full overflow-hidden">
        <div
          ref={slide1}
          id="slide1"
          className="relative w-full h-[100%] bg-black transition-all duration-500"
          style={{
            backgroundImage: `url("/images/aron-visuals-6sMGdkj3Ywg-unsplash.jpg")`,
          }}
        >
          <div className="hero-contents relative flex flex-col gap-9 items-center overlay h-[100%] w-[100%]  bg-black bg-opacity-30  justify-center">
            <div className="w-[61%]">
              <h2 className="text-white text-center font-bold text-2xl md:text-3xl lg:text-7xl my-3">
                YOUR JOURNEY BEGINS
              </h2>
              <div className="relative">
                <input
                  type="text"
                  className="input w-full rounded-full p-3"
                  placeholder="Find Your Destination"
                />
                <Search className="absolute top-3 right-4 cursor-pointer text-[#5f2880]" />
              </div>
            </div>

            <div className=" w-[80%] p-3 flex gap-5 flex-col lg:flex-row justify-between items-center">
              <div className="boxes flex gap-2 lg:gap-5">
                <div className="card box bg-[#64467e]  shadow-lg h-[100px] w-[110px]">
                  <div className="text-center text-white p-1 bg-blue-950 w-[80%] mx-auto m-2 rounded-lg">
                    <CheckCircleIcon className="text-[20px]" /> 78345+
                  </div>
                  <span className="text-center px-2 font-extralight text-sm  text-white">
                    Satisfied Clients
                  </span>
                </div>
                <div className="card bg-[#64467e] h-[100px] w-[110px]">
                  <div className="text-center text-white p-1 bg-blue-950 w-[80%] mx-auto m-2 rounded-lg">
                    <HolidayVillageIcon className="text-[20px]" /> 503+
                  </div>
                  <span className="text-center px-2 font-extralight text-sm text-white">
                    Camps Organized
                  </span>
                </div>
                <div className="card bg-[#64467e] h-[100px] w-[110px]">
                  <div className="text-center text-white p-1 bg-blue-950 w-[80%] mx-auto m-2 rounded-lg">
                    <BusAlertIcon className="text-[20px]" /> 0
                  </div>
                  <span className="text-center font-extralight text-sm text-white">
                    Incidents Happened
                  </span>
                </div>
              </div>

              <div className=" w-[250px] h-[150px] ">
                <div className="w-full h-[100%] carousel rounded-box">
                  <div
                    className="carousel-item w-full bg-cover object-cover bg-center cursor-pointer"
                    style={{
                      backgroundImage: `url("/images/daiwei-lu-tU7sNs6tmt8-unsplash.jpg")`,
                    }}
                  >
                    <div className="w-full h-[100%] bg-black bg-opacity-40 flex justify-center items-center">
                      <span className="w-[70%] mx-auto text-white text-sm font-extralight">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ab, totam similique beatae autem pariatur et
                      </span>
                    </div>
                  </div>
                  <div
                    className="carousel-item w-full  bg-cover object-cover bg-center cursor-pointer"
                    style={{
                      backgroundImage: `url("/images/bravingbird-FaM4HDuHk_o-unsplash-min (1).jpg")`,
                    }}
                  >
                    <div className="w-full h-[100%] bg-black bg-opacity-40 flex justify-center items-center">
                      <span className="w-[70%] mx-auto text-white text-sm font-extralight">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ab, totam similique beatae autem pariatur et
                      </span>
                    </div>
                  </div>

                  <div
                    className="carousel-item w-full  bg-cover object-cover bg-center cursor-pointer"
                    style={{
                      backgroundImage: `url("/images/fabien-bellanger-WyfXOHgI49s-unsplash-min.jpg")`,
                    }}
                  >
                    <div className="w-full h-[100%] bg-black bg-opacity-40 flex justify-center items-center">
                      <span className="w-[70%] mx-auto text-white text-sm font-extralight">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ab, totam similique beatae autem pariatur et
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
