import React, { useState } from "react";
import Header from "../../../components/UserComponents/header/Header";
import Product from "../../../components/UserComponents/product/Product";
import { BsStars } from "react-icons/bs";
import { GiTakeMyMoney } from "react-icons/gi";
import CategoryCard from "../../../components/UserComponents/category/CategoryCard";
import menCategory from "../../../assets/menCategory.png";
import womenCategory from "../../../assets/women.png";
const Home = () => {
  const [newArrivals, setNewArrivals] = useState([
    {
      name: "T-Shirt",
      price: 40,
      rate: 4,
      image:
        "https://img.freepik.com/free-photo/simple-black-t-shirt-worn-by-man_53876-102772.jpg?size=626&ext=jpg&ga=GA1.1.421455853.1676884464&semt=ais_hybrid",
    },
    {
      name: "Jeans",
      price: 200,
      rate: 4.5,
      image:
        "https://img.freepik.com/free-photo/blue-jeans-fabric-details_150588-37.jpg?ga=GA1.1.421455853.1676884464&semt=ais_hybrid",
    },
    {
      name: "Sports T-shirt",
      price: 300,
      rate: 5,
      image:
        "https://img.freepik.com/free-photo/blue-shirt-stands-dark-room-with-light-ceiling_1340-38148.jpg?ga=GA1.1.421455853.1676884464&semt=ais_hybrid",
    },
    {
      name: "shoose",
      price: 400,
      rate: 4,
      image:
        "https://img.freepik.com/free-photo/pair-trainers_144627-3800.jpg?ga=GA1.1.421455853.1676884464&semt=ais_hybrid",
    },
  ]);

  return (
    <div>
      <Header />
      {/* ======================================================================================== */}
      <div className="bg-black p-10 flex justify-between items-start flex-wrap mb-10 w-[100%]">
        <h4 className="text-4xl text-white font-bold">VERSACE</h4>
        <h4 className="text-4xl text-white font-bold">ZARA</h4>
        <h4 className="text-4xl text-white font-bold">GUCCI</h4>
        <h4 className="text-4xl text-white font-bold">PRADA</h4>
        <h4 className="text-4xl text-white font-bold">CALVINKLEIN</h4>
      </div>
      {/* ======================================================================================== */}
      <div className="px-5 border-b-2 border-[#0000001A] py-16 my-10">
        <h2 className="text-center text-5xl font-bold my-16 mx-auto text-mainColor px-5 flex justify-center gap-4">
          <BsStars />
          NEW ARRIVALS
          <BsStars />
        </h2>
        <div className="flex justify-start items-start flex-wrap px-16 gap-10">
          {newArrivals.map((arrive, index) => (
            <Product
              key={index}
              name={arrive.name}
              image={arrive.image}
              price={arrive.price}
              rate={arrive.rate}
            />
          ))}
        </div>
      </div>
      {/* ========================================================================================= */}
      <div className="px-5 border-b-2 border-[#0000001A] py-16 my-10">
        <h2 className="text-center text-5xl font-bold my-16 mx-auto text-mainColor px-5 flex justify-center items-center gap-5">
          <GiTakeMyMoney />
          OFFERS
          <GiTakeMyMoney />
        </h2>
        <div className="flex justify-start items-start flex-wrap px-16 gap-10">
          {newArrivals.map((arrive, index) => (
            <Product
              key={index}
              name={arrive.name}
              image={arrive.image}
              price={arrive.price}
              rate={arrive.rate}
            />
          ))}
        </div>
      </div>
      {/* ========================================================================================= */}
      <div className="w-[90%] mx-auto my-10 rounded-2xl bg-[#F0F0F0] p-10 shadow-sm">
        <h2 className="my-10 text-center font-bold text-5xl">
          BROWSE BY DRESS STYLE
        </h2>
        <div className="flex gap-5 flex-wrap">
          <div className="w-full sm:w-[35%] cursor-pointer hover:rotate-12 ease-in-out duration-1000">
            <CategoryCard name={"Men"} image={menCategory} />
          </div>
          <div className="w-full sm:w-[60%] cursor-pointer hover:-rotate-12 ease-in-out duration-1000">
            <CategoryCard name={"Women"} image={womenCategory} />
          </div>
        </div>
      </div>
      {/* ========================================================================================= */}
    </div>
  );
};

export default Home;
