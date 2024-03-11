import { Card } from "@/components/common/Card";
import { Link } from "@/components/common/Link";
import { useAppMachine } from "@/context/AppMachineContext";
import { formatPrice } from "@/utils/formatters";

const CartSummary = () => {
  const { state } = useAppMachine();

  return (
    <Card
      as="aside"
      className="h-fit flex flex-col justify-center w-full max-w-sm gap-y-4 relative"
    >
      <Card.Header as="h3">Summary</Card.Header>
      <h4 className="flex items-end justify-between text-sm">
        Total price
        <span className="text-2xl font-medium">
          {formatPrice(
            state.context.products.reduce(
              (acc, product) => acc + product.price,
              0
            )
          )}
        </span>
      </h4>
      <Link
        href="/address"
        className="mt-2"
        disabled={state.context.products.length === 0}
      >
        Proceed to checkout
      </Link>
    </Card>
  );
};

export { CartSummary };
