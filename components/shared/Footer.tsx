import {
  Facebook,
  GitHub,
  Instagram,
  LinkedIn,
  Twitter,
  YouTube,
} from "@mui/icons-material";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#162237] text-white">
      <h2 className="p-5 text-2xl">Travel Advisor</h2>
      <div className=" flex items-start justify-center lg:justify-between  flex-wrap lg:flex-nowrap border-b ">
        <div className="flex items-center  w-full md:w-[50%] ">
          <ul className="p-5">
            <li className="font-bold py-1"> Company</li>
            <li className="py-1">About Us</li>
            <li className="py-1">Investors</li>
            <li className="py-1">Blogs</li>
            <li className="py-1">Careers</li>
          </ul>
        </div>
        <div className="flex items-start  w-full md:w-[50%]">
          <ul className="p-5">
            <li className="font-bold py-1"> Products</li>
            <li className="py-1">Ride</li>
            <li className="py-1">Drive</li>
            <li className="py-1">Eat</li>
            <li className="py-1">Uber Frieght</li>
          </ul>
        </div>
        <div className="flex items-center w-full md:w-[50%]">
          <ul className="p-5">
            <li className="font-bold py-1"> Global Citizenship</li>
            <li className="py-1">Safty</li>
            <li className="py-1">Diversity</li>
            <li className="py-1">Transparency</li>
          </ul>
        </div>
        <div className="flex items-center  w-full md:w-[50%]">
          <ul className="p-5">
            <li className="font-bold py-1"> Innovation</li>
            <li className="py-1">Ai</li>
            <li className="py-1">Elevate</li>
            <li className="py-1">Transparency</li>
          </ul>
        </div>
      </div>
      <div className="social flex items-center justify-around p-5">
        <div className="flex gap-3">
          <LinkedIn className="hover:text-black cursor-pointer transition-all duration-300 ease-linear" />{" "}
          <GitHub className="hover:text-black cursor-pointer transition-all duration-300 ease-linear" />{" "}
          <Instagram className="hover:text-black cursor-pointer transition-all duration-300 ease-linear" />{" "}
          <Facebook className="hover:text-black cursor-pointer transition-all duration-300 ease-linear" />{" "}
          <Twitter className="hover:text-black cursor-pointer transition-all duration-300 ease-linear" />{" "}
          <YouTube className="hover:text-black cursor-pointer transition-all duration-300 ease-linear" />
        </div>
        <div>
          <h3>&copy; Uber Technologies inc.</h3>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
