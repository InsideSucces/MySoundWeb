import React from "react";
import { Box, Flex } from "./styles";
import { Input, Link, Text } from "@nextui-org/react";
import { BurguerButton } from "./burger-btn";
import { Navbar, NavbarContent } from "@nextui-org/navbar";
import Image from "next/image";

interface Props {
  children: React.ReactNode;
}
export const NavbarWrapper = (props: Props) => {
  const getActiveRoute = (routes: any) => {};

  return (
    <Box className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
      <Navbar
        defaultValue={`Dashboard`}
        className="w-full p"
        classNames={{
          wrapper: "w-full max-w-full",
        }}
      >
        <NavbarContent>
          <BurguerButton />
        </NavbarContent>
        <NavbarContent>
          <Flex css={{ gap: "96px", alignItems: "center" }}>
            <Flex css={{ gap: "20px", alignItems: "center" }}>
              <Text
                size={20}
                weight={"normal"}
                css={{
                  fontFamily: "$sans",
                  color: "$accents9",
                }}
              ></Text>
              <Text
                size={16}
                weight={"medium"}
                css={{
                  fontFamily: "$sans",
                  color: "$accents7",
                }}
              ></Text>
            </Flex>
          </Flex>
        </NavbarContent>
        <NavbarContent
          justify="end"
          className="w-fit data-[justify=end]:flex-grow-0"
          style={{ alignItems: "flex-end", justifyContent: "flex-end" }}
        >
          <Flex css={{ gap: "17px", alignItems: "center" }}>
            <img
              className="w-16 h-16 rounded-xl"
              src="/assets/artist_1.jpg"
              alt="User"
            />
            <Flex css={{ gap: "10px" }}>
              <Flex css={{ flexDirection: "column" }}>
                <Text
                  size={14}
                  weight={"medium"}
                  css={{
                    fontFamily: "$sans",
                    color: "$accents9",
                  }}
                >
                  Ola Ugo
                </Text>
                <Text
                  size={12}
                  weight={"medium"}
                  css={{
                    fontFamily: "$sans",
                    color: "$accents7",
                    marginTop: "5px",
                  }}
                >
                  Premium
                </Text>
              </Flex>
              <div className="w-4 h-4 justify-center items-center flex">
                <div className="w-4 h-4 relative"></div>
              </div>
            </Flex>
          </Flex>
        </NavbarContent>
      </Navbar>
      {props.children}
    </Box>
  );
};
