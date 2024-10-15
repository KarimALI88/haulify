import React, { useEffect, useState } from "react";
import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import emptyWishlist from "../../../assets/emptyWishlist.png";
import Products from "../products/Products";
import axios from "axios";

const Wishlist = () => {
  const [wishlistProducts, setWishlistProducts] = useState([]);

  const addToWishlist = () => {
    
  }

  const getWishlistProducts = () => {
    axios({
      method: "get",
      url: `http://localhost:3000/wishlist`,
    }).then((info) => {
      setWishlistProducts(info.data);
    });
  };

  useEffect(() => {
    getWishlistProducts();
  }, []);

  return (
    <div className="py-8 min-h-[100vh]">
      <div className="my-6 flex justify-center items-center gap-2">
        <div className="flex w-[8rem] gap-2 border-b-4 border-mainColor pb-2">
          <FiHeart className="text-3xl text-mainColor" />
          <span className="text-2xl dark:text-white">Wishlist</span>
        </div>
      </div>
      {wishlistProducts.length == 0 ? (
        <div className="flex flex-col justify-center items-center text-center">
          <img
            src={emptyWishlist}
            alt="Empty Wishlist"
            className="w-full max-w-xs md:max-w-md lg:max-w-lg object-contain"
          />
          <p className="flex flex-col text-xl font-medium text-[#88A0A8]">
            <span className="text-3xl py-2">
              Your wishlist is currently empty.
            </span>
            Start adding your favorite items!
          </p>
        </div>
      ) : (
        <div className="flex flex-row flex-wrap justify-center items-center w-full p-8">
          {wishlistProducts.map((product, index) => (
            <Products addToWishlist={addToWishlist} product={product} key={index} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
