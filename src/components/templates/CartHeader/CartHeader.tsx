"use client";

import { usePathname, useRouter } from "next/navigation";
import { CartStepper } from "@/components/templates/CartStepper";

const steps = {
  "/": "Basket",
  "/address": "Address",
  "/shipment": "Shipping",
  "/payment": "Payment",
  "/summary": "Summary",
  "/completed": "Completed",
};

const CartHeader = () => {
  const router = useRouter();
  const pathname = usePathname();

  const onCompletedStepClick = (pathname: string) => {
    router.push(pathname);
  };

  return (
    <header className="bg-white">
      <nav className="mx-auto max-w-screen-xl p-6">
        <CartStepper
          steps={steps}
          activeStep={pathname}
          onCompletedClick={onCompletedStepClick}
        />
      </nav>
    </header>
  );
};

export { CartHeader };
