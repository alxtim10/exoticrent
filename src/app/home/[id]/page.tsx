import Image from "next/image";
import React from "react";

const CarDetail = ({ params }: { params: { id: string } }) => {
  return (
    <section>
      <Image
        className="rounded-xl"
        src={"/cars/bmw-m4.jpg"}
        alt="m4"
        width={450}
        height={300}
      />
      <h1 className="text-2xl font-bold mt-3">BMW M4 G80</h1>
      <h1 className="text-md font-medium mt-5">Specifications</h1>
      <div className="grid grid-cols-2 mt-2 gap-2">
        <div className="bg-white p-2 rounded-md shadow-md flex flex-col gap-1">
          <h1 className="text-sm font-semibold">Vehicle Type</h1>
          <h1 className="text-xs">
            front-engine, rear-wheel-drive, 4-passenger, 2-door coupe
          </h1>
        </div>
        <div className="bg-white p-2 rounded-md shadow-md flex flex-col gap-1">
          <h1 className="text-sm font-semibold">Engine Type</h1>
          <h1 className="text-xs">
            twin-turbocharged and intercooled inline-6, aluminum block and head
          </h1>
        </div>
        <div className="bg-white p-2 rounded-md shadow-md flex flex-col gap-1">
          <h1 className="text-sm font-semibold">Displacement</h1>
          <h1 className="text-xs">183 in3, 2993 cm3</h1>
        </div>
        <div className="bg-white p-2 rounded-md shadow-md flex flex-col gap-1">
          <h1 className="text-sm font-semibold">Power</h1>
          <h1 className="text-xs">473 hp @ 6250 rpm</h1>
        </div>
        <div className="bg-white p-2 rounded-md shadow-md flex flex-col gap-1">
          <h1 className="text-sm font-semibold">Transmission</h1>
          <h1 className="text-xs">6-speed manual</h1>
        </div>
        <div className="bg-white p-2 rounded-md shadow-md flex flex-col gap-1">
          <h1 className="text-sm font-semibold">Torque</h1>
          <h1 className="text-xs">
          406 lb-ft @ 2650 rpm
          </h1>
        </div>
      </div>
      <h1 className="text-md font-medium mt-5">Price Action</h1>
    </section>
  );
};

export default CarDetail;
