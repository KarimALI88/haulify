import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import UserLayout from "./UserLayout";
import AdminLayout from "./AdminLayout";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NotFound from "./pages/UserLayout/not-found/NotFound";

const App = () => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme : 'light';
  });
  const [products, setProducts] = useState([]);
  const [productdata, setproductdata] = useState([]);
  const [isChanged, setIsChanged] = useState(false);
  const [userInfo, setUserInfo] = useState([]);
  const [adminInfo, setAdminInfo] = useState([]);
  const [alluser, setalluser] = useState([]);
  const [islogin, setislogin] = useState(localStorage.cn ? true : false);
  const [user, setUser] = useState(null);
  const [cartLength, setCartLength] = useState(0)
  const [refresh, setRefresh] = useState(false)
  const [cartProducts, setCartProducts] = useState([])
  const [wishlistProducts, setWishlistProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const getAlluser = () => {
    axios({
      method: "get",
      url: `${import.meta.env.VITE_LINK_API}/users`,
    }).then((info) => {
      setalluser(info.data);
    });
  };

  const getCartItems = () => {
    axios({
      method: "get",
      url: `${import.meta.env.VITE_LINK_API}/cart`,
    }).then((info) => {
      setCartLength(info.data.length);
      setCartProducts(info.data)
    });
  };

  useEffect(() => {
    getCartItems()
  }, [refresh])

  const getUserDetails = () => {
    axios({
      method: "get",
      url: `${import.meta.env.VITE_LINK_API}/users/${localStorage.cn}`,
    }).then((info) => setUser(info.data));
  };

  useEffect(() => {
    if (islogin) {
      getUserDetails();
    }
  }, [islogin]);

  useEffect(() => {
    getAlluser();
  }, []);

  const getproducts = () => {
    axios({
      method: "get",
      url: `${import.meta.env.VITE_LINK_API}/products`,
    }).then((info) => {
      setProducts(info.data);
      setproductdata(info.data);
    });
  };

  const getAllUsersAndAdmins = (role) => {
    axios({
      method: "get",
      url: `${import.meta.env.VITE_LINK_API}/users`,
    }).then((data) => {
      const filteredList = data.data
        .filter((user) => user.role === role)
        .map((user) => user);

      if (role === "admin") {
        setAdminInfo(filteredList);
      } else if (role === "user") {
        setUserInfo(filteredList);
      }
    });
  };

  useEffect(() => {
    getproducts();
  }, [isChanged]);

  useEffect(() => {
    getAllUsersAndAdmins("user");
    getAllUsersAndAdmins("admin");
  }, [refresh]);

  const getWishlistProducts = () => {
    axios({
      method: "get",
      url: `http://localhost:3000/wishlist`,
    }).then((info) => {
      setWishlistProducts(info.data);
      setLoading(false);
      console.log(wishlistProducts);
      
    });
  };

  useEffect(() => {
    getWishlistProducts();
  }, []);

  useEffect(() => {
    localStorage.theme = theme;
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <>
      <Routes>
        <Route
          path="/*"
          element={
            <UserLayout
              islogin={islogin}
              setislogin={setislogin}
              alluser={alluser}
              theme={theme}
              setTheme={setTheme}
              products={products}
              productdata={productdata}
              setproductdata={setproductdata}
              user={user}
              cartItems={cartLength}
              setRefresh={setRefresh}
              cartProducts={cartProducts}
              wishlistProducts={wishlistProducts}
              setWishlistProducts={setWishlistProducts}
              loading={loading}
            />
          }
        />
        <Route
          path="/admin/*"
          element={islogin ?
            <AdminLayout
              products={products}
              productdata={productdata}
              setproductdata={setproductdata}
              setIsChanged={setIsChanged}
              userInfo={userInfo}
              adminInfo={adminInfo}
              setRefresh={setRefresh}
              setislogin={setislogin}
            />
            :
            <NotFound />
          }
        />
      </Routes>
      <ToastContainer />
    </>
  );
};

export default App;
