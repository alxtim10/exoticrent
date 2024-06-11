import React from "react";

const page = () => {
  return (
    <section>
      <h1 className="text-2xl font-bold">Choose your plan</h1>
      <div className="flex items-center justify-between mt-5 rounded-lg shadow-lg w-full">
        <h1 className="text-lg font-bold text-white bg-green-600 p-3 w-full rounded-l-lg hover:bg-green-700 transition-all cursor-pointer">Monthly</h1>
        <h1 className="text-lg text-right font-bold text-black p-3 w-full rounded-r-lg hover:bg-gray-200 transition-all cursor-pointer">Yearly</h1>
      </div>
    </section>
  );
};

export default page;
