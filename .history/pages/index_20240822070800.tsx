import React, { useEffect, useState } from "react";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";
import { HeroSection } from "@/components/Hero";
import AnimatedCarousel from "@/components/carousel_images";
import CustomAccordion from "@/components/faq_accordion";
import { HotPlaylists } from "@/components/home/hot_playlists";
import { TrendingArtistes } from "@/components/home/trending_artists";
import { ArtistProfile } from "@/components/home/artist_profile";
import { CTA } from "@/components/home/cta";
import { ArtistData, PlaylistData } from "@/types_models";

const images = [
  "/assets/artist_1.jpg",
  "/assets/artist_2.jpg",
  "/assets/artist_3.jpg",
  "/assets/artist_4.jpg",
  "/assets/artist_5.jpg",
  // Add more image paths as needed
];

const faqItems = [
  {
    title: "How do I create an account?",
    content:
      "To create an account, click on the Sign Up button at the top of the page. You can sign up using your email address or log in with with a social media account",
  },
  {
    title: "How do I create and manage playlists?",
    content:
      "You can create a playlist by selecting “Playlist” from your stream dashboard. Add songs by clicking the button on any track. You can rename, reorder or delete playlists from your library.",
  },
  {
    title: "What should I do if I forget my password?",
    content:
      "You can create a playlist by selecting “Playlist” from your stream dashboard. Add songs by clicking the button on any track. You can rename, reorder or delete playlists from your library.",
  },
  {
    title: "How can I get help if I encounter a problem?",
    content:
      "You can create a playlist by selecting “Playlist” from your stream dashboard. Add songs by clicking the button on any track. You can rename, reorder or delete playlists from your library.",
  },
];

export default function IndexPage() {
  const [trending_artists, setTrendingArtist] = useState<ArtistData[]>([]);
  const [hot_playlists, setHotPlaylists] = useState<PlaylistData[]>([]);

  useEffect(() => {
    fetch("/api/fetchArtists")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setTrendingArtist(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching artists:", error);
      });
  }, []);
  useEffect(() => {
    fetch("/api/fetchPlaylists")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setHotPlaylists(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching playlists:", error);
      });
  }, []);

  return (
    <DefaultLayout>
      <HeroSection />
      <AnimatedCarousel images={images} />
      <HotPlaylists playlists={hot_playlists} />
      <TrendingArtistes artists={trending_artists} />
      <ArtistProfile />
      <CTA />
      <CustomAccordion items={faqItems} />
    </DefaultLayout>
  );
}
