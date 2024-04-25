import CategoryCard from "@/components/home/CarCard";
import React from "react";
import { cars } from "@/utils/constants/data";
import ListCars from "@/components/home/ListCars";

const page = () => {
  return (
    <section>
      <h1 className="font-bold text-md text-center">Home of Exotic Cars</h1>
      <h1 className="text-sm text-center">Unlock Exotic Thrills: Rent Luxury, Drive Prestige</h1>
      <ListCars />
    </section>
  );
};

export default page;
