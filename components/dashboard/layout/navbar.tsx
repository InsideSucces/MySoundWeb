import React from "react";
import { Box, Flex } from "./styles";
import { Input, Link } from "@nextui-org/react";
import { BurguerButton } from "./burger-btn";
import { Navbar, NavbarContent } from "@nextui-org/navbar";
import Image from "next/image";
import { useRouter } from "next/router";

interface Props {
  children: React.ReactNode;
}
export const NavbarWrapper = (props: Props) => {
  const router = useRouter();
  const route = (router.query.route as string[]) || [];
  const getActiveRoute = (routes: any) => { };

  return (
    <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden md:px-20">
      <Navbar
        defaultValue={`Dashboard`}
        className="w-full pt-12 justify-between sticky"
        classNames={{
          wrapper: "w-full max-w-full",
        }}
      >
        <NavbarContent className="md:hidden">
          <BurguerButton />
        </NavbarContent>
        <NavbarContent justify="start" style={{ justifyItems: "center" }}>
          {/* <span className="">Discover </span>
          <span>Recently Played</span> */}
        </NavbarContent>
        <NavbarContent justify="end">
          <div className="flex flex-row align-center justify-center">
            <img
              className="w-16 h-16 rounded-xl"
              src="/assets/artist_1.jpg"
              alt="User"
            />
            <div >
              <div className="flex flex-col text-center justify-center">
                <span>Ola Ugo</span>
                <span>Premium</span>
              </div>
              <div className="w-4 h-4 justify-center items-center flex">
                <div className="w-4 h-4 relative"></div>
              </div>
            </div>
          </div>
        </NavbarContent>
      </Navbar>
      {props.children}
    </div>
  );
};
