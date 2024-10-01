import React from 'react'
import Header from './components/UserComponents/navbar/Navbar'
import Footer from './components/UserComponents/footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/UserLayout/home/Home';
import Products from './pages/UserLayout/products/Products';
import SingleProduct from './pages/UserLayout/single-product/SingleProduct';
import Profile from './pages/UserLayout/profile/Profile';
import Login from './pages/UserLayout/login/Login';
import Signup from './pages/UserLayout/signup/Signup';
import Cart from './pages/UserLayout/cart/Cart';
import Wishlist from './pages/UserLayout/wishlist/Wishlist';
import NotFound from './pages/UserLayout/not-found/NotFound';
import Contact from './pages/UserLayout/contact-us/Contact';

const UserLayout = ({theme, setTheme}) => {
  return (
    <div className='dark:bg-darkMode'>
        <Header theme ={theme} setTheme={setTheme}/>
        {/* ====================================================== */}
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/products' element={<Products/>} />
          <Route path='/products/:id' element={<SingleProduct/>} />
          <Route path='/profile/:id' element={<Profile/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/wishlist' element={<Wishlist/>} />
          <Route path='/contact-us' element={<Contact/>} />
          <Route path='/*' element={<NotFound/>} />
        </Routes>
        {/* ====================================================== */}
        <Footer/>
    </div>
  )
}

export default UserLayout
