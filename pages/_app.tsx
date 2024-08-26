import type { AppProps } from "next/app";

import { NextUIProvider } from "@nextui-org/system";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useRouter } from "next/router";
import { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'

import { fontSans, fontMono, inter, poppins, urbanist } from "@/config/fonts";
import "@/styles/globals.css";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)
  const router = useRouter();


  return (
    <NextUIProvider navigate={router.push}>
      <NextThemesProvider>
        {getLayout(<Component {...pageProps} />)}
      </NextThemesProvider>
    </NextUIProvider>
  );
}

export const fonts = {
  sans: fontSans.style.fontFamily,
  mono: fontMono.style.fontFamily,
  inter: inter.style.fontFamily,
  poppins: poppins.style.fontFamily,
  urbanist: urbanist.style.fontFamily,
};
