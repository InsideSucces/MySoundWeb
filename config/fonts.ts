import { Fira_Code as FontMono, Inter, Poppins, Roboto as FontSans, Urbanist } from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: "100"
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});



export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: "100"
});

export const urbanist = Urbanist({
  subsets: ["latin"],
});