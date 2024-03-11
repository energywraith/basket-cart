export interface Product {
  id: string;
  name: string;
  price: number;
  delivery: boolean;
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
