import DashboardLayoutNoSSR from "@/components/dashboard/layout";
import { NextPageWithLayout } from "../_app";
import { ReactElement } from "react";
import { useRouter } from "next/router";


const Dashboard: NextPageWithLayout = () => {
    const router = useRouter()
    const route = (router.query.route as string[]) || []
    console.log(route)
    switch (route[0]) {
        case "search":
            return <h4>search</h4>
        case "likes":
            return <h4>likes</h4>
        case "playlists":
            return <h4>playlists</h4>
        case "albums":
            return <h4>albums</h4>

        case "following":
            return <h4>following</h4>
        case "settings":
            return <h4>settings</h4>

        case "subscription":
            return <h4>subscription</h4>
        case "logout":
            return <h4>logout</h4>
        default:
            return <h4>Dashboard</h4>
    }
}



Dashboard.getLayout = function getLayout(page: ReactElement){
    return (
        <DashboardLayoutNoSSR>
            {page}
        </DashboardLayoutNoSSR>
    )
}

export default Dashboard;