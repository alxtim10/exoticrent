import React from "react";
import ListCars from "@/components/rent/ListCars";

const page = () => {
  return (
    <section className="md:my-5">
      <h1 className="font-medium text-md text-center">Home of Exotic Cars</h1>
      <h1 className="text-xs text-center">Unlock Exotic Thrills: Rent Luxury, Drive Prestige</h1>
      <ListCars />
    </section>
  );
};

export default page;
