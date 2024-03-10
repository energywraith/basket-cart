"use client";

import { createActorContext } from "@xstate/react";
import { PropsWithChildren } from "react";
import { createMachine } from "xstate";
import { appMachineActions } from "./actions";
import { AppMachineContext, AppMachineActions } from "./types";

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
    },
    on: {
      ADD_PRODUCT: {
        actions: "addProduct",
      },
      DELETE_PRODUCT: {
        actions: "deleteProduct",
      },
    },
    states: {
      cart: {
        on: {
          NEXT_STEP: {
            target: "addressed",
            // TODO: Assign Address
          },
        },
      },
      addressed: {
        on: {
          NEXT_STEP: {
            target: "shipping.selected",
            // TODO: Assign Shipping Method
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
            // TODO: Assign Payment Method
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
      completed: {},
    },
  },
  {
    actions: appMachineActions,
  }
);

export const AppContext = createActorContext(appMachine);

export const AppMachineProvider = ({ children }: PropsWithChildren<{}>) => {
  return <AppContext.Provider>{children}</AppContext.Provider>;
};
