import { tv } from '@nextui-org/react';

export const SidebarWrapper = tv({
   base: "bg-background transition-transform h-full fixed -translate-x-full w-[260px] md:w-[350px] shrink-0 z-[202] overflow-y-auto border-r border-[#2ECFCF] flex-col py-6 pl-9 md:ml-0 md:flex md:static md:h-screen md:translate-x-0 ",
   variants: {
      collapsed: {
         true: "translate-x-0 ml-0 pt-20 [display:inherit]",
      },
   },
});

export const Overlay = tv({
   base: "bg-[rgb(15_23_42/0.3)] fixed inset-0 z-[201] opacity-80 transition-opacity md:hidden md:z-auto md:opacity-100",
});

export const Header = tv({
   base: "flex gap-8 items-center justify-center px-9 pt-9 md:pt-0",
});

export const Body = tv({
   base: "flex flex-col gap-6 mt-9 px-0",
});

export const Footer = tv({
   base: "md:flex items-center justify-center gap-6 pt-10 pb-8 px-0 hidden",
});

export const Sidebar = Object.assign(SidebarWrapper, {
   Header,
   Body,
   Overlay,
   Footer,
});