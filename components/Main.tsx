"use client";

import Image from "next/image";
import React from "react";
import CustomButton from "./CustomButton";

const Main = () => {
  const handleScroll = () => {};

  return (
    <div className="hero">
      <div className="flex-1 pt-36 paddingx">
        <h1 className="hero__title">Rent a car</h1>
        <p className="hero__subtitle">Bla bla bla</p>
        <CustomButton
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
          <div className="hero__image-overlay" />
        </div>
      </div>
    </div>
  );
};

export default Main;
