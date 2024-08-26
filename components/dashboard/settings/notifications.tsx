import { FC, useState } from "react"


const notificationsData = [
    {
        title: "Notifications",
        description: "Choose which notification to receive.",
    },
    {
        title: "Push notifications",
        description: "Control the notifications you receive on your devices.",
    },
    {
        title: "Pop-ups",
        description: "Allow pop-up notifications.",
    },
];

export const Notifications: FC = () => {
    const [notificationsEnabled, setNotificationsEnabled] = useState(false);
    const [pushNotificationsEnabled, setPushNotificationsEnabled] =
        useState(false);
    const [popUpsEnabled, setPopUpsEnabled] = useState(false);
    return (
        <div className="w-full p-4">
            <div className="flex flex-col gap-4">
                {notificationsData.map((item, index) => (
                    <div
                        key={index}
                        className="flex justify-between items-center py-3 px-4 rounded-lg hover:bg-[#252525] transition duration-300"
                    >
                        <div className="flex flex-col gap-1">
                            <h3 className="text-white text-xl md:text-2xl font-semibold font-roboto capitalize">
                                {item.title}
                            </h3>
                            {item.description && (
                                <p className="text-[#7e8389] text-xl font-semibold font-medium font-roboto">
                                    {item.description}
                                </p>
                            )}
                        </div>
                        <div className="mx-[1rem] md:mx-[16rem]"></div>
                        <label
                            htmlFor={`${item.title}-toggle`}
                            className="relative inline-block w-11 h-7"
                        >
                            <input
                                type="checkbox"
                                id={`${item.title}-toggle`}
                                className="opacity-0 w-0 h-0 peer"
                                checked={
                                    item.title === "Notifications"
                                        ? notificationsEnabled
                                        : item.title === "Push notifications"
                                            ? pushNotificationsEnabled
                                            : popUpsEnabled
                                }
                                onChange={() => {
                                    if (item.title === "Notifications") {
                                        setNotificationsEnabled(!notificationsEnabled);
                                    } else if (item.title === "Push notifications") {
                                        setPushNotificationsEnabled(!pushNotificationsEnabled);
                                    } else {
                                        setPopUpsEnabled(!popUpsEnabled);
                                    }
                                }}
                            />
                            <div className="w-11 h-7 left-0 top-0 absolute rounded-3xl bg-gradient-to-r from-[#2dcece] to-[#2dcece]">
                                <div className="w-11 h-7 left-[44.96px] top-[27.36px] absolute origin-top-left -rotate-180 bg-gradient-to-tl from-[#2c3036] to-[#30333b] rounded-3xl" />
                                <div className="w-11 h-7 left-[46px] top-[28px] absolute origin-top-left -rotate-180 bg-gradient-to-tl from-[#2c3036] to-[#30333b] rounded-3xl blur-none" />
                                <div className="w-10 h-6 left-[43.91px] top-[26.73px] absolute origin-top-left -rotate-180 bg-gradient-to-tl from-[#2dcece] to-[#1c1f22] rounded-3xl" />
                                <div className="w-10 h-6 left-[43.91px] top-[26.73px] absolute origin-top-left -rotate-180 bg-gradient-to-tl from-[#2f353a] to-[#1c1f22] rounded-3xl blur-sm" />
                            </div>
                            <span className="absolute left-[5px] top-[5px] w-4 h-4 bg-[#0d0d0d] rounded-full shadow shadow-inner peer-checked:translate-x-6 peer-checked:bg-white transition duration-200 ease-in-out"></span>
                        </label>
                    </div>
                ))}
            </div>
        </div>
    )
}