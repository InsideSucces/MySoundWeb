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
  // useEffect(() => {
  //     getActiveRoute(routes);
  //   }, [pathname]);
  // }
  const getActiveRoute = (routes: any) => {};
  return (
    <Box
      css={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        flex: "1 1 auto",
        overflowY: "auto",
        overflowX: "hidden",
      }}
    >
      <Navbar
        defaultValue={`Dashboard`}
        style={{
          borderBottom: "1px solid $border",
          justifyContent: "space-between",
          background: "$transparent",
          width: "100%",
          padding: "20px"
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
        <Flex>
        <NavbarContent
          justify="end"
          className="w-fit data-[justify=end]:flex-grow-0"
          
          style={{ alignItems: "flex-end",justifyContent: "flex-end"}}
        >
          <Flex css={{ gap: "17px", alignItems: "center" }}>
            <img
              className="w-16 h-16 rounded-xl"
              src="/assets/artist_1.jpg"
              alt="User"
            />
            <Flex css={{ gap: "10px",}}>
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
        </Flex>
      </Navbar>
      {props.children}
    </Box>
  );
};
