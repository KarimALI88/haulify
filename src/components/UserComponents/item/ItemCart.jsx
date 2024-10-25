import React from "react";
import { FaTimes } from "react-icons/fa";

const ItemCart = ({
  item: { id, title, description, price, amount, image },
  increment,
  decrement,
  remov,
}) => {
  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 min-[550px]:gap-6 border-t border-gray-200 py-6 relative group">
      <div className="flex flex-col sm:flex-row min-[550px]:flex-row gap-3 min-[550px]:gap-6 w-full max-xl:justify-center max-xl:max-w-xl max-xl:mx-auto">
        <div className="img-box">
          <img
            src={image}
            // src="https://pagedone.io/asset/uploads/1701162850.png"
            alt="perfume bottle image"
            className="xl:w-[140px] rounded-xl object-cover"
          />
        </div>
        <div className="pro-data w-full max-w-sm ">
          <h5 className="font-semibold text-xl leading-8 text-black max-[550px]:text-center">
            {title}
          </h5>
          <p className="font-normal text-lg leading-8 text-gray-500 my-2 min-[550px]:my-3 max-[550px]:text-center">
            {description}
          </p>
          <h6 className="font-medium text-lg leading-8 text-indigo-600 max-[550px]:text-center">
            ${price}
          </h6>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center min-[550px]:flex-row w-full max-xl:max-w-xl max-xl:mx-auto gap-2">
        <h6 className="font-manrope font-bold text-xl leading-4 text-black w-full max-w-[176px] text-center">
          $15.00{" "}
          <span className="text-sm text-gray-300 ml-3 lg:hidden whitespace-nowrap">
            (Delivery Charge)
          </span>
        </h6>

        <div className="border-gray-400 border rounded-3xl flex items-center justify-center lg:justify-start">
          <button
            onClick={() => decrement(id)}
            disabled={amount === 1}
            className="py-2 px-4 border-r-2 text-lg rounded-s-3xl hover:bg-gray-200 disabled:bg-gray-200 transition-all duration-300"
          >
            -
          </button>
          <span className="py-2 px-4">{amount}</span>
          <button
            onClick={() => increment(id)}
            className="py-2 px-4 border-l-2 text-lg rounded-e-3xl hover:bg-gray-200 transition-all duration-300"
          >
            +
          </button>
        </div>

        <h6 className="text-indigo-600 font-manrope font-bold text-xl leading-9 w-full max-w-[176px] text-center">
          ${price * amount + 15}
        </h6>
      </div>
      <button
        onClick={() => remov(id)}
        className="absolute bottom-[4.25rem] left-[-1.25rem] sm:right-3 sm:top-3 sm:bottom-auto sm:left-auto p-2 text-red-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <FaTimes className="text-xl" />
      </button>
    </div>
  );
};

export default ItemCart;
