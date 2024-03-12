"use client";

import { Card } from "@/components/common/Card";
import { Link } from "@/components/common/Link";
import { AddressSummary } from "@/components/templates/AddressSummary";
import { CartSummary } from "@/components/templates/CartSummary";
import { ShippingCard } from "@/components/templates/ShippingCard";
import { ShippingForm } from "@/components/templates/ShippingForm";
import { useAppMachine } from "@/context/AppMachineContext";
import { ShippingMethod } from "@/context/AppMachineContext/types";
import { useState } from "react";

// State = addressed

export default function Shipment() {
  const { state, actor, states } = useAppMachine();

  const [showForm, setShowForm] = useState(false);

  const onSkip = () => {
    actor.send({
      type: "SET_SHIPPING_METHOD",
      shipinngMethod: null,
    });

    states.skipStep();
  };

  const onSubmit = (shippingMethod: ShippingMethod) => {
    actor.send({
      type: "SET_SHIPPING_METHOD",
      shippingMethod,
    });

    setShowForm(false);
  };

  const shippingMethod = state.context.shippingMethod;

  return (
    <>
      <h1 className="self-start text-2xl font-medium">Shipping Methods</h1>
      <section className="flex flex-col md:flex-row w-full gap-4">
        <section className="flex-grow flex flex-col gap-4">
          {!shippingMethod || showForm ? (
            <>
              <Card className="flex flex-col gap-y-4">
                <Card.Header as="h2">Select Shipping Method</Card.Header>
                <ShippingForm
                  onCancel={showForm ? () => setShowForm(false) : undefined}
                  onSubmit={onSubmit}
                />
              </Card>
              <Link
                variant="text"
                href="payment"
                className="self-center"
                onClick={onSkip}
              >
                Skip Shipping Method
              </Link>
            </>
          ) : (
            <ShippingCard onChangeShipping={() => setShowForm(true)} />
          )}
        </section>
        <section className="flex flex-col w-full md:max-w-sm gap-y-4">
          <CartSummary
            proceedTo="payment"
            proceedText="Proceed to payment"
            isProceedDisabled={!shippingMethod}
            showCartItems
            changeStepOnProceed
          />
          <AddressSummary />
        </section>
      </section>
    </>
  );
}
