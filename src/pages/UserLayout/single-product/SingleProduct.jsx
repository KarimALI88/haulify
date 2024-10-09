import React, { useState } from "react";
import ReactStars from "react-stars";
import { Button } from "@material-tailwind/react";
import { IoIosCart } from "react-icons/io";
import { BsStars } from "react-icons/bs";
import Product from "../../../components/UserComponents/product/Product";

const SingleProduct = () => {
  const [product, setProduct] = useState({
    title: "One Life Graphic T-shirt",
    description:
      "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
    price: 100,
    offers: "30%",
    rate: 4,
    image:
      "https://img.freepik.com/free-photo/simple-black-t-shirt-worn-by-man_53876-102772.jpg?size=626&ext=jpg&ga=GA1.1.421455853.1676884464&semt=ais_hybrid",
    size: ["small", "medium", "large", "x-large"],
    count: 500,
  });

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

  const [numOfItem, setNumOfItem] = useState(0);

  const increment = () => {
    setNumOfItem((prevState) => prevState + 1);
  };

  const decrement = () => {
    setNumOfItem((prevState) => prevState - 1);
  };

  return (
    <div className="my-16 ">
      {/* single product */}
      <div className="px-16 flex flex-wrap gap-10 w-[100%]">
        <div className="lg:w-[40%] sm:w-[300px]">
          <img
            src={product.image}
            alt={product.title}
            className="lg:w-[100%] sm:w-[300px] h-[70vh] mb-5 shadow-xl rounded-2xl"
          />
        </div>
        <div className="lg:w-[50%] sm:w-[300px]">
          <h1 className="mb-5 font-[700] text-4xl text-mainColor uppercase">
            {product.title}
          </h1>
          <ReactStars
            count={5}
            size={30}
            activeColor="#ffd700"
            value={product.rate} // The rating value you want to display
            edit={false} // This makes the stars read-only
          />
          <div className="flex gap-10 items-center my-5">
            <h6 className="font-[700] text-3xl dark:text-white">
              {product.price} EGP
            </h6>
            <h5 className="bg-mainColor px-4 py-1 rounded-2xl text-center font-[500] text-[16px]">
              -{product?.offers}
            </h5>
          </div>
          <p className="my-5 font-[400] text-xl text-[#00000099] dark:text-white">
            {product.description}
          </p>
          <hr />
          <div className="my-5">
            <h3 className="font-[400] text-xl text-[#00000099] my-5 dark:text-white">
              Sizes
            </h3>
            <div className="flex flex-wrap gap-10">
              <span className="px-4 py-2 bg-[#F0F0F0] shadow-sm rounded-md cursor-pointer">
                small
              </span>
              <span className="px-4 py-2 bg-[#F0F0F0] shadow-sm rounded-md cursor-pointer">
                large
              </span>
              <span className="px-4 py-2 bg-[#F0F0F0] shadow-sm rounded-md cursor-pointer">
                XL
              </span>
              <span className="px-4 py-2 bg-[#F0F0F0] shadow-sm rounded-md cursor-pointer">
                2XL
              </span>
            </div>
          </div>
          <hr />
          <div className="flex flex-wrap gap-10 my-5 items-center">
            <div className="flex gap-5 bg-[#F0F0F0] rounded-full px-5 py-2 cursor-pointer">
              <button className="text-xl font-[500]" onClick={increment}>
                +
              </button>
              <button className="text-xl font-[500]">{numOfItem}</button>
              <button
                className="text-xl font-[500]"
                onClick={decrement}
                disabled={numOfItem === 0}
              >
                -
              </button>
            </div>
            <div>
              <Button className="rounded-full w-[300px] bg-mainColor justify-center text-black font-[500] text-lg flex items-center gap-5">
                <IoIosCart color="black" size={30} /> Add To Cart
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* ========================================================================== */}
      {/* recommendations */}
      <hr className="w-[50%] block border-[#0000001A] border-2 my-10 mx-auto rounded-full"/>

      <div className="my-16">
        <div className="flex justify-center items-center gap-5">
          <BsStars className="text-mainColor text-3xl" />
          <h3 className="text-center text-3xl font-bold text-mainColor">
            Recommendations{" "}
          </h3>
          <BsStars className="text-mainColor text-3xl" />
        </div>
      </div>

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
  );
};

export default SingleProduct;
