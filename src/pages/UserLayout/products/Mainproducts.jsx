import axios from "axios";
import React, { useEffect, useState } from "react";
import Products from "./Products";
import Sidebar from "../../../components/UserComponents/sidebar/Sidebar";

const Mainproducts = ({products,setproductdata,productdata}) => {
  return (
    <div className="flex">
      <Sidebar products={products} setproductdata={setproductdata} />
      <div className="gap-5 flex flex-row flex-wrap justify-center items-center w-full p-8">
        {productdata.map((product, index) => (
          <Products product={product} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Mainproducts;
