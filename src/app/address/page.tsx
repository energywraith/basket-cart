"use client";

import { Card } from "@/components/common/Card";
import { AddressCard } from "@/components/templates/AddressCard";
import { AddressForm } from "@/components/templates/AddressForm";
import { CartSummary } from "@/components/templates/CartSummary";
import { useAppMachine } from "@/context/AppMachineContext";
import { Address } from "@/context/AppMachineContext/types";
import { useState } from "react";

// State = cart, check if products.length > 0

export default function Address() {
  const { actor, state } = useAppMachine();

  const [showForm, setShowForm] = useState(false);

  const onFillAddress = (address: Address) => {
    actor.send({
      type: "SET_ADDRESS",
      address,
    });

    setShowForm(false);
  };

  const address = state.context.address;

  return (
    <>
      <h1 className="self-start text-2xl font-medium">Your Address</h1>
      <section className="flex flex-col md:flex-row w-full gap-4">
        <section className="flex-grow flex flex-col gap-4">
          {!address || showForm ? (
            <Card className="flex flex-col gap-y-4">
              <Card.Header as="h2">
                {(!address || showForm) && "Fill "}Address Details
              </Card.Header>
              <AddressForm
                onCancel={showForm ? () => setShowForm(false) : undefined}
                onSubmit={onFillAddress}
              />
            </Card>
          ) : (
            <AddressCard onChangeAddress={() => setShowForm(true)} />
          )}
        </section>
        <CartSummary
          proceedTo="shipment"
          proceedText="Proceed to shipping"
          isProceedDisabled={!address || showForm}
          showCartItems
        />
      </section>
    </>
  );
}
