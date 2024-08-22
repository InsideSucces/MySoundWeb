import NextLink from "next/link";
import React from "react";
import { useSidebarContext } from "./context";
import { useRouter } from "next/router";
import { Sidebar } from "./sidebar-styles";
import { Box, Flex } from "./styles";
import { SidebarMenu } from "./sidebar-menu";
import { SidebarItem } from "./sidebar-item";
import {
  AlbumsIcon,
  HomeIcon,
  LikesIcon,
  PlaylistsIcon,
  SearchIcon,
  SettingsIcon,
} from "../assets/icons";
import { Text } from "@nextui-org/react";

export const SidebarWrapper = () => {
  const router = useRouter();
  const { collapsed, setCollapsed } = useSidebarContext();

  return (
    <Box
      as="aside"
      css={{
        height: "100vh",
        zIndex: 202,
        position: "sticky",
        top: "0",
      }}
    >
      {collapsed ? <Sidebar.Overlay onClick={setCollapsed} /> : null}
      <Sidebar collapsed={collapsed}>
        <Sidebar.Header>
          <img
            className="w-58 h-30"
            src="/assets/mysound_web-logo.png"
            alt="MySound Web Logo"
          />
        </Sidebar.Header>
        <Flex direction={"column"} justify={"between"} css={{ height: "100%" }}>
          <Sidebar.Body className="body sidebar">
            <SidebarMenu title="MENU">
              <SidebarItem
                title="Home"
                icon={<HomeIcon />}
                isActive={router.asPath === "/dashboard"}
                href="/dashboard"
              />
              <SidebarItem
                title="Search"
                icon={<SearchIcon />}
                isActive={router.asPath === "/dashboard/search"}
                href="/dashboard/search"
              />

              <SidebarItem
                title="Likes"
                icon={<LikesIcon />}
                isActive={router.asPath === "/dashboard/likes"}
                href="/dashboard/likes"
              />
              <SidebarItem
                title="Playlists"
                icon={<PlaylistsIcon />}
                isActive={router.asPath === "/dashboard/playlists"}
                href="/dashboard/playlists"
              />
              <SidebarItem
                title="Albums"
                icon={<AlbumsIcon />}
                isActive={router.asPath === "/dashboard/albums"}
                href="/dashboard/albums"
              />
              <SidebarItem
                title="Following"
                icon={<HomeIcon />}
                isActive={router.asPath === "/dashboard/following"}
                href="/dashboard/following"
              />
            </SidebarMenu>
            <SidebarMenu title="GENERAL">
              <SidebarItem
                title="Settings"
                icon={<SettingsIcon />}
                isActive={router.asPath === "/dashboard/settings"}
                href="/dashboard/settings"
              />
              <SidebarItem
                title="Subscription"
                icon={<HomeIcon />}
                isActive={router.asPath === "/dashboard/subscription"}
                href="/dashboard/subscription"
              />
              <SidebarItem
                title="Log out"
                icon={<HomeIcon />}
                isActive={router.asPath === "/dashboard/logout"}
                href="/dashboard/logout"
              />
            </SidebarMenu>
          </Sidebar.Body>
          <Sidebar.Footer>
            <SidebarMenu title="GET MOBILE APP">
              <Flex css={{ gap: "20px" al }}>
                <img
                  className="w-28 h-10 rounded-md"
                  src="https://via.placeholder.com/115x39"
                />
                <img
                  className="w-28 h-10 rounded-md"
                  src="https://via.placeholder.com/115x39"
                />
              </Flex>
              <Text
                css={{
                  fontFamily: "$sans",
                }}
              >
                <div className="items-center justify-center">
                  <span className="text-[#99938f] text-sm font-bold leading-tight tracking-tight">
                    Legal ⁃ Privacy ⁃ Cookie Policy ⁃ Cookie Blog Manage ⁃
                    Imprint Resource Chart
                    <br />
                  </span>
                  <span className="text-[#004cff]/75 text-sm font-bold leading-tight tracking-tight">
                    Language
                  </span>
                  <span className="text-[#99938f] text-sm font-bold leading-tight tracking-tight">
                    :{" "}
                  </span>
                  <span className="text-[#99938f]/75 text-sm font-bold leading-tight tracking-tight">
                    English (US)
                  </span>
                </div>
              </Text>
            </SidebarMenu>
          </Sidebar.Footer>
        </Flex>
      </Sidebar>
    </Box>
  );
};
