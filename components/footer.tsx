import styles from "@/styles/footer.module.css";
import { FC } from "react";
import Link from "next/link";
import { FacebookIcon, TwitterIcon, InstagramIcon } from "./icons";

export type FooterType = {
  className?: string;
};

const LINKS = [
  {
    title: "Explore",
    items: ["Charts", "Trending Sounds", "New Release", "Playlist"],
  },
  {
    title: "Contact Us",
    items: ["A", "Careers", "Press", "News"],
  },
  {
    title: "Resource",
    items: ["Blog", "Newsletter", "Events", "Help center"],
  },
];

const currentYear = new Date().getFullYear();
export const Footer: FC<FooterType> = ({ className }) => {
  return (
    <footer
      className={[
        "bg-[#0f5881] text-foreground py-12 md:py-16 lg:py-20",
        className,
      ].join(" ")}
    >
      <div className={"container text-white mx-auto px-4 md:px-6 lg:px-8"}>
        <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"}>
          <div className="flex flex-col items-start md:items-center mr-24">
            <Link href="#" className="w-44 h-20 mb-4" prefetch={false}>
              <img
                className={styles.mysoundNewLogo8}
                loading="lazy"
                alt=""
                src="/mysound-logo.png"
              />
            </Link>
            <p className="w-80 text-[#0c0c0c]/80 text-lg font-normal font-poppins leading-loose">
              Transform the way you experience music
            </p>
          </div>
          <div className="flex flex-col items-start md:items-center lg:items-center">
            <h3 className="text-[#0d0d0d] text-base font-semibold font-poppins mb-4">
              Explore
            </h3>
            <Link
              href="#"
              className="text-[#0d0d0d] text-base font-normal font-poppins capitalize leading-9"
              prefetch={false}
            >
              Charts
            </Link>
            <Link
              href="#"
              className="text-[#0d0d0d] text-base font-normal font-poppins capitalize leading-9"
              prefetch={false}
            >
              Trending
            </Link>
            <Link
              href="#"
              className="text-[#0d0d0d] text-base font-normal font-poppins capitalize leading-9"
              prefetch={false}
            >
              Sounds
            </Link>
            <Link
              href="#"
              className="text-[#0d0d0d] text-base font-normal font-poppins capitalize leading-9"
              prefetch={false}
            >
              New
            </Link>
             <Link
              href="#"
              className="text-[#0d0d0d] text-base font-normal font-poppins capitalize leading-9"
              prefetch={false}
            >
              Releases
            </Link>
            <Link
              href="#"
              className="text-[#0d0d0d] text-base font-normal font-poppins capitalize leading-9"
              prefetch={false}
            >
              Playlist
            </Link>

          </div>

          <div className="flex flex-col items-start md:items-center lg:items-center">
            <h3 className="text-[#0d0d0d] text-base font-semibold font-poppins mb-4">
              Contact Us
            </h3>
            <Link
              href="#"
              className="text-[#0d0d0d] text-base font-normal font-poppins capitalize leading-9"
              prefetch={false}
            >
              Account
            </Link>
            <Link
              href="#"
              className="text-[#0d0d0d] text-base font-normal font-poppins capitalize leading-9"
              prefetch={false}
            >
              Customer services
            </Link>
            <Link
              href="#"
              className="text-[#0d0d0d] text-base font-normal font-poppins capitalize leading-9"
              prefetch={false}
            >
              Accesbility
            </Link>

            <Link
              href="#"
              className="text-[#0d0d0d] text-base font-normal font-poppins capitalize leading-9"
              prefetch={false}
            >
              Privacy policy
            </Link>
          </div>

          <div className="flex flex-col items-start md:items-center lg:items-center">
            <h3 className="text-[#0d0d0d] text-base font-semibold font-poppins mb-4">
              Get In Touch
            </h3>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-white hover:text-primary transition-colors"
              >
                <FacebookIcon className="w-6 h-6" />
              </Link>
              <Link
                href="#"
                className="text-white hover:text-primary transition-colors"
              >
                <TwitterIcon className="w-6 h-6" />
              </Link>
              <Link
                href="#"
                className="text-white hover:text-primary transition-colors"
              >
                <InstagramIcon className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-12 md:mt-16 lg:mt-20 pt-6 md:pt-8 lg:pt-10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} MySound. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
