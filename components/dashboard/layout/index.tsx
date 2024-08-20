import dynamic from "next/dynamic";
import { useState } from "react";
import { useLockedBody } from "../hooks/useBodyLocks";
import { SidebarContext } from "./context";
import { WrapperLayout } from "./styles";
import { SidebarWrapper } from "./sidebar";
import { NavbarWrapper } from "./navbar";

interface Props {
    children: React.ReactNode;
}

const DashboardLayout = (props: Props) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [_, setLocked] = useLockedBody(false)

    const handleToggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
        setLocked(!sidebarOpen);
    };
    return (
        <SidebarContext.Provider
            value={{
                collapsed: sidebarOpen,
                setCollapsed: handleToggleSidebar,
            }}
        >
            <WrapperLayout>
                <SidebarWrapper />
                <NavbarWrapper>{props.children}</NavbarWrapper>
            </WrapperLayout>
        </SidebarContext.Provider>
    );
};

const DashboardLayoutNoSSR = dynamic(() => Promise.resolve(DashboardLayout).then(mod => mod), { ssr: false });
export default DashboardLayoutNoSSR;