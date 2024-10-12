import React from "react";
import { Button } from "@material-tailwind/react";
const NotFound = () => {
    return (
        <div className="h-[100vh] bg-[#f3f1f0] p-14 flex flex-col gap-10">
            <h1 className="font-bold text-[1.5rem]">404: Page Not Found</h1>
            <div className="flex justify-evenly items-center flex-col md:flex-row">
                <div className="md:w-[35rem] w-[20rem]">
                    <img
                        src="https://404-not-found-demo-page.netlify.app/assets/Scarecrow.png"
                        alt="not-found"
                    />
                </div>
                <div className="flex items-start flex-col gap-6">
                    <p className="md:text-[4rem] text-[2rem] font-bold ">
                        I have bad news for you
                    </p>
                    <p className="text-[1.2rem]">
                        The page you are looking for might be removed or is
                        temporarily unavailable
                    </p>
                    <Button className="p-3 w-32 text-[1.1rem]">Home</Button>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
