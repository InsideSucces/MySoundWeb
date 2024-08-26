import type { NextPage } from "next";
import { Tabs, Tab } from "@nextui-org/tabs";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { AccountSettings } from "./account_settings";
import { Others } from "./others";
import { PrivacyAndSecurity } from "./privacy_security";
import { Notifications } from "./notifications";
import { PlaybackAndDownloads } from "./playback_downloads";



interface SettingsData {
  id: number;
  key: string;
  name: string;
  content: ReactNode;
};

const settings: SettingsData[] = [
  {
    id: 1,
    key: "account_settings",
    name: "Account Settings",
    content: <AccountSettings />,
  },
  {
    id: 2,
    key: "playback_downloads",
    name: "Playback & Downloads",
    content: <PlaybackAndDownloads />,
  },
  {
    id: 3,
    key: "notifications",
    name: "Notifications",
    content: <Notifications />,
  },
  {
    id: 4,
    key: "security",
    name: "Privacy & Security",
    content: <PrivacyAndSecurity />,
  },
  {
    id: 5,
    key: "others",
    name: "Others",
    content: <Others />,
  },
]
export const Settings: NextPage = () => {
  const pathname = usePathname();
  return (
    <div className="h-full md:h-96 lg:px-6 m-9">
      <div className="flex items-center justify-center flex-wrap max-w-[910rem] mx-auto w-full rounded-[8.643px] bg-[#121212] shadow-[0px_0px_25.93px_0px_rgba(170,170,170,0.16),_0px_8.643px_17.287px_0px_rgba(194,194,194,0.16)]">
        <Tabs
          aria-label="MySound Settings"
          color="primary"
          variant="underlined"
          fullWidth
          classNames={{
            tabList: "gap-6 w-full relative itmes-center justify-center rounded-none p-0 border-b border-divider",
            cursor: "w-full bg-[#2ECFCF]",
            tab: "max-w-fit px-10 h-12 data-[selected=true]:text-[#2ECFCF]",
            tabContent: "group-data-[selected=true]:text-[#2ECFCF]",
            base: "container mx-auto w-full",
          }}
        >
          {settings.map((value) => (
            <Tab
              key={value.key}
              title={
                <div className="flex items-center text-[18.287px] md:text-[20.287px] font-bold">
                  <span>{value.name}</span>
                </div>
              }
            >
              <div className="container mx-auto w-full">
                {value.content}
              </div>
            </Tab>
          ))}
        </Tabs>
      </div>
    </div>
  );
};
