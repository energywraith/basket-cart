export interface Product {
  id: string;
  name: string;
  price: number;
  delivery: boolean;
}

export interface Address {
  country: string;
  street: string;
  city: string;
}

export interface AppMachineContext {
  products: Product[];
  address: Address | null;
}

export type AppMachineActions =
  | {
      type: "addProduct";
      product: Product;
    }
  | {
      type: "deleteProduct";
      productId: string;
    }
  | {
      type: "setAddress";
      address: Address;
    };
