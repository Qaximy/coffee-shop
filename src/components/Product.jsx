import React from "react";
import img1 from "../assets/product1.jpg";
import img2 from "../assets/product2.jpg";
import img3 from "../assets/product3.jpg";
import Productcard from "../components/Layout/Productcard";

const Product = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 bg-backgroundColor">
      <h1 className=" font-semibold text-center text-4xl lg:mt-14 mt-24 mb-8">
        Our Products
      </h1>

      <div className=" flex flex-col lg:flex-row gap-12 justify-center">
        <Productcard img={img1} title="Nespresso" />
        <Productcard img={img2} title="AeroPress" />
        <Productcard img={img3} title="Chemex" />
      </div>
    </div>
  );
};

export default Product;