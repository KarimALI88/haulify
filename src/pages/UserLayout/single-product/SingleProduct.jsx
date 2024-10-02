import React, { useState } from "react";
import ReactStars from "react-stars";

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
  return (
    <div className="my-10 p-16">
      <div className="flex flex-wrap gap-10 w-[100%]">
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
            <h6 className="font-[700] text-3xl dark:text-white">{product.price} EGP</h6>
            <h5 className="bg-mainColor px-4 py-1 rounded-2xl text-center font-[500] text-[16px]">-{product?.offers}</h5>
          </div>
          <p className="my-5 font-[400] text-xl text-[#00000099] dark:text-white">{product.description}</p>
          <hr />
          <div className="my-5">
            <h3 className="font-[400] text-xl text-[#00000099] my-5 dark:text-white">Sizes</h3>
            <div className="flex flex-wrap gap-10">
              <span className="px-4 py-2 bg-[#F0F0F0] shadow-sm rounded-md cursor-pointer">small</span>
              <span className="px-4 py-2 bg-[#F0F0F0] shadow-sm rounded-md cursor-pointer">large</span>
              <span className="px-4 py-2 bg-[#F0F0F0] shadow-sm rounded-md cursor-pointer">XL</span>
              <span className="px-4 py-2 bg-[#F0F0F0] shadow-sm rounded-md cursor-pointer">2XL</span>
            </div>
          </div>
          <hr />

        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
