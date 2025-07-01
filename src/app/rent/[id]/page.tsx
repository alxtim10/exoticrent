"use client";
import HamburgerMenu from "@/components/hamburger-menu/HamburgerMenu";
import MenuNavbar from "@/components/navigation/MenuNavbar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { car, CarsProps } from "@/utils/constants/data";
import { Armchair, ArrowLeft, Fuel, Gauge } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const CarDetail = ({ params }: { params: { id: string } }) => {

  const [data, setData] = useState<CarsProps | null>(null);
  const router = useRouter();
  useEffect(() => {
    const findItem = car.filter((x: any) => x.id == params.id);
    setData(findItem[0]);
  }, [params.id]);

  return (
    <section className="p-5 min-h-screen bg-black">
      {data != null && (
        <>
          <MenuNavbar text='Home' isDark={true} />
          <Image
            className="rounded-xl"
            src={data.image}
            alt="m4"
            width={450}
            height={300}
          />
          <h1 className="text-2xl text-white font-bold mt-3">{data.name}</h1>
          <div>
            <Accordion
              type="single"
              collapsible
              className="w-full"
              defaultValue="item-1"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <h1 className="text-md text-primer font-bold my-3">
                    Specifications
                  </h1>
                </AccordionTrigger>
                <AccordionContent >
                  <div className="grid grid-cols-2 gap-3 text-white">
                    <div className="bg-semidark p-3 rounded-md shadow-md flex flex-col gap-1">
                      <h1 className="text-sm font-semibold">Vehicle Type</h1>
                      <h1 className="text-xs">{data.vehicle_type}</h1>
                    </div>
                    <div className="bg-semidark p-3 rounded-md shadow-md flex flex-col gap-1">
                      <h1 className="text-sm font-semibold">Engine Type</h1>
                      <h1 className="text-xs">{data.engine_type}</h1>
                    </div>
                    <div className="bg-semidark p-3 rounded-md shadow-md flex flex-col gap-1">
                      <h1 className="text-sm font-semibold">Displacement</h1>
                      <h1 className="text-xs">{data.displacement}</h1>
                    </div>
                    <div className="bg-semidark p-3 rounded-md shadow-md flex flex-col gap-1">
                      <h1 className="text-sm font-semibold">Power</h1>
                      <h1 className="text-xs">{data.power}</h1>
                    </div>
                    <div className="bg-semidark p-3 rounded-md shadow-md flex flex-col gap-1">
                      <h1 className="text-sm font-semibold">Transmission</h1>
                      <h1 className="text-xs">{data.transmission}</h1>
                    </div>
                    <div className="bg-semidark p-3 rounded-md shadow-md flex flex-col gap-1">
                      <h1 className="text-sm font-semibold">Torque</h1>
                      <h1 className="text-xs">{data.torque}</h1>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <h1 className="text-md mt-1 mb-2 text-primer font-bold">
            Overview
          </h1>
          <div className="grid grid-cols-3 gap-3 text-white">
            <div className="bg-semidark p-3 rounded-md shadow-md flex flex-col justify-between gap-4">
              <div className="flex flex-col justify-center gap-1">
                <Gauge className="w-5 h-5" />
                <h1 className="text-xs font-semibold">Top Speed</h1>
              </div>
              <h1 className="text-xs"><span className="text-lg">{data.top_speed}</span> kmh</h1>
            </div>
            <div className="bg-semidark p-3 rounded-md shadow-md flex flex-col justify-between gap-4">
              <div className="flex flex-col justify-center gap-1">
                <Armchair className="w-5 h-5" />
                <h1 className="text-xs font-semibold">Capacity</h1>
              </div>
              <h1 className="text-xs"><span className="text-lg">{data.seat_capacity}</span> Person</h1>
            </div>
            <div className="bg-semidark p-3 rounded-md shadow-md flex flex-col justify-between gap-4">
              <div className="flex flex-col justify-center gap-1">
                <Fuel className="w-5 h-5" />
                <h1 className="text-xs font-semibold">Engine Type</h1>
              </div>
              <h1 className="text-xs">{data.engine_fuel_type}</h1>
            </div>
          </div>
          <button 
          onClick={() => {
            router.push(`/checkout/${params.id}`)
          }}
          className="bg-primer w-full rounded-lg p-3 mt-6 font-bold">Rent Now</button>
        </>
      )}
    </section>
  );
};

export default CarDetail;
