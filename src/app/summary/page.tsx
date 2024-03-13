"use client";

import { Card } from "@/components/common/Card";
import { AddressSummary } from "@/components/templates/AddressSummary";
import { CartItem } from "@/components/templates/CartItem";
import { CartSummary } from "@/components/templates/CartSummary";
import { OrderDetailsSummary } from "@/components/templates/OrderDetailsSummary";
import { useAppMachine } from "@/context/AppMachineContext";
import { onProcessComplete } from "../actions";
import { Button } from "@/components/common/Button";
import { useRouter } from "next/navigation";

// State = payment.selected | payment.skipped

export default function Summary() {
  const { state, states } = useAppMachine();
  const router = useRouter();

  const onProcessCompleteWithData = onProcessComplete.bind(null, state.context);

  const onCompleteOrder = async () => {
    const response = await onProcessCompleteWithData();

    if (response.success) {
      router.push("/completed");
      states.goNext();
    }
  };

  return (
    <>
      <section className="flex flex-col md:flex-row w-full gap-4">
        <section className="flex-grow flex flex-col gap-4">
          <Card>
            {state.context.products.length > 0 && (
              <ul className="flex flex-col gap-4">
                {state.context.products.map((product) => (
                  <CartItem key={product.id} {...product} />
                ))}
              </ul>
            )}
          </Card>
          <AddressSummary />
          <OrderDetailsSummary showPayment />
        </section>
        <section className="flex flex-col w-full md:max-w-sm gap-y-4">
          <CartSummary
            actions={
              <form action={onCompleteOrder} className="mt-2">
                <Button>Complete order</Button>
              </form>
            }
          />
        </section>
      </section>
    </>
  );
}
