import React, { useEffect, useState } from 'react'
 import { Route, Routes } from 'react-router-dom';
import UserLayout from './UserLayout';
import AdminLayout from './AdminLayout';
const App = () => {
  const [theme, setTheme] = useState("light")

  useEffect(() => {
    localStorage.theme = theme
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    };
  },[theme])

  

  return (
    <Routes>
      <Route path="/*" element={<UserLayout theme = {theme} setTheme= {setTheme} />} /> 
      <Route path="/admin/*" element={<AdminLayout />}/> 
      
    </Routes>
  )
}

export default App

