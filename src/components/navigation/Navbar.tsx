"use client";
import { useRouter } from "next/navigation";
import HamburgerMenu from "../hamburger-menu/HamburgerMenu";

const Navbar = () => {
  const router = useRouter();

  return (
    <nav className="relative">

      <div className="flex items-center justify-between">
        <h1
          onClick={() => {
            router.push(`/`);
          }}
          className="text-xl font-bold cursor-pointer"
        >
          Exotic Rent
        </h1>
        <HamburgerMenu />
      </div>
    </nav>
  );
};
export default Navbar;
