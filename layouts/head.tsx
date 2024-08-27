import React from "react";
import NextHead from "next/head";

import { siteConfig } from "@/config/site";


interface HeadProps {
  title?: string
  description?: string
  ogImage?: string
  keywords?: string
}

export const Head = ({ title, description, ogImage, keywords }: HeadProps) => {
  return (
    <NextHead>
      <title>{title ? title : siteConfig.name}</title>
      <meta key="title" content={siteConfig.name} property="og:title" />
      <meta content={description ? description : siteConfig.description} property="og:description" />
      <meta content={description ? description : siteConfig.description} name="description" />
      <meta
        key="viewport"
        content="viewport-fit=cover, width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        name="viewport"
      />
      <link href="/favicon.ico" rel="icon" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link href="https://fonts.googleapis.com/css2?family=Urbanist:wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:secure_url" content={ogImage} />

    </NextHead>
  );
};
