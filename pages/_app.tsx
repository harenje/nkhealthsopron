import React from "react";
import { UserProvider } from "@auth0/nextjs-auth0/client";

// Font import
import { Roboto } from "@next/font/google";

import "../styles/globals.css";
import type { AppProps } from "next/app";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin-ext"],
  variable: "--font-roboto",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${roboto.variable} font-sans`}>
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </main>
  );
}
