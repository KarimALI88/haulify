import React from "react";
import { Button } from "@material-tailwind/react";

const Header = () => {
  return (
    <div className="min-h-[100vh] bg-header w-[100%] pl-10 pt-5">
      <div className="lg:max-w-[50%] sm:max-w-[100%]">
        <h1 className="text-[64px] font-bold">
          FIND CLOTHES THAT MATCHES YOUR STYLE
        </h1>
        <p className="text-[#00000099] font-[400] text-[16px] my-5 ">
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>
        <Button className="rounded-full my-5">Shop Now</Button>
        <div className="flex justify-start items-center gap-6 my-5 flex-wrap pb-5">
          <div className="border-r-2 border-[#0000001A] px-5 py-5">
            <h3 className="font-[700] text-[40px]">+200</h3>
            <span className="font-[600] text-[16px] text-[#00000099]">Brands</span>
          </div>
          <div className="border-r-2 border-[#0000001A] px-5">
            <h3 className="font-[700] text-[40px]">+30000</h3>
            <span className="font-[600] text-[16px] text-[#00000099]">Customers</span>
          </div>
          <div className="px-5">
            <h3 className="font-[700] text-[40px]">+200</h3>
            <span className="font-[600] text-[16px] text-[#00000099]">Products</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
