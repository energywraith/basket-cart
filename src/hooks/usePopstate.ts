"use client";

import { routes } from "@/consts";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

interface UsePopStateProps {
  onBack: (from: keyof typeof routes, to: keyof typeof routes) => void;
  onForward: (from: keyof typeof routes, to: keyof typeof routes) => void;
}

const usePopstate = ({ onBack, onForward }: UsePopStateProps) => {
  const pathname = usePathname();
  const pathnameBeforePopstate = useRef(pathname);

  const pathnames = Object.keys(routes);

  useEffect(() => {
    const handlePopstate = () => {
      const from = pathnameBeforePopstate.current;
      const fromPageIndex = pathnames.indexOf(pathnameBeforePopstate.current);

      const to = location.pathname;
      const toPageIndex = pathnames.indexOf(location.pathname);

      const isForward = toPageIndex > fromPageIndex;

      if (isForward) {
        onForward(from, to);
        return;
      }

      onBack(from, to);
    };

    window.addEventListener("popstate", handlePopstate);

    return () => {
      window.removeEventListener("popstate", handlePopstate);
    };
  }, []);

  useEffect(() => {
    pathnameBeforePopstate.current = pathname;
  }, [pathname]);
};

export { usePopstate };
