import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import React, { useState } from "react";
import { BsCart4 } from "react-icons/bs";
import ItemCart from "../../../components/UserComponents/item/ItemCart";

const Cart = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="py-8 min-h-[100vh]">
      <div className="my-6 flex justify-center items-center gap-2">
        <BsCart4 className="text-3xl text-mainColor leading-[1]" />
        <span className="text-2xl dark:text-white">Shopping Cart</span>
      </div>

      <div className="flex flex-col lg:flex-row lg:justify-between">
        <Card className="m-6 lg:mr-0 px-6 lg:w-full flex-1 space-y-6 dark:border-gray-700 dark:bg-gray-800">
          <CardBody className="py-2 px-0">
            <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
              <div className="hidden lg:grid grid-cols-2 py-6">
                <div className="font-normal text-xl leading-8 text-gray-500">
                  Product
                </div>
                <p className="font-normal text-xl leading-8 text-gray-500 flex items-center justify-between">
                  <span className="w-full max-w-[200px] text-center">
                    Price
                  </span>
                  <span className="w-full max-w-[260px] text-center">
                    Quantity
                  </span>
                  <span className="w-full max-w-[200px] text-center">
                    Total
                  </span>
                </p>
              </div>

              <ItemCart quantity={quantity} setQuantity={setQuantity} />
            </div>
          </CardBody>
        </Card>

        <div className="my-6 px-6 w-full lg:max-w-sm flex-1 space-y-6">
          <div className="space-y-4 rounded-lg border border-gray-200 bg-[#88A0A8] p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
            <p className="text-xl font-semibold text-gray-900 dark:text-white">
              Order summary
            </p>

            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-base font-normal text-[white] dark:text-gray-400">
                    Original price
                  </span>
                  <span className="text-base font-medium text-gray-900 dark:text-white">
                    $7,592.00
                  </span>
                </div>

                <div className="flex items-center justify-between gap-4">
                  <span className="text-base font-normal text-[white] dark:text-gray-400">
                    Savings
                  </span>
                  <span className="text-base font-medium text-green-200">
                    -$299.00
                  </span>
                </div>

                <div className="flex items-center justify-between gap-4">
                  <span className="text-base font-normal text-[white] dark:text-gray-400">
                    Store Pickup
                  </span>
                  <span className="text-base font-medium text-gray-900 dark:text-white">
                    $99
                  </span>
                </div>

                <div className="flex items-center justify-between gap-4">
                  <span className="text-base font-normal text-[white] dark:text-gray-400">
                    Tax
                  </span>
                  <span className="text-base font-medium text-gray-900 dark:text-white">
                    $799
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                <span className="text-base font-bold text-gray-900 dark:text-white">
                  Total
                </span>
                <span className="text-base font-bold text-gray-900 dark:text-white">
                  $8,191.00
                </span>
              </div>
            </div>

            <Button className="flex w-full items-center justify-center rounded-lg bg-mainColor px-5 py-2.5 text-sm font-bold text-white hover:bg-[#1d4ed7]-800 focus:outline-none focus:ring-4 focus:ring-[#1d4ed7]-300 dark:bg-[#1d4ed7]-600 dark:hover:bg-[#1d4ed7]-700 dark:focus:ring-[#1d4ed7]-800">
              Proceed to Checkout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
