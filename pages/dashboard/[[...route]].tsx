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
import { useAudioPlayerContext } from "@/contexts/audio-player-context";
import { ArtistProfile } from "@/components/dashboard/artist_profile";

const Dashboard: NextPageWithLayout = () => {
    const router = useRouter();
    const route = (router.query.route as string[]) || [];
    const [isRouteReady, setIsRouteReady] = useState(false);

    useEffect(() => {
        console.log(route);
        const timer = setTimeout(() => {
            setIsRouteReady(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, [router.query.route]);

    if (!isRouteReady) return null; // Or a loading indicator

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

        case "artists":
            return <ArtistProfile artist_id={route[1]} />;
        default:
            return <Home />;
    }
};

Dashboard.getLayout = function getLayout(page: ReactElement) {
    return (
        <>
            <Head title="Listen Now - MySound" />
            <DashboardLayoutNoSSR>
                {page}
            </DashboardLayoutNoSSR>
            {/* <FooterMusicPlayer /> */}
        </>
    );
};

export default Dashboard;
