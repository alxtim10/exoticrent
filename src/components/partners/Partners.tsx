import Image from "next/image";

const Partners = () => {
  return (
    <section className="md:px-10">
      <div className="mt-24 border border-gray-300 p-5 rounded-xl">
        <div className="grid grid-cols-2 gap-5">
          <div className="flex items-center justify-center h-28">
            <Image
              src="/bmw.png"
              alt="Title Image"
              width={70}
              height={70}
              priority
            />
          </div>
          <div className="flex items-center justify-center h-28">
            <Image
              src="/benz.png"
              alt="Title Image"
              width={190}
              height={190}
              priority
            />
          </div>
          <div className="flex items-center justify-center h-28">
            <Image
              src="/lamborghini.png"
              alt="Title Image"
              width={200}
              height={200}
              priority
            />
          </div>
          <div className="flex items-center justify-center h-28">
            <Image
              src="/porsche.png"
              alt="Title Image"
              width={130}
              height={130}
              priority
            />
          </div>
          <div className="flex items-center justify-center h-28">
            <Image
              src="/toyota.png"
              alt="Title Image"
              width={90}
              height={90}
              priority
            />
          </div>
          <div className="flex items-center justify-center h-28">
            <Image
              src="/honda.png"
              alt="Title Image"
              width={130}
              height={130}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
