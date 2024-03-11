import { Card } from "@/components/common/Card";
import { Link } from "@/components/common/Link";
import { useAppMachine } from "@/context/AppMachineContext";
import { formatPrice } from "@/utils/formatters";

interface CartSummaryProps {
  showCartItems?: boolean;
  proceedTo: string;
  proceedText: string;
  isProceedDisabled?: boolean;
}

const CartSummary = ({
  showCartItems,
  proceedTo,
  proceedText,
  isProceedDisabled,
}: CartSummaryProps) => {
  const { state } = useAppMachine();

  return (
    <Card
      as="aside"
      className="h-fit flex flex-col justify-center w-full md:max-w-sm gap-y-4 relative"
    >
      <Card.Header as="h3">Summary</Card.Header>
      {showCartItems && (
        <>
          <ul>
            {state.context.products.map((product) => (
              <li key={product.id} className="flex justify-between">
                {product.name}
                <span>{formatPrice(product.price)}</span>
              </li>
            ))}
          </ul>
          <hr />
        </>
      )}
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
      <Link href={proceedTo} className="mt-2" disabled={isProceedDisabled}>
        {proceedText}
      </Link>
    </Card>
  );
};

export { CartSummary };
