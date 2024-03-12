interface Route {
  label: string;
  states?: string[];
}

export interface Routes {
  [pathname: string]: Route;
}

export const routes: Routes = {
  "/": { label: "Basket", states: ["cart"] },
  "/address": { label: "Address", states: ["cart"] },
  "/shipment": {
    label: "Shipping",
    states: ["addressed"],
  },
  "/payment": {
    label: "Payment",
    states: ["shipping.selected", "shipping.skipped"],
  },
  "/summary": {
    label: "Summary",
    states: ["payment.selected", "payment.skipped"],
  },
  "/completed": { label: "Completed", states: ["completed"] },
};
