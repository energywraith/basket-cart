"use client";

import { usePathname } from "next/navigation";
import { CartStepper } from "@/components/templates/CartStepper";
import { routes } from "@/consts/routes";

const CartHeader = () => {
  const pathname = usePathname();

  return (
    <header className="bg-white">
      <nav className="mx-auto max-w-screen-xl p-6">
        <CartStepper steps={routes} activeStep={pathname} />
      </nav>
    </header>
  );
};

export { CartHeader };
