"use client";
import Image from "next/image";
import React from "react";
import Carousel from "react-material-ui-carousel";

const FeatureImages = () => {
  const links: string[] = [
    "https://images.unsplash.com/photo-1708777339308-77642d14ce45?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1708718904342-b6b5e7cb6c27?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8",
    "https://images.unsplash.com/photo-1708516514746-9979b248d4bb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1708769915551-2f4a13f4b9e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D",
  ];
  return (
    <div className="min-h-full w-full">
      <Carousel autoPlay stopAutoPlayOnHover className="w-full h-[400px]">
        {links.map((link) => (
          <Image
            src={link}
            alt="slider"
            key={link}
            height={500}
            width={800}
            className="carousel-image w-full h-full"
          />
        ))}
      </Carousel>
    </div>
  );
};

export default FeatureImages;
