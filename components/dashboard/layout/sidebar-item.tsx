import { Link } from "@nextui-org/react";
import NextLink from "next/link";
import React from "react";
import { useSidebarContext } from "./context";
import { Flex } from "./styles";
import { clsx } from "clsx";

interface Props {
  title: string;
  icon: React.ReactNode;
  isActive?: boolean;
  href?: any;
  badge?: React.ReactNode;
}

export const SidebarItem = ({ icon, title, isActive, href, badge }: Props) => {
  const { collapsed, setCollapsed } = useSidebarContext();

  const handleClick = () => {
    if (window.innerWidth < 836) {
      setCollapsed();
    }
  };

  return (
    <NextLink href={href} passHref shallow={true} legacyBehavior>
      <Link className={` active:bg-none max-w-ful ${isActive ? 'border-r-5 border-[#2ECFCF] text-[#2ECFCF]' : 'text-[#99938F]'}`}>
        <div
          className={clsx(
            isActive ? "[&_svg_path]:fill-[#2ECFCF]" : "hover:scale-[0.98]",
            "flex gap-9 w-full min-h-[54px] h-full items-center px-1.5 rounded-xl cursor-pointer transition-all duration-150 active:scale-[0.98]"
          )}
          onClick={handleClick}
        >
          {icon}
          <span className={`text-[18px] md:text-[20px] font-semibold font-roboto ${isActive ? 'text-[#2ECFCF]' : 'text-[#99938F]'}`}>{title}</span>
          {badge && badge}
        </div>
      </Link>
    </NextLink>
  );
};
