export interface Product {
  id: string;
  name: string;
  price: number;
}

export interface AppMachineContext {
  products: Product[];
}

export type AppMachineActions =
  | {
      type: "addProduct";
      product: Product;
    }
  | {
      type: "deleteProduct";
      productId: string;
    };
