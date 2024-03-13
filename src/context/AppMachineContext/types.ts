export interface Product {
  id: string;
  name: string;
  price: number;
  delivery: boolean;
}

export interface Address {
  country: "usa" | "pl";
  street: string;
  city: string;
}

export type ShippingMethod = "DHLInternational" | "PP" | "USPS";

export type PaymentMethod = "creditCard" | "applePay" | "blik";

export interface AppMachineContext {
  products: Product[];
  address: Address | null;
  shippingMethod: ShippingMethod | null;
  paymentMethod: PaymentMethod | null;
}

export type AppMachineActions =
  | {
      type: "reset";
    }
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
    }
  | {
      type: "setShippingMethod";
      shippingMethod: ShippingMethod;
    }
  | {
      type: "setPaymentMethod";
      paymentMethod: PaymentMethod;
    };
