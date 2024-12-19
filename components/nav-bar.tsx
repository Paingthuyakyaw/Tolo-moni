import Link from "next/link";
import React from "react";

const NavBarLayout = () => {
  return (
    <header className=" bg-white py-3  flex items-center justify-between container min-w-full">
      <div>
        <h3 className=" font-bold text-2xl">Tolo Moni</h3>
      </div>
      <nav>
        <ul className=" flex items-center gap-5">
          <li>
            <Link
              className=" hover:underline hover:decoration-pink-600 transition-all duration-300"
              href={"/login"}
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              className="   py-2 px-3  transition-all duration-200 rounded-md bg-chatPrimary text-white text-sm"
              href={"/register"}
            >
              Register
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBarLayout;
