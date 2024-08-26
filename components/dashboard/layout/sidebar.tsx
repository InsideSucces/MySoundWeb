import NextLink from "next/link";
import React from "react";
import { useSidebarContext } from "./context";
import { useRouter } from "next/router";
import { Sidebar } from "./sidebar-styles";
import { Box, Flex } from "./styles";
import { SidebarMenu } from "./sidebar-menu";
import { SidebarItem } from "./sidebar-item";
import { TbLogout } from "react-icons/tb";
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
                icon={<TbLogout width={31} height={31} />}
                isActive={router.asPath === "/dashboard/logout"}
                href="/dashboard/logout"
              />
            </SidebarMenu>
          </div>
          <div className={Sidebar.Footer()}>
            <SidebarMenu title="GET MOBILE APP">
              <div
                className="flex-row inline-flex items-center justify-center gap-6"
              >
                <button type="button" className="flex items-center justify-center w-32 mt-2 text-white bg-black h-10 rounded-xl">
                  <div className="mr-2">
                    <svg viewBox="0 0 384 512" width="16">
                      <path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z">
                      </path>
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs">
                      Download on the
                    </div>
                    <div className="-mt-1 font-sans text-sm font-semibold">
                      App Store
                    </div>
                  </div>
                </button>
                <button type="button" className="flex items-center justify-center w-32 mt-2 text-white bg-black rounded-lg h-10">
                  <div className="mr-2">
                    <svg viewBox="30 336.7 120.9 129.2" width="16">
                      <path fill="#FFD400" d="M119.2,421.2c15.3-8.4,27-14.8,28-15.3c3.2-1.7,6.5-6.2,0-9.7  c-2.1-1.1-13.4-7.3-28-15.3l-20.1,20.2L119.2,421.2z">
                      </path>
                      <path fill="#FF3333" d="M99.1,401.1l-64.2,64.7c1.5,0.2,3.2-0.2,5.2-1.3  c4.2-2.3,48.8-26.7,79.1-43.3L99.1,401.1L99.1,401.1z">
                      </path>
                      <path fill="#48FF48" d="M99.1,401.1l20.1-20.2c0,0-74.6-40.7-79.1-43.1  c-1.7-1-3.6-1.3-5.3-1L99.1,401.1z">
                      </path>
                      <path fill="#3BCCFF" d="M99.1,401.1l-64.3-64.3c-2.6,0.6-4.8,2.9-4.8,7.6  c0,7.5,0,107.5,0,113.8c0,4.3,1.7,7.4,4.9,7.7L99.1,401.1z">
                      </path>
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs">
                      GET IT ON
                    </div>
                    <div className="-mt-1 font-sans text-sm font-semibold">
                      Google Play
                    </div>
                  </div>
                </button>
              </div>
              <span
                className="mt-3"
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
          </div>
        </div>
      </div>
    </aside>
  );
};
