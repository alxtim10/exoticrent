import Image from "next/image";

const Perks = () => {
  return (
    <section className="mt-28">
      <div className="flex items-center justify-between w-full">
        <div>
          <h1 className="text-2xl font-bold">
            Optimized Third Party Payments
          </h1>
          <p className="text-sm font-normal mt-2 md:w-[19rem] w-full text-gray-700">
            Increase authorization rates, optimize your checkout conversion, and
            offer local payment methods.
          </p>
        </div>
        <Image
          src="/mobile.svg"
          alt="Title Image"
          width={160}
          height={160}
          priority
        />
      </div>
      <div className="flex items-center justify-between w-full gap-4">
        <Image
          src="/cleancar.svg"
          alt="Title Image"
          width={170}
          height={170}
          priority
        />
        <div>
          <h1 className="text-2xl font-bold">Optimal Car Hygiene</h1>
          <p className="text-sm font-normal mt-2 md:w-[19rem] w-full text-gray-700">
            Experience the Ultimate Clean: Professional Car Wash Services
            Tailored Just for You.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between w-full">
        <div>
          <h1 className="text-2xl font-bold">
            Flexible Rental
          </h1>
          <p className="text-sm font-normal mt-2 md:w-[19rem] w-full text-gray-700">
          Unlock Your Freedom: Choose Your Ride, Your Terms, with Flexible Rental Options.
          </p>
        </div>
        <Image
          src="/invoice.svg"
          alt="Title Image"
          width={170}
          height={170}
          priority
        />
      </div>
    </section>
  );
};

export default Perks;
