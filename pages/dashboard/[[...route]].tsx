import DashboardLayoutNoSSR from "@/components/dashboard/layout";
import { NextPageWithLayout } from "../_app";
import { ReactElement, useEffect, useState } from "react";
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
import { Head } from "@/layouts/head";
import { FooterMusicPlayer } from "@/components/dashboard/footerPlayer";

const Dashboard: NextPageWithLayout = () => {
    const router = useRouter();
    const [route, setRoute] = useState((router.query.route as string[]) || []); // State to store the route

    useEffect(() => {
        // Update the route state whenever the query parameter changes
        setRoute(router.query.route as string[] || []);
    }, [router.query.route]);

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
    return (
        <>
            <Head />
            <DashboardLayoutNoSSR>
                {page}
            </DashboardLayoutNoSSR>
            {/* <FooterMusicPlayer /> */}
        </>
    );
};

export default Dashboard;
