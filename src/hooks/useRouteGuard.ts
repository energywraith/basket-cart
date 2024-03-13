import { routes } from "@/consts";
import { useAppMachine } from "@/context/AppMachineContext";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const useRouteGuard = () => {
  const [isLoading, setIsLoading] = useState(true);

  const { state, reset } = useAppMachine();
  const pathname = usePathname();

  const router = useRouter();

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
      reset();
      router.push("/");
      return;
    }

    setIsLoading(false);
  }, [pathname]);

  return { isLoading };
};

export { useRouteGuard };
