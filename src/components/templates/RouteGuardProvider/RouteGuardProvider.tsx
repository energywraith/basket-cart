"use client";

import { useRouteGuard } from "@/hooks/useRouteGuard";
import { ReactNode } from "react";

const RouteGuardProvider = ({ children }: { children: ReactNode }) => {
  const { isLoading } = useRouteGuard();

  if (isLoading) {
    return null;
  }

  return children;
};

export { RouteGuardProvider };
