"use client";
import UseLocalStorage from "@/hook/use-storage";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  useDisclosure,
} from "@nextui-org/react";
import { IconMenu2 } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

const NavBarLayout = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const { nameOfCookie } = UseLocalStorage("token");

  return (
    <header className=" z-10 bg-white py-3  flex items-center justify-between container min-w-full">
      <div>
        <h3 className=" font-bold text-2xl">Tolo Moni</h3>
      </div>
      <nav className=" hidden md:block">
        {nameOfCookie ? (
          <></>
        ) : (
          <>
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
          </>
        )}
      </nav>
      {/* mobile */}
      <div className=" md:hidden">
        <Button onPress={onOpen} isIconOnly aria-label="Navbar">
          <IconMenu2 />
        </Button>
        <Drawer size="xs" isOpen={isOpen} onOpenChange={onOpenChange}>
          <DrawerContent>
            {() => (
              <>
                <DrawerBody className=" mt-5">
                  <ul className=" flex flex-col gap-5">
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
                </DrawerBody>
              </>
            )}
          </DrawerContent>
        </Drawer>
      </div>
    </header>
  );
};

export default NavBarLayout;
