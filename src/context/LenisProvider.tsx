import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import Lenis from "lenis";

const LenisContext = createContext<Lenis | null>(null);

export const LenisProvider = ({ children }: { children: React.ReactNode }) => {
  const [lenisInstance, setLenisInstance] = useState<Lenis | null>(null);
  const rafId = useRef<number | undefined>(undefined);

  useEffect(() => {
    // Only create Lenis on the client side
    if (typeof window !== "undefined") {
      const lenis = new Lenis({
        autoRaf: true,
      });

      setLenisInstance(lenis);

      const raf = (time: number) => {
        lenis.raf(time);
        rafId.current = requestAnimationFrame(raf);
      };
      rafId.current = requestAnimationFrame(raf);

      return () => {
        if (rafId.current) {
          cancelAnimationFrame(rafId.current);
        }
        lenis.destroy();
        setLenisInstance(null);
      };
    }
  }, []);

  return (
    <LenisContext.Provider value={lenisInstance}>
      {children}
    </LenisContext.Provider>
  );
};

export const useLenis = () => {
  const context = useContext(LenisContext);
  return context; // Return null if not available (during SSR)
};
