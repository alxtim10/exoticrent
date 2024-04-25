'use client'
import Title from "./Title";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter();

  return (
    <section>
      <Title />
      <div className="flex items-center justify-start gap-2 mt-8">
        <button
          onClick={() => {
            router.push("/home");
          }}
          className="bg-black text-white py-1 px-3 text-sm rounded-xl hover:bg-gray-700 transition-all"
        >
          Rent now &gt;
        </button>
        <button className=" py-1 px-3 text-sm rounded-xl hover:text-gray-600 transition-all">
          Contact sales &gt;
        </button>
      </div>
    </section>
  );
};

export default Hero;
