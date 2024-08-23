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

export const SidebarWrapper = () => {
  const router = useRouter();
  const { collapsed, setCollapsed } = useSidebarContext();

  return (
    <aside className="h-screen z-[20] sticky top-0">
      {collapsed ? (
        <div className={Sidebar.Overlay()} onClick={setCollapsed} />
      ) : null}
      <div
        className={Sidebar({
          collapsed: collapsed,
        })}
      >
        <div className={Sidebar.Header()}>
          <img
            className="w-58 h-30"
            src="/assets/mysound_web-logo.png"
            alt="MySound Web Logo"
          />
        </div>
        <div className="flex flex-col justify-between h-full">
          <div className={Sidebar.Body()}>
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
          </div>
          <Sidebar.Footer>
            <SidebarMenu title="GET MOBILE APP">
              <div
                style={{
                  gap: "20px",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  className="w-28 h-10 rounded-md"
                  src="https://via.placeholder.com/115x39"
                />
                <img
                  className="w-28 h-10 rounded-md"
                  src="https://via.placeholder.com/115x39"
                />
              </div>
              <span
                className=""
              >
                <div>
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
              </span>
            </SidebarMenu>
          </Sidebar.Footer>
        </div>
      </div>
    </aside>
  );
};
