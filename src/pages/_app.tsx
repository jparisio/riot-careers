import { useEffect } from "react";
import { LenisProvider } from "@/context/LenisProvider";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import { AnimatePresence, motion } from "framer-motion";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useResetOnMount } from "@/hooks/useResetOnMount";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.history.scrollRestoration = "manual";
    }

    // // Initialize Lenis
    // const lenis = new Lenis({
    //   autoRaf: true,
    // });

    // // console.log("Current scroll position:", window.scrollY);

    // return () => {
    //   lenis.destroy();
    // };
  }, []);

  const resetBodyPointerEvents = useResetOnMount(router.asPath);

  return (
    <LenisProvider>
      <AnimatePresence
        mode="wait"
        onExitComplete={() => {
          // Call the reset function after exit animations are complete
          resetBodyPointerEvents();
          window.scrollTo(0, 0);
        }}
      >
        <motion.div key={router.asPath}>
          <Navbar />

          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </LenisProvider>
  );
}
