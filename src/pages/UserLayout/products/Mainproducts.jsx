import axios from "axios";
import React, { useEffect, useState } from "react";
import Products from "./Products";
import Sidebar from "../../../components/UserComponents/sidebar/Sidebar";

const Mainproducts = () => {
  const [products, setProducts] = useState([]);
  const [productdata, setproductdata] = useState([]);

  const getproducts = () => {
    axios({
      method: "get",
      url: `http://localhost:3000/products`,
    }).then((info) => {
      setProducts(info.data);
      setproductdata(info.data);
    });
  };

  useEffect(() => {
    getproducts();
  }, []); 

  return (
    <div className="flex">

      <Sidebar products={products} setproductdata={setproductdata} />
      <div className="flex flex-row flex-wrap justify-center items-center w-full p-8">
        {productdata.map((product, index) => (
          <Products product={product} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Mainproducts;
