import React from "react";
import Rating from "@mui/material/Rating";
import { Inter } from "next/font/google";
import { LocationCity, Timelapse } from "@mui/icons-material";

const inter: any = Inter({
  weight: "400",
  subsets: ["latin"],
});

const TopPackages = () => {
  return (
    <div className={`min-h-[100vh] bg-[#162237] w-full flex flex-col `}>
      <div className=" m-10 text-center md:text-start">
        <h2 className="text-warning">Packages</h2>
        <p className="text-xl text-white">
          Top Packages <br /> For You
        </p>
      </div>
      <div>
        <div className="w-full lg:w-[80%] min-h-full mx-auto relative flex gap-5 flex-col justify-center sm:block">
          <div
            className="h-[320px] rounded-xl overflow-hidden w-full sm:w-[50%] mx-auto  md:w-[24%] shadow-lg popular-cards bg-cover object-cover bg-center bg-slate-200 md:absolute top-0 left-0 mb-2 hover:scale-[1.03]  transition-all duration-500 ease-linear cursor-pointer hover:z-[99999]"
            style={{
              backgroundImage: `url("https://images.unsplash.com/photo-1535632788826-78ca9d09d2e7?q=80&w=1516&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
            }}
          >
            <div className="w-full h-full flex items-end">
              <div className={`p-2 text-sm text-white ${inter.className}`}>
                <Rating value={4} className="text-sm" />
                <p className="text-sm font-extralight">
                  The Kessungi Ridege Trail
                </p>
                <p className="text-[10px] py-1 font-extralight">
                  <Timelapse className="text-[15px]" /> 3 to 5 days
                </p>
                <p className="text-[10px] font-extralight">
                  <LocationCity className="text-[15px]" /> USA
                </p>
              </div>
            </div>
          </div>
          <div
            className="h-[320px] rounded-xl overflow-hidden w-full sm:w-[50%] mx-auto  md:w-[24%] shadow-lg popular-cards bg-cover object-cover bg-center bg-slate-400 md:absolute left-[18%] top-10 mb-2 hover:scale-[1.03]  transition-all duration-500 ease-linear cursor-pointer hover:z-[99999]"
            style={{
              backgroundImage: `url("https://images.unsplash.com/photo-1535632788826-78ca9d09d2e7?q=80&w=1516&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
            }}
          >
            <div className="w-full h-full flex items-end">
              <div className={`p-2 text-sm text-white ${inter.className}`}>
                <Rating value={4} className="text-sm" />
                <p className="text-sm font-extralight">
                  The Kessungi Ridege Trail
                </p>
                <p className="text-[10px] py-1 font-extralight">
                  <Timelapse className="text-[15px]" /> 3 to 5 days
                </p>
                <p className="text-[10px] font-extralight">
                  <LocationCity className="text-[15px]" /> USA
                </p>
              </div>
            </div>
          </div>
          <div
            className="h-[320px] rounded-xl overflow-hidden mx-auto w-full sm:w-[50%]  md:w-[24%] shadow-lg popular-cards bg-cover object-cover bg-center bg-slate-600 md:absolute z-[9999] left-[37%] top-[70px] mb-2 hover:scale-[1.03]  transition-all duration-500 ease-linear cursor-pointer "
            style={{
              backgroundImage: `url("https://images.unsplash.com/photo-1535632788826-78ca9d09d2e7?q=80&w=1516&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
            }}
          >
            <div className="w-full h-full flex items-end">
              <div className={`p-2 text-sm text-white ${inter.className}`}>
                <Rating value={4} className="text-sm" />
                <p className="text-sm font-extralight">
                  The Kessungi Ridege Trail
                </p>
                <p className="text-[10px] py-1 font-extralight">
                  <Timelapse className="text-[15px]" /> 3 to 5 days
                </p>
                <p className="text-[10px] font-extralight">
                  <LocationCity className="text-[15px]" /> USA
                </p>
              </div>
            </div>
          </div>
          <div
            className="h-[320px] rounded-xl overflow-hidden mx-auto  w-full sm:w-[50%]  md:w-[24%] shadow-lg popular-cards bg-cover object-cover bg-center bg-slate-800 md:absolute right-[18%] z-[999] top-10 mb-2 hover:scale-[1.03]  transition-all duration-500 ease-linear cursor-pointer hover:z-[99999]"
            style={{
              backgroundImage: `url("https://images.unsplash.com/photo-1535632788826-78ca9d09d2e7?q=80&w=1516&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
            }}
          >
            <div className="w-full h-full flex items-end">
              <div className={`p-2 text-sm text-white ${inter.className}`}>
                <Rating value={4} className="text-sm" />
                <p className="text-sm font-extralight">
                  The Kessungi Ridege Trail
                </p>
                <p className="text-[10px] py-1 font-extralight">
                  <Timelapse className="text-[15px]" /> 3 to 5 days
                </p>
                <p className="text-[10px] font-extralight">
                  <LocationCity className="text-[15px]" /> USA
                </p>
              </div>
            </div>
          </div>
          <div
            className="h-[320px] rounded-xl overflow-hidden mx-auto  w-full sm:w-[50%] md:w-[24%] shadow-lg popular-cards bg-cover object-cover bg-center bg-slate-500 md:absolute top-0 right-0 mb-2 hover:scale-[1.03]  transition-all duration-500 ease-linear cursor-pointer hover:z-[99999]"
            style={{
              backgroundImage: `url("https://images.unsplash.com/photo-1535632788826-78ca9d09d2e7?q=80&w=1516&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
            }}
          >
            <div className="w-full h-full flex items-end">
              <div className={`p-2 text-sm text-white ${inter.className}`}>
                <Rating value={4} className="text-sm" />
                <p className="text-sm font-extralight">
                  The Kessungi Ridege Trail
                </p>
                <p className="text-[10px] py-1 font-extralight">
                  <Timelapse className="text-[15px]" /> 3 to 5 days
                </p>
                <p className="text-[10px] font-extralight">
                  <LocationCity className="text-[15px]" /> USA
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopPackages;
