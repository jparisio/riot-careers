// filepath: /Users/justinparisio/Desktop/riot-careers/src/pages/_app.tsx
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useResetOnMount } from "@/hooks/useResetOnMount";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const resetBodyPointerEvents = useResetOnMount(router.asPath);

  return (
    <AnimatePresence
      mode="wait"
      onExitComplete={() => {
        // Call the reset function after exit animations are complete
        resetBodyPointerEvents();
      }}
    >
      <Navbar key={`navbar-${router.asPath}`} />
      <Component {...pageProps} key={router.asPath} />
    </AnimatePresence>
  );
}
