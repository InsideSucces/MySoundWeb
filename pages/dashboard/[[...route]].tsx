import DashboardLayoutNoSSR from "@/components/dashboard/layout";
import { NextPageWithLayout } from "../_app";
import { ReactElement } from "react";
import { useRouter } from "next/router";
import { Home } from "@/components/dashboard/home";
import { Subscription } from "@/components/dashboard/subscription";
import { Settings } from "@/components/dashboard/settings";
import { Albums } from "@/components/dashboard/albums";
import { Playlists } from "@/components/dashboard/playlists";
import { LogOut } from "@/components/dashboard/logout";
import { Following } from "@/components/dashboard/following";
import { Likes } from "@/components/dashboard/likes";
import { Search } from "@/components/dashboard/search";

const Dashboard: NextPageWithLayout = () => {
    const router = useRouter();
    const route = (router.query.route as string[]) || [];
    console.log(route);
    switch (route[0]) {
        case "search":
            return <Search />;
        case "likes":
            return <Likes />;
        case "playlists":
            return <Playlists />;
        case "albums":
            return <Albums />;

        case "following":
            return <Following />;
        case "settings":
            return <Settings />;

        case "subscription":
            return <Subscription />;
        case "logout":
            return <LogOut />;
        default:
            return <Home />;
    }
};

Dashboard.getLayout = function getLayout(page: ReactElement) {
    return <DashboardLayoutNoSSR>{page}</DashboardLayoutNoSSR>;
};

export default Dashboard;
