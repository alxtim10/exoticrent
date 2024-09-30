"use client";
import PaymentCard from "@/components/payment/PaymentCard";
import { calculatePrice } from "@/utils/calculation/priceCalculation";
import { cars } from "@/utils/constants/data";
import { toIDR } from "@/utils/formats/formatCurrency";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const CarDetail = ({ params }: { params: { id: string } }) => {
  const [data, setData] = useState<any>(null);

  const router = useRouter();
  const [lengthCode, setLengthCode] = useState('');

  const [isPayment, setIsPayment] = useState(false);

  useEffect(() => {
    const findItem = cars.filter((x: any) => x.id == params.id);
    setData(findItem[0]);
  }, [params.id]);

  return (
    <section className="p-5">
      {data != null && (
        <>
          <Image
            className="rounded-xl"
            src={data.image}
            alt="m4"
            width={450}
            height={300}
          />
          <h1 className="text-2xl font-bold mt-3">{data.name}</h1>
          <div>
            <h1 className="text-md mt-5 mb-2 text-gray-600 font-bold">
              Specifications
            </h1>
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-white p-2 rounded-md shadow-md flex flex-col gap-1">
                <h1 className="text-sm font-semibold">Vehicle Type</h1>
                <h1 className="text-xs">{data.vehicle_type}</h1>
              </div>
              <div className="bg-white p-2 rounded-md shadow-md flex flex-col gap-1">
                <h1 className="text-sm font-semibold">Engine Type</h1>
                <h1 className="text-xs">{data.engine_type}</h1>
              </div>
              <div className="bg-white p-2 rounded-md shadow-md flex flex-col gap-1">
                <h1 className="text-sm font-semibold">Displacement</h1>
                <h1 className="text-xs">{data.displacement}</h1>
              </div>
              <div className="bg-white p-2 rounded-md shadow-md flex flex-col gap-1">
                <h1 className="text-sm font-semibold">Power</h1>
                <h1 className="text-xs">{data.power}</h1>
              </div>
              <div className="bg-white p-2 rounded-md shadow-md flex flex-col gap-1">
                <h1 className="text-sm font-semibold">Transmission</h1>
                <h1 className="text-xs">{data.transmission}</h1>
              </div>
              <div className="bg-white p-2 rounded-md shadow-md flex flex-col gap-1">
                <h1 className="text-sm font-semibold">Torque</h1>
                <h1 className="text-xs">{data.torque}</h1>
              </div>
            </div>

            <div className="mt-2 p-3 bg-white shadow-md rounded-md">
              <h1 className="text-sm font-semibold">OTR Price</h1>
              <h1 className="text-xl font-bold">{toIDR(data.otr_price)}</h1>
            </div>
          </div>
          <h1 className="text-md mt-5 mb-2 text-gray-600 font-bold">
            Price Action
          </h1>
          <div className="flex flex-col gap-2">
            <div
              onClick={() => {
                setIsPayment(true);
                setLengthCode('H');
              }}
              className="bg-white p-3 flex flex-col items-start justify-around gap-3 shadow-md rounded-md hover:bg-gray-200 transition-all cursor-pointer"
            >
              <div>
                <h1 className="text-blue-700 font-extrabold">Hourly</h1>
                <h1 className="text-sm font-bold">
                  {toIDR(data.hourly_price)}
                </h1>
              </div>
              <h1 className="text-xs text-slate-500">
                Overtime: {toIDR(data.hourly_price)}
              </h1>
            </div>
            <div
              onClick={() => {
                setIsPayment(true);
                setLengthCode('D');
              }}
              className="bg-white p-3 flex flex-col items-start justify-around gap-3 shadow-md rounded-md  hover:bg-gray-200 transition-all cursor-pointer"
            >
              <div>
                <h1 className="text-blue-700 font-extrabold">Day</h1>
                <h1 className="text-sm font-bold">{toIDR(data.daily_price)}</h1>
              </div>
              <h1 className="text-xs text-slate-500">
                Overtime: {toIDR(data.daily_overtime_price)}
              </h1>
            </div>
          </div>

          <div hidden={!isPayment}>
            <PaymentCard lengthCode={lengthCode} data={data}/>
          </div>
        </>
      )}
    </section>
  );
};

export default CarDetail;
