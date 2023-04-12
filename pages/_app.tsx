import React from "react";
import { useScrollRestoration } from "../hooks/useScrollRestoration";

// Next - auth
import { SessionProvider } from "next-auth/react";

// Framer - motion
import { AnimatePresence } from "framer-motion";

// Font import
import { Roboto } from "@next/font/google";

import "../styles/globals.css";
import type { AppProps } from "next/app";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin-ext"],
  variable: "--font-roboto",
});

export default function App({ Component, pageProps, router }: AppProps) {
  useScrollRestoration(router);
  return (
    <main className={`${roboto.variable} font-sans`}>
      <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
        <SessionProvider session={pageProps.session}>
          <Component {...pageProps} key={router.asPath} />
        </SessionProvider>
      </AnimatePresence>
    </main>
  );
}
