"use client";

import { createActorContext } from "@xstate/react";
import { PropsWithChildren } from "react";
import { and, createMachine } from "xstate";
import { appMachineActions } from "./actions";
import { AppMachineContext, AppMachineActions } from "./types";

export const initialContext = {
  products: [],
  address: null,
  shippingMethod: null,
  paymentMethod: null,
};

export const appMachine = createMachine(
  {
    id: "app",
    initial: "cart",
    types: {
      context: {} as AppMachineContext,
      actions: {} as AppMachineActions,
    },
    context: {
      products: [],
      address: null,
      shippingMethod: null,
      paymentMethod: null,
    },
    on: {
      ADD_PRODUCT: {
        actions: "addProduct",
      },
      DELETE_PRODUCT: {
        actions: "deleteProduct",
      },
      SET_ADDRESS: {
        actions: "setAddress",
      },
      SET_SHIPPING_METHOD: {
        actions: "setShippingMethod",
      },
      SET_PAYMENT_METHOD: {
        actions: "setPaymentMethod",
      },
      RESET: {
        target: ".cart",
        actions: "reset",
      },
    },
    states: {
      cart: {
        on: {
          NEXT_STEP: {
            target: "addressed",
            guard: and(["isAddressValid", "hasProducts"]),
          },
        },
      },
      addressed: {
        on: {
          NEXT_STEP: {
            target: "shipping.selected",
          },
          SKIP_STEP: {
            target: "shipping.skipped",
          },
          PREVIOUS_STEP: {
            target: "cart",
          },
        },
      },
      shipping: {
        initial: "skipped",
        states: {
          selected: {},
          skipped: {},
          hist: {
            type: "history",
          },
        },
        on: {
          NEXT_STEP: {
            target: "payment.selected",
          },
          SKIP_STEP: {
            target: "payment.skipped",
          },
          PREVIOUS_STEP: {
            target: "addressed",
          },
        },
      },
      payment: {
        initial: "skipped",
        states: {
          selected: {},
          skipped: {},
        },
        on: {
          NEXT_STEP: {
            target: "completed",
          },
          PREVIOUS_STEP: {
            target: "shipping.hist",
          },
        },
      },
      completed: {
        type: "final",
      },
    },
  },
  {
    actions: appMachineActions,
    guards: {
      isAddressValid: ({ context }) => {
        return !!context.address;
      },
      hasProducts: ({ context }) => {
        return context.products.length > 0;
      },
    },
  }
);

export const AppContext = createActorContext(appMachine);

export const AppMachineProvider = ({ children }: PropsWithChildren<{}>) => {
  return <AppContext.Provider>{children}</AppContext.Provider>;
};
