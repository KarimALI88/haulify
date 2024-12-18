import React from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-stars";

const Product = ({ image, name, rate, price,id }) => {
  return (
    <div className="w-[260px] rounded-lg mx-auto my-5">
      <div className="mb-5">
        <img src={image} alt={name} className="w-[100%] h-[280px] rounded-xl shadow-xl" />
      </div>
      <Link to={`/products/${id}`}><h3 className="font-[700] text-[20px] my-2 text-mainColor">{name}</h3></Link>
      
      <ReactStars
        count={5}
        size={24}
        activeColor="#ffd700"
        value={rate} // The rating value you want to display
        edit={false} // This makes the stars read-only
      />
      <h4 className="font-[700] text-[20px] my-2 dark:text-white">{price} EGP</h4>
    </div>
  );
};

export default Product;
