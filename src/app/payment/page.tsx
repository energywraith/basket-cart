"use client";

import { Card } from "@/components/common/Card";
import { Link } from "@/components/common/Link";
import { AddressSummary } from "@/components/templates/AddressSummary";
import { CartSummary } from "@/components/templates/CartSummary";
import { PaymentCard } from "@/components/templates/PaymentCard";
import { PaymentForm } from "@/components/templates/PaymentForm";
import { OrderDetailsSummary } from "@/components/templates/OrderDetailsSummary";

import { useAppMachine } from "@/context/AppMachineContext";
import { PaymentMethod } from "@/context/AppMachineContext/types";
import { useState } from "react";

// State = shipping.selected | shipping.skipped

export default function Payment() {
  const { state, actor } = useAppMachine();

  const [showForm, setShowForm] = useState(false);

  const onSubmit = (paymentMethod: PaymentMethod) => {
    console.log(paymentMethod);

    actor.send({
      type: "SET_PAYMENT_METHOD",
      paymentMethod,
    });

    setShowForm(false);
  };

  const paymentMethod = state.context.paymentMethod;

  return (
    <>
      <h1 className="self-start text-2xl font-medium">Payment Methods</h1>
      <section className="flex flex-col md:flex-row w-full gap-4">
        <section className="flex-grow flex flex-col gap-4">
          {!paymentMethod || showForm ? (
            <>
              <Card className="flex flex-col gap-y-4">
                <Card.Header as="h2">Select Payment Method</Card.Header>
                <PaymentForm
                  onCancel={showForm ? () => setShowForm(false) : undefined}
                  onSubmit={onSubmit}
                />
              </Card>
              <Link variant="text" href="summary" className="self-center">
                Skip Payment Method
              </Link>
            </>
          ) : (
            <PaymentCard onChangeShipping={() => setShowForm(true)} />
          )}
        </section>
        <section className="flex flex-col w-full md:max-w-sm gap-y-4">
          <CartSummary
            proceedTo="summary"
            proceedText="Proceed to summary"
            isProceedDisabled={!paymentMethod}
            showCartItems
          />
          <AddressSummary />
          <OrderDetailsSummary />
        </section>
      </section>
    </>
  );
}
