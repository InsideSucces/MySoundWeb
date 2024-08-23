import styles from "@/styles/footer.module.css";
import { FC } from "react";
import Link from "next/link";
import { FacebookIcon, TwitterIcon, InstagramIcon } from "./icons";

export type FooterType = {
  className?: string;
};
export const Footer: FC<FooterType> = ({ className }) => {
  return (
    <footer
      className={[
        "bg-[#2dcece] text-foreground py-12 md:py-16 lg:py-20",
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
              Home
            </Link>
            <Link
              href="#"
              className="text-[#0d0d0d] text-base font-normal font-poppins capitalize leading-9"
              prefetch={false}
            >
              Playlists
            </Link>
            <Link
              href="#"
              className="text-[#0d0d0d] text-base font-normal font-poppins capitalize leading-9"
              prefetch={false}
            >
              Artists
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
              Support
            </Link>
            <Link
              href="#"
              className="text-[#0d0d0d] text-base font-normal font-poppins capitalize leading-9"
              prefetch={false}
            >
              FAQ
            </Link>
            <Link
              href="#"
              className="text-[#0d0d0d] text-base font-normal font-poppins capitalize leading-9"
              prefetch={false}
            >
              Feedback
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
        <div className="mt-12 md:mt-16 lg:mt-20 border-t border-muted pt-6 md:pt-8 lg:pt-10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; 2024 MySound. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <Link
              href="#"
              className="text-sm hover:text-primary transition-colors"
              prefetch={false}
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-sm hover:text-primary transition-colors"
              prefetch={false}
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
