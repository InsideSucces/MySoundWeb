import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";
import { HeroSection } from "@/components/Hero";
import AnimatedCarousel from "@/components/carousel_images";

const images = [
  "/assets/artist_1.jpg",
  "/assets/artist_2.jpg",
  "/assets/artist_3.jpg",
  "/assets/artist_4.jpg",
  "/assets/artist_5.jpg",
  // Add more image paths as needed
];
export default function IndexPage() {
  return (
    <DefaultLayout>
      <HeroSection />
      <AnimatedCarousel images={images} />
    </DefaultLayout>
  );
}
