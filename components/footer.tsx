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
    items: ["Account", "Customer services", "Accesbility", "Privacy policy"],
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
          <div className="flex flex-col items-start mr-24">
            <Link href="#" className="mb-6" prefetch={false}>
              <img
                className={styles.mysoundNewLogo8}
                loading="lazy"
                alt="MySound Logo" 
                src="/mysound-logo.png"
                width={150} // Adjust width as needed
                height={75}  // Adjust height as needed
              />
            </Link>
            <p className="w-80 text-lg font-semibold font-poppins leading-loose">
              Transform the way you experience music
            </p>
          </div>

          {/* Dynamically render link sections */}
          {LINKS.map((section) => (
            <div key={section.title} className="flex flex-col md:ml-24">
              <h3 className="text-base font-bold font-poppins mb-4">
                {section.title}
              </h3>
              <ul>
                {section.items.map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-base font-semibold font-poppins capitalize leading-9 hover:underline"
                      prefetch={false}
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Social Media Links */}
          <div className="flex flex-col items-start md:items-center lg:items-center">
            <h3 className="text-base font-bold font-poppins mb-4">
              Get In Touch
            </h3>
            <div className="flex space-x-4">
              <Link href="#" aria-label="Connect on Facebook" target="_blank" rel="noopener noreferrer">
                <FacebookIcon className="w-6 h-6  hover:text-primary transition-colors" />
              </Link>
              <Link href="#" aria-label="Connect on Twitter" target="_blank" rel="noopener noreferrer">
                <TwitterIcon className="w-6 h-6  hover:text-primary transition-colors" />
              </Link>
              <Link href="#" aria-label="Connect on Instagram" target="_blank" rel="noopener noreferrer">
                <InstagramIcon className="w-6 h-6  hover:text-primary transition-colors" />
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 md:mt-16 lg:mt-20 pt-6 md:pt-8 lg:pt-10 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} MySound. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};