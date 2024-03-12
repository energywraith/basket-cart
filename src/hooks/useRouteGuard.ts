import { routes } from "@/consts";
import { useAppMachine } from "@/context/AppMachineContext";
import { redirect, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const useRouteGuard = () => {
  const [isLoading, setIsLoading] = useState(true);

  const { state } = useAppMachine();
  const pathname = usePathname();

  useEffect(() => {
    const routeStates = routes[pathname as keyof typeof routes]?.states;

    // If route is not guarded
    if (!routeStates) {
      setIsLoading(false);
      return;
    }

    const isValidState = routeStates.find((routeState) =>
      state.matches(routeState)
    );

    if (!isValidState) {
      redirect("/");
    }

    setIsLoading(false);
  }, [pathname]);

  return { isLoading };
};

export { useRouteGuard };
