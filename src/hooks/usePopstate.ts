"use client";

import { routes } from "@/consts";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

interface UsePopStateProps {
  onBack: () => void;
  onForward: () => void;
}

const usePopstate = ({ onBack, onForward }: UsePopStateProps) => {
  const pathname = usePathname();
  const pathnameBeforePopstate = useRef(pathname);

  const pathnames = Object.keys(routes);

  useEffect(() => {
    const handlePopstate = () => {
      console.log(window.history);

      const newPageIndex = pathnames.indexOf(location.pathname);
      const oldPageIndex = pathnames.indexOf(pathnameBeforePopstate.current);

      const isForward = newPageIndex > oldPageIndex;

      if (isForward) {
        onForward();
        return;
      }

      onBack();
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
