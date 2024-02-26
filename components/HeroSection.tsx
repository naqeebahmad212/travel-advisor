"use client";
import { Search } from "@mui/icons-material";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import { useRef } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import HolidayVillageIcon from "@mui/icons-material/HolidayVillage";
import BusAlertIcon from "@mui/icons-material/BusAlert";
import Carousel from "react-material-ui-carousel";
const HeroSection = () => {
  const slide1 = useRef<HTMLDivElement>(null);

  return (
    <div className="h-screen w-full">
      <div className="h-[100%] w-full overflow-hidden">
        <Carousel autoPlay stopAutoPlayOnHover swipe className="w-full h-full">
          <div
            ref={slide1}
            id="slide1"
            className="carousel-item relative w-full h-screen transition-all duration-300 bg-no-repeat bg-center object-cover"
            style={{
              backgroundImage: `url("https://images.unsplash.com/photo-1535632788826-78ca9d09d2e7?q=80&w=1516&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
            }}
          >
            <div className="hero-contents relative  flex flex-col gap-9 items-center overlay h-[100%] w-[100%]  bg-black bg-opacity-30  justify-center">
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
                    <div className="text-center text-white p-1 bg-blue-950 w-[80%] mx-auto m-2 rounded-lg flex items-center gap-1">
                      <CheckCircleIcon className="text-[20px]" /> 78345+
                    </div>
                    <span className="text-center px-2 font-extralight text-sm  text-white">
                      Satisfied Clients
                    </span>
                  </div>
                  <div className="card bg-[#64467e] h-[100px] w-[110px]">
                    <div className="text-center text-white p-1 bg-blue-950 w-[80%] mx-auto m-2 rounded-lg flex items-center gap-1 justify-center">
                      <HolidayVillageIcon className="text-[20px]" /> 503+
                    </div>
                    <span className="text-center px-2 font-extralight text-sm text-white">
                      Camps Organized
                    </span>
                  </div>
                  <div className="card bg-[#64467e] h-[100px] w-[110px]">
                    <div className="text-center text-white p-1 bg-blue-950 w-[80%] mx-auto m-2 rounded-lg flex items-center gap-1 justify-center">
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
                        backgroundImage: `url("https://images.unsplash.com/photo-1535632788826-78ca9d09d2e7?q=80&w=1516&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
                      }}
                    >
                      <div className="w-full h-[100%] bg-black bg-opacity-40 flex justify-center items-center">
                        <span className="w-[70%] mx-auto text-white text-sm font-extralight">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Ab, totam similique beatae autem pariatur et
                        </span>
                      </div>
                    </div>
                    <div
                      className="carousel-item w-full  bg-cover object-cover bg-center cursor-pointer"
                      style={{
                        backgroundImage: `url("https://images.unsplash.com/photo-1705651250587-5e2981d23493?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
                      }}
                    >
                      <div className="w-full h-[100%] bg-black bg-opacity-40 flex justify-center items-center">
                        <span className="w-[70%] mx-auto text-white text-sm font-extralight">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Ab, totam similique beatae autem pariatur et
                        </span>
                      </div>
                    </div>

                    <div
                      className="carousel-item w-full  bg-cover object-cover bg-center cursor-pointer"
                      style={{
                        backgroundImage: `url("https://images.unsplash.com/photo-1483666852720-824ca74c50ca?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
                      }}
                    >
                      <div className="w-full h-[100%] bg-black bg-opacity-40 flex justify-center items-center">
                        <span className="w-[70%] mx-auto text-white text-sm font-extralight">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Ab, totam similique beatae autem pariatur et
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            ref={slide1}
            id="slide2"
            className="carousel-item relative w-full h-screen transition-all duration-300 bg-no-repeat bg-cover bg-center object-cover"
            style={{
              backgroundImage: `url("https://images.unsplash.com/photo-1601687304561-387a8d2f4155?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
            }}
          >
            <div className="hero-contents relative  flex flex-col gap-9 items-center overlay h-[100%] w-[100%]  bg-black bg-opacity-30  justify-center">
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
                    <div className="text-center text-white p-1 bg-blue-950 w-[80%] mx-auto m-2 rounded-lg flex items-center gap-1">
                      <CheckCircleIcon className="text-[20px]" /> 78345+
                    </div>
                    <span className="text-center px-2 font-extralight text-sm  text-white">
                      Satisfied Clients
                    </span>
                  </div>
                  <div className="card bg-[#64467e] h-[100px] w-[110px]">
                    <div className="text-center text-white p-1 bg-blue-950 w-[80%] mx-auto m-2 rounded-lg flex items-center gap-1 justify-center">
                      <HolidayVillageIcon className="text-[20px]" /> 503+
                    </div>
                    <span className="text-center px-2 font-extralight text-sm text-white">
                      Camps Organized
                    </span>
                  </div>
                  <div className="card bg-[#64467e] h-[100px] w-[110px]">
                    <div className="text-center text-white p-1 bg-blue-950 w-[80%] mx-auto m-2 rounded-lg flex items-center gap-1 justify-center">
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
                        backgroundImage: `url("https://images.unsplash.com/photo-1535632788826-78ca9d09d2e7?q=80&w=1516&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
                      }}
                    >
                      <div className="w-full h-[100%] bg-black bg-opacity-40 flex justify-center items-center">
                        <span className="w-[70%] mx-auto text-white text-sm font-extralight">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Ab, totam similique beatae autem pariatur et
                        </span>
                      </div>
                    </div>
                    <div
                      className="carousel-item w-full  bg-cover object-cover bg-center cursor-pointer"
                      style={{
                        backgroundImage: `url("https://images.unsplash.com/photo-1705651250587-5e2981d23493?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
                      }}
                    >
                      <div className="w-full h-[100%] bg-black bg-opacity-40 flex justify-center items-center">
                        <span className="w-[70%] mx-auto text-white text-sm font-extralight">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Ab, totam similique beatae autem pariatur et
                        </span>
                      </div>
                    </div>

                    <div
                      className="carousel-item w-full  bg-cover object-cover bg-center cursor-pointer"
                      style={{
                        backgroundImage: `url("https://images.unsplash.com/photo-1601687304561-387a8d2f4155?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D")`,
                      }}
                    >
                      <div className="w-full h-[100%] bg-black bg-opacity-40 flex justify-center items-center">
                        <span className="w-[70%] mx-auto text-white text-sm font-extralight">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Ab, totam similique beatae autem pariatur et
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default HeroSection;
