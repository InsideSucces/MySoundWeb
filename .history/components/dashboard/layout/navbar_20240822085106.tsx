import React from "react";
import { Box, Flex } from "./styles";
import { Input, Link, Text } from "@nextui-org/react";
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
  const getActiveRoute = (routes: any) => {};

  return (
    <Box className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden md:px-20">
      <Navbar
        defaultValue={`Dashboard`}
        className="w-full pt-12 justify-between"
        classNames={{
          wrapper: "w-full max-w-full",
        }}
      >
        <NavbarContent justify="start" style={{ justifyItems: "center" }}>
          <Text
            size={34}
            weight={"bold"}
            className=""
            css={{
              fontFamily: "$sans",
              color: "$white",
              
            }}
          >
            Discover{" "}
          </Text>
          <Text
            // size={16}
            weight={"medium"}
            css={{
              fontFamily: "$sans",
              color: "$accents7",
              textAlign: "center",
              
            }}
          >
            Recently Played
          </Text>
        </NavbarContent>
        <NavbarContent justify="end">
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
                  weight={"semibold"}
                  css={{
                    fontFamily: "$sans",
                    color: "$white",
                  }}
                >
                  Ola Ugo
                </Text>
                <Text
                  size={12}
                  weight={"medium"}
                  css={{
                    fontFamily: "$sans",
                    color: "$accents5",
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
