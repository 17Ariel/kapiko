import React from "react";
import Coffee from "./Coffee";
import capuccino from "../assets/capuccino.jpg";
import mocha from "../assets/mocha.jpg";
import baracko from "../assets/barako.jpeg";
import espresso from "../assets/espresso.jpeg";

const Products = () => {
  return (
    <div
      className="h-full py-4 lg:h-full xl:h-screen xxl:h-screen flex flex-col items-center justify-center bg-white gap-10"
      id="product">
      <h1 className="text-3xl font-semibold">Featured Products</h1>
      <div className="flex flex-row gap-4 flex-wrap justify-center">
        <Coffee bg={capuccino} name="Capuccino" price="P50.00" />
        <Coffee bg={mocha} name="Mocha" price="P60.00" />
        <Coffee bg={baracko} name="Barako" price="P35.00" />
        <Coffee bg={espresso} name="Espresso" price="P40.00" />
      </div>
    </div>
  );
};

export default Products;
