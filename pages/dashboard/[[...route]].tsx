import DashboardLayoutNoSSR from "@/components/dashboard/layout";
import { NextPageWithLayout } from "../_app";
import { ReactElement } from "react";
import { useRouter } from "next/router";


const Dashboard: NextPageWithLayout = () => {
    const router = useRouter()
    const route = (router.query.route as string[]) || []

    return (
        <h4>Dashboard/{route} </h4>
    );
}



Dashboard.getLayout = function getLayout(page: ReactElement){
    return (
        <DashboardLayoutNoSSR>
            {page}
        </DashboardLayoutNoSSR>
    )
}

export default Dashboard;