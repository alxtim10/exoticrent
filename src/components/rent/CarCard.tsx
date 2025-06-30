"use client";
import { CarsProps } from "@/utils/constants/data";
import { toIDR } from "@/utils/formats/formatCurrency";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface CarCardProps {
  item: CarsProps;
}

const CarCard = (props: CarCardProps) => {

  const { item } = props;

  const router = useRouter();

  return (
    <section
      onClick={() => {
        router.push(`/rent/${item.id}`);
      }}
      className="cursor-pointer rounded-xl flex items-center justify-center">
      <div className="flex flex-col items-start justify-center">
        <Image
          className="rounded-xl"
          src={item.image}
          alt="m4"
          width={450}
          height={300}
        ></Image>
        <div className="flex flex-col w-full mt-2">
          <h1 className="font-bold text-xl">{item.name}</h1>
          <div className="flex items-center justify-between text-sm mt-1">
            <h1 className="text-sm">{item.engine_type}</h1>
            <h1>{toIDR(item.daily_price)}/day</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarCard;
