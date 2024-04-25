"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const CarCard = (props: any) => {
    
  const { item } = props;

  const router = useRouter();

  return (
    <section className="p-2 rounded-xl flex items-center justify-center">
      <div className="flex flex-col items-start justify-center">
        <Image
          className="rounded-xl"
          src={item.image}
          alt="m4"
          width={450}
          height={300}
        ></Image>
        <div>
          <h1 className="font-bold text-xl mt-2">{item.name}</h1>
          <h1 className="text-sm">{item.desc}</h1>
          <button
            onClick={() => {
              router.push(`/home/${item.id}`);
            }}
            className="bg-black shadow-xl text-white py-1 px-3 mt-3 text-sm rounded-md hover:bg-gray-700 transition-all"
          >
            Rent now &gt;
          </button>
        </div>
      </div>
    </section>
  );
};

export default CarCard;
