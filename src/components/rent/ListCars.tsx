import { cars } from "@/utils/constants/data";
import React from "react";
import CarCard from "./CarCard";

const ListCars = () => {
  return (
    <section>
      <div className="mt-5 flex flex-col items-center justify-center gap-4">
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
