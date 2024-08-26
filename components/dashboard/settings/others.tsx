import { ArrowIcon } from "@/components/icons";
import { FC } from "react"

const othersData = [
    {
        title: "Help & support",
        description: "Get help from us and from the community",
    },
    {
        title: "Terms of service",
        description: "", // No description for this item
    },
    {
        title: "Privacy Policy",
        description: "", // No description for this item
    },
    {
        title: "Legal",
        description: "", // No description for this item
    },
    {
        title: "Third-party softwares",
        description: "", // No description for this item
    },
    {
        title: "Version",
        description: "01.01.01.001",
    },
];

export const Others: FC = () => {
    return (
        <div className="w-full p-6">
            <div className="flex flex-col gap-4 -mx-6">
                {othersData.map((item, index) => (
                    <div
                        key={index}
                        className="flex justify-between items-center py-3 px-4 rounded-lg hover:bg-[#252525] transition duration-300"
                    >
                        <div className="flex flex-col gap-1">
                            <h3 className="text-white text-xl md:text-2xl font-semibold font-roboto capitalize">
                                {item.title}
                            </h3>
                            {item.description && (
                                <p className="text-[#7e8389] text-xl font-semibold font-roboto">
                                    {item.description}
                                </p>
                            )}
                        </div>
                        <div className="mx-[1rem] md:mx-[16rem]"></div>
                        <div className="w-12 h-12 rounded-full bg-[#0d0d0d] shadow flex items-center justify-center p-1">
                            <ArrowIcon color={'#29baba'} size={34}  />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
