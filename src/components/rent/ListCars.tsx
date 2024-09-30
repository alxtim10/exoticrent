import { cars } from "@/utils/constants/data";
import React from "react";
import CarCard from "./CarCard";

const ListCars = () => {
  return (
    <section className="mt-5 md:mt-14 md:px-7">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-4">
        {cars.map((item: any, i: any) => {
          return (
            <div key={i}>
              <CarCard item={item} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ListCars;
