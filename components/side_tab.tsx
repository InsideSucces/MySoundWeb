import { motion } from 'framer-motion';
import React, { useState } from 'react';

interface NavItemProps {
    text: string;
    active?: boolean;
    badge?: string;
}

const NavItem: React.FC<NavItemProps> = ({ text, active = false, badge }) => (
    <div className={`w-full px-2 py-2 rounded flex justify-between items-center ${active ? 'bg-[#74c9cf]' : ''}`}>
        <div className="flex items-center">
            <div className="w-8 h-8 mr-2"></div>
            <div className={`text-base font-['Poppins'] leading-normal tracking-tight ${active ? 'text-[#0d0d0d] font-semibold' : 'text-[#191919] font-normal'}`}>
                {text}
            </div>
        </div>
        {badge && (
            <div className="w-6 h-6 bg-[#191919] rounded flex justify-center items-center">
                <div className="text-[#2dcece] text-xs font-normal font-['Poppins'] leading-7">{badge}</div>
            </div>
        )}
    </div>
);

export const CollapsableSideNav: React.FC<{ isOpen: boolean }> = ({ isOpen }) => {
    return (
        <motion.div
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: isOpen ? 0 : -300, opacity: isOpen ? 1 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={`fixed top-0 left-0 h-screen z-50 md:hidden bg-[#40d5d5]/50 flex flex-col justify-between items-start w-full md:w-auto ${isOpen ? 'w-full' : 'w-0'}`}
        >
            <div className="flex flex-col justify-start items-start gap-6 md:gap-12 w-full">
                <div className="flex flex-col justify-start items-start gap-2 sm:gap-4 w-full">
                    <NavItem text="Home" active />
                    <NavItem text="Playlist" />
                    <NavItem text="Notification" badge="1" />
                    <NavItem text="Profile" />
                    <NavItem text="Settings" />
                </div>
            </div>
            <div className="mt-6 md:mt-0 w-full">
                <NavItem text="Logout" active />
            </div>
        </motion.div>
    );
}