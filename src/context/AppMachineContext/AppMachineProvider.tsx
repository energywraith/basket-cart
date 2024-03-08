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
      PROCEED_TO_ADDRESSED: {
        target: ".addressed",
      },
    },
    states: {
      cart: {},
      addressed: {},
      shippingSelected: {},
      shippingSkipped: {},
      paymentSelected: {},
      paymentSkipped: {},
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
