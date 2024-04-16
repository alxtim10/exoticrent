import Image from "next/image";
import React from "react";

const Title = () => {
  return (
    <section className="mt-28 flex items-center justify-between">
      <div>
        <h1 className="text-6xl font-bold">Rent</h1>
        <h1 className="text-6xl font-bold">Luxury Cars</h1>
        <p className="text-sm font-normal mt-5 md:w-[19rem] w-[21rem] text-gray-700">
          Elevate your experience with Exotic Rent and indulge in unparalleled
          luxury on the road.
        </p>
      </div>
      <Image
        src="/hero.svg"
        alt="Title Image"
        width={300}
        height={300}
        className="hidden md:block"
        priority
      />
    </section>
  );
};

export default Title;
