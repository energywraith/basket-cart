export interface AppMachineContext {
  products: string[];
}

export interface AppMachineActions {
  type: "addProduct";
  product: string;
}
