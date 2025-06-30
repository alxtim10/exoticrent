import React from "react";
import ListCars from "@/components/rent/ListCars";
import { car } from "@/utils/constants/data";

const page = () => {
  return (
    <section className="md:my-5 p-5">
      <h1 className="font-medium text-md text-center">Home of Exotic Cars</h1>
      <h1 className="text-xs text-center">Unlock Exotic Thrills: Rent Luxury, Drive Prestige</h1>
      <ListCars data={car}/>
    </section>
  );
};

export default page;
