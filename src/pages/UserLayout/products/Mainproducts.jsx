import axios from "axios";
import React, { useEffect, useState } from "react";
import Products from "./Products";
import Sidebar from "../../../components/UserComponents/sidebar/Sidebar";

const Mainproducts = () => {
  const [products, setProducts] = useState([]);
  const [productdata, setproductdata] = useState([]);
  const [wishlistProducts, setWishlistProducts] = useState([]);

  const isProductWishlisted = (id) => {
    return wishlistProducts.some((product) => product.id === id);
  };

  const toggleWishlist = (id) => {
    if (isProductWishlisted(id)) {
      removeFromWishlist(id);
    } else {
      addToWishlist(id);
    }
  };

  const addToWishlist = (id) => {
    const targetProduct = products.find((product) => product.id === id);
    if (targetProduct) {
      setWishlistProducts([...wishlistProducts, targetProduct]);
      axios({
        method: "post",
        url: `http://localhost:3000/wishlist`,
        data: targetProduct,
      })
        .then(() => console.log("Added to wishlist"))
        .catch((error) => console.error("Error adding to wishlist", error));
    }
  };

  const removeFromWishlist = (id) => {
    const updatedWishlist = wishlistProducts.filter(
      (product) => product.id !== id
    );
    setWishlistProducts(updatedWishlist);
    axios({
      method: "delete",
      url: `http://localhost:3000/wishlist/${id}`
    }).then(() => console.log("Removed from wishlist")).catch((error) => console.error("Error Removing from wishlist", error));
  };

  const getproducts = () => {
    axios({
      method: "get",
      url: `http://localhost:3000/products`,
    }).then((info) => {
      setProducts(info.data);
      setproductdata(info.data);
    });
  };

  const getWishlistProducts = () => {
    axios({
      method: "get",
      url: `http://localhost:3000/wishlist`,
    }).then((info) => {
      setWishlistProducts(info.data);
    });
  };

  useEffect(() => {
    getproducts();
    getWishlistProducts();
  }, []);

  return (
    <div className="flex">

      <Sidebar products={products} setproductdata={setproductdata} />
      <div className="flex flex-row flex-wrap justify-center items-center w-full p-8 overflow-y-scroll h-[610px]">
        {productdata.map((product, index) => (
          <Products
            toggleWishlist={toggleWishlist}
            isWishlisted={isProductWishlisted(product.id)}
            product={product}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Mainproducts;
