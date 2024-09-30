import { toIDR } from "@/utils/formats/formatCurrency";
import React, { useEffect, useState } from "react";
import CreditCardForm from "./CreditCardForm";
import BankTransfer from "./BankTransfer";

const PaymentCard = (props: any) => {
  const { lengthCode, data } = props;

  const [count, setCount] = useState(1);
  const [isBank, setIsBank] = useState(false);
  const [isEWallet, setIsEWallet] = useState(false);

  useEffect(() => {
    setCount(1);
  }, [lengthCode]);

  return (
    <div>
      <h1 className="text-md mt-5 mb-2 text-gray-600 font-bold">Payment</h1>
      <div className="bg-white p-5 rounded-md shadow-md">
        <div className="flex items-center justify-center gap-2 w-full text-center">
          <div
            onClick={() => {
              setIsBank(true);
              setIsEWallet(false);
            }}
            className="bg-gray-50 shadow-md rounded-md p-2 w-full hover:bg-white transition-all cursor-pointer text-sm"
          >
            Bank
          </div>
          <div
            onClick={() => {
              setIsBank(false);
              setIsEWallet(true);
            }}
            className="bg-gray-50 shadow-md rounded-md p-2 w-full hover:bg-white transition-all cursor-pointer text-sm"
          >
            E-Wallet
          </div>
        </div>
        <div hidden={!isBank} className="mt-4">
          <div className="flex flex-col items-center justify-center gap-2 w-full">
            <div className="w-full">
              <BankTransfer />
            </div>
            <div className="bg-gray-50 shadow-md rounded-md px-3 py-2 w-full hover:bg-white transition-all cursor-pointer text-sm">
              Virtual Account
            </div>
          </div>
        </div>
        <div hidden={!isEWallet} className="mt-4">
          <div className="flex items-center justify-center gap-2 w-full">
            <div className="flex items-center bg-gray-50 shadow-md rounded-md p-2 w-20 h-20 hover:bg-white transition-all cursor-pointer text-sm">
              <img src="/logo/gopay.png" alt="gopay" />
            </div>
            <div className="flex items-center bg-gray-50 shadow-md rounded-md p-2 w-20 h-20 hover:bg-white transition-all cursor-pointer text-sm">
              <img src="/logo/ovo.png" alt="ovo" />
            </div>
            <div className="flex items-center bg-gray-50 shadow-md rounded-md p-2 w-20 h-20 hover:bg-white transition-all cursor-pointer text-sm">
              <img src="/logo/applepay.png" alt="applepay" />
            </div>
            <div className="flex items-center bg-gray-50 shadow-md rounded-md p-2 w-20 h-20 hover:bg-white transition-all cursor-pointer text-sm">
              <img src="/logo/googlepay.png" alt="googlepay" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 mt-5">
          <hr className="border-b border-b-gray w-full col-span-1 m-auto h-[1px]"></hr>
          <p className="text-center break-keep text-xs w-full col-span-2">
            or pay using credit card
          </p>
          <hr className="border-b border-b-gray w-full col-span-1 m-auto h-[1px]"></hr>
        </div>
        <CreditCardForm />
        <div className="border border-gray mt-6"></div>
        <div className="flex justify-between items-center mt-5">
          <h1 className="text-gray-600 text-sm">Item</h1>
          <h1 className="text-black text-sm">BMW M4 2024</h1>
        </div>
        <div className="flex justify-between items-center mt-2">
          <h1 className="text-gray-600 text-sm">Time Length</h1>
          <div className="flex items-center justify-center gap-3">
            <div className="flex items-center justify-center gap-2">
              <span
                className="cursor-pointer"
                onClick={() => {
                  setCount((prev) => prev + 1);
                }}
              >
                +
              </span>
              <h1 className="text-black text-sm">{count}</h1>
              <span
                className="cursor-pointer outline-none"
                onClick={() => {
                  setCount((prev) => (prev != 1 ? prev - 1 : 1));
                }}
              >
                -
              </span>
            </div>
            <h1 className="text-black text-sm">
              {lengthCode == "D" ? "Day(s)" : "Hour(s)"}
            </h1>
          </div>
        </div>
        <div className="border border-gray mt-3"></div>
        <div className="flex justify-between items-center mt-5">
          <h1 className="text-gray-600 text-sm">Discount</h1>
          <h1 className="text-black text-sm">{toIDR(0)}</h1>
        </div>
        <div className="flex justify-between items-center mt-5">
          <h1 className="text-gray-600 text-sm">Subtotal</h1>
          <h1 className="text-black text-sm">
            {toIDR(
              (lengthCode == "D" ? data.daily_price : data.hourly_price) * count
            )}
          </h1>
        </div>
        <div className="flex justify-between items-center mt-1">
          <h1 className="text-gray-400 text-xs">*Overtime</h1>
          <h1 className="text-gray-400 text-xs">
            {toIDR(
              (lengthCode == "D"
                ? data.daily_overtime_price
                : data.hourly_price) * count
            )}
          </h1>
        </div>
        <div className="border border-gray mt-3"></div>
        <div className="flex justify-between items-center mt-3">
          <h1 className="text-blue-600 text-sm font-bold">Total</h1>
          <h1 className="text-black text-sm font-bold">
            {toIDR(
              (lengthCode == "D" ? data.daily_price : data.hourly_price) * count
            )}
          </h1>
        </div>
        <div className="flex items-center justify-between mt-5">
          <div></div>
          <button className="bg-blue-600 text-white p-3 rounded-md shadow-md hover:bg-blue-500 transition-all">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentCard;
