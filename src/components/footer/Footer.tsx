const Footer = () => {
  return (
    <section className="bg-black p-5 text-white mt-10">
        <h1 className="text-lg font-bold">Exotic Rent</h1>
        <h1 className="text-sm">Jakarta, Indonesia</h1>
        <div className="flex flex-col text-sm text-gray-300 mt-5">
          <p className="cursor-pointer hover:underline">Home</p>
          <p className="cursor-pointer hover:underline">Rent</p>
          <p className="cursor-pointer hover:underline">Pricing</p>
          <p className="cursor-pointer hover:underline">Account</p>
        </div>
    </section>
  )
}

export default Footer