"use client";

import { routes } from "@/consts";
import { useAppMachine } from "@/context/AppMachineContext";
import { usePopstate } from "@/hooks/usePopstate";
import { useRouteGuard } from "@/hooks/useRouteGuard";
import { ReactNode } from "react";

const RouteGuardProvider = ({ children }: { children: ReactNode }) => {
  const { states } = useAppMachine();
  const { isLoading } = useRouteGuard();

  const shouldStateChange = (
    from: keyof typeof routes,
    to: keyof typeof routes
  ) => {
    return !!routes[from].states?.some((r) => routes[to].states?.includes(r));
  };

  usePopstate({
    onBack: (from, to) => {
      if (shouldStateChange(from, to)) return;
      states.goBack();
    },
    onForward: (from, to) => {
      if (shouldStateChange(from, to)) return;
      states.goNext();
    },
  });

  if (isLoading) {
    return null;
  }

  return children;
};

export { RouteGuardProvider };
