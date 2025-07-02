import React from "react";

const CreditCardForm = () => {
  return (
    <div className="text-white flex flex-col items-center justify-center gap-3 w-full mt-5">
      <div className="flex flex-col w-full">
        <label className="mb-1 text-xs">Card Holder</label>
        <input
          className="p-2 rounded-lg w-full border-b border-b-gray-500 outline-none text-sm bg-white text-black"
          type="text"
          placeholder="e.g Alex Doe"
        />
      </div>
      <div className="flex flex-col w-full">
        <label className="mb-1 text-xs">Credit Card</label>
        <input
          className="p-2 rounded-lg w-full border-b border-b-gray-500 outline-none text-sm bg-white text-black"
          type="text"
          placeholder="0000 0000 0000 0000"
        />
      </div>
      <div className="flex items-center justify-center w-full gap-2">
        <div className="flex flex-col w-full">
          <label className="mb-1 text-xs">Expiry Date</label>
          <input
            className="p-2 rounded-lg w-full border-b border-b-gray-500 outline-none text-sm bg-white text-black"
            type="month"
          />
        </div>
        <div className="flex flex-col w-full">
          <label className="mb-1 text-xs">CVV</label>
          <input
            className="p-2 rounded-lg w-full border-b border-b-gray-500 outline-none text-sm bg-white text-black"
            type="text"
            placeholder="CVV"
          />
        </div>
      </div>
    </div>
  );
};

export default CreditCardForm;
