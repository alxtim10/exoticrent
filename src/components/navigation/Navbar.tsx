"use client";
import { useState } from "react";
import Image from "next/image";
import ModalNavbar from "./ModalNavbar";
import { useRouter } from 'next/navigation'

const Navbar = () => {
  const [show, setShow] = useState<boolean>(false);
  const router = useRouter();

  const tabs = [
    {
      label: "Home",
      description: "Exotic Rent, home of luxury cars",
      link: 'home'
    },
    {
      label: "Rent",
      description: "Rent luxury cars with the best quality",
      link: 'rent'
    },
    {
      label: "Pricing",
      description: "Subscribe exotic rent membership",
      link: 'pricing'
    },
    {
      label: "Login",
      description: "Login to your account ",
      link: 'entry'
    },
  ];

  return (
    <nav className="relative">
      <div className="flex items-center justify-between">
        <h1 onClick={() => {
          router.push(`/`)
        }} className="text-xl font-bold cursor-pointer">Exotic Rent</h1>
        <div
          onClick={() => {
            setShow((prev) => !prev);
          }}
          className="md:hidden bg-[#dfdfdf] rounded-xl py-1 px-3 hover:bg-gray-300 transition-all cursor-pointer"
        >
          <Image
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAJUlEQVR4nGNgGAUjCvynMqa/BaNg4MH/0VQ0CigGo6loFAxSAADz7neJCOmgHgAAAABJRU5ErkJggg=="
            alt="Hamburger Menu"
            width={15}
            height={15}
            priority
          />
        </div>
        <div className="hidden md:block">
          <ul className="flex gap-5">
            {tabs.map((data: any, i: any) => {
              return (
                <li onClick={() => {
                  router.push(`/${data.link}`)
                }} key={i}>
                  <h1 className="text-sm font-semibold">{data.label}</h1>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <ModalNavbar show={show} tabs={tabs} />
    </nav>
  );
};
export default Navbar;
