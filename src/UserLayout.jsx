import React from 'react'
import Header from './components/UserComponents/navbar/Navbar'
import Footer from './components/UserComponents/footer/Footer';
const UserLayout = ({theme, setTheme}) => {
  return (
    <div className='dark:bg-darkMode'>
        <Header theme ={theme} setTheme={setTheme}/>
        <h1 className={`text-mainColor dark:text-mainColor text-[800] py-5 text-[30px] text-center h-[1000px]`}>home</h1>
        <Footer/>
    </div>
  )
}

export default UserLayout
