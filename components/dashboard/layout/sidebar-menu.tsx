import React from "react";

interface Props {
  title: string;
  children?: React.ReactNode;
}

export const SidebarMenu = ({ title, children }: Props) => {
  return (
    <div className="flex gap-2 flex-col pt-5">
      <span className="text-[18px] md:text-[20px] font-semibold text-[#99938F] font-roboto">{title}</span>
      {children}
    </div>
  );
};
