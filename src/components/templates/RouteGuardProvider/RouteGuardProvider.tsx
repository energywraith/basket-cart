"use client";

import { useAppMachine } from "@/context/AppMachineContext";
import { usePopstate } from "@/hooks/usePopstate";
import { useRouteGuard } from "@/hooks/useRouteGuard";
import { ReactNode } from "react";

const RouteGuardProvider = ({ children }: { children: ReactNode }) => {
  const { states } = useAppMachine();
  const { isLoading } = useRouteGuard();

  usePopstate({ onBack: states.goBack, onForward: states.goNext });

  if (isLoading) {
    return null;
  }

  return children;
};

export { RouteGuardProvider };
