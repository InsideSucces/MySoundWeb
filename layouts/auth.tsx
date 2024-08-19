import { Head } from "./head";

import { Footer } from "@/components/footer";
import { AuthNavbar } from "@/components/auth_nav";

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="relative flex flex-col h-screen bg-cover bg-no-repeat bg-center" style={{ backgroundImage: 'url("/assets/auth_background.jpg")' }}>
            <Head />
            <AuthNavbar activeLink />
            <main className="container mx-auto max-w-full flex-grow">
            {children}
            </main>
        </div>
    );
}
