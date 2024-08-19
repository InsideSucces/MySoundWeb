import {
    Navbar as NextUINavbar,
    NavbarContent,
    NavbarMenu,
    NavbarMenuToggle,
    NavbarBrand,
    NavbarItem,
    NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { useRouter } from "next/router";
import NextLink from "next/link";
import { Logo } from "@/components/icons";
import { FC } from "react";

interface AuthNavbarProps {
    activeLink: boolean;
}

export const AuthNavbar: FC<AuthNavbarProps> = ({ activeLink }) => {
    return (
        <NextUINavbar maxWidth="full" position="sticky" className="z-50">
            <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
                <NavbarBrand className="gap-3 max-w-fit">
                    <NextLink className="flex justify-start items-center gap-1" href="/">
                        <Logo />
                    </NextLink>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent
                className="hidden sm:flex basis-1/5 sm:basis-full"
                justify="end"
            >
                <NavbarItem className="hidden sm:flex gap-2">
                    <NextLink href="/auth/signIn">
                        <Button variant={activeLink ? "flat" : undefined} className={`w-24 h-10 px-5 py-2 rounded-lg border border-white ${activeLink && "bg-[#29baba] text-[#0d0d0d]"
                            }`}>
                            Log in
                        </Button>
                    </NextLink>
                    <NextLink href="/auth/signUp">
                        <Button className={`w-24 h-10 px-5 py-2 rounded-lg border border-white ${activeLink && "bg-[#29baba] text-[#0d0d0d]"
                            }`} variant={activeLink ? "flat" : undefined}>Sign up</Button>
                    </NextLink>
                </NavbarItem>
            </NavbarContent>
        </NextUINavbar>
    );
};