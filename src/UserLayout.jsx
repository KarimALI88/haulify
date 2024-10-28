import React from "react";
import Header from "./components/UserComponents/navbar/Navbar";
import Footer from "./components/UserComponents/footer/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/UserLayout/home/Home";
import SingleProduct from "./pages/UserLayout/single-product/SingleProduct";
import Profile from "./pages/UserLayout/profile/Profile";
import Login from "./pages/UserLayout/login/Login";
import Signup from "./pages/UserLayout/signup/Signup";
import Cart from "./pages/UserLayout/cart/Cart";
import Wishlist from "./pages/UserLayout/wishlist/Wishlist";
import NotFound from "./pages/UserLayout/not-found/NotFound";
import Contact from "./pages/UserLayout/contact-us/Contact";
import Mainproducts from "./pages/UserLayout/products/Mainproducts";

const UserLayout = ({
  theme,
  setTheme,
  products,
  productdata,
  setproductdata,
  alluser,
  setislogin,
  islogin,
  user,
  cartItems,
  setRefresh,
  cartProducts,
  wishlistProducts,
  setWishlistProducts,
  loading,
}) => {
  return (
    <div className="dark:bg-darkMode">
      <Header
        setRefresh={setRefresh}
        theme={theme}
        setTheme={setTheme}
        islogin={islogin}
        setislogin={setislogin}
        user={user}
        cartItems={cartItems}
      />
      {/* ====================================================== */}
      <Routes>
        <Route path="/" element={<Home products={products} />} />
        <Route
          path="/products"
          element={
            <Mainproducts
              products={products}
              productdata={productdata}
              setproductdata={setproductdata}
              wishlistProducts={wishlistProducts}
              setWishlistProducts={setWishlistProducts}
            />
          }
        />
        <Route
          path="/products/:id"
          element={
            <SingleProduct
              products={products}
              setRefresh={setRefresh}
              cartProducts={cartProducts}
            />
          }
        />
        <Route
          path="/profile/:id"
          element={islogin ? <Profile /> : <NotFound />}
        />
        <Route
          path="/login"
          element={<Login alluser={alluser} setislogin={setislogin} />}
        />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/cart"
          element={islogin ? <Cart setRefresh={setRefresh} /> : <NotFound />}
        />
        <Route
          path="/wishlist"
          element={
            <Wishlist
              wishlistProducts={wishlistProducts}
              setWishlistProducts={setWishlistProducts}
              loading={loading}
            />
          }
        />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      {/* ====================================================== */}
      <Footer />
    </div>
  );
};

export default UserLayout;
