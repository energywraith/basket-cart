import { Card } from "@/components/common/Card";
import { Link } from "@/components/common/Link";
import { useAppMachine } from "@/context/AppMachineContext";
import { formatPrice } from "@/utils/formatters";
import { ReactNode } from "react";

interface CartSummaryProps {
  showCartItems?: boolean;
  proceedTo?: string;
  proceedText?: string;
  isProceedDisabled?: boolean;
  changeStepOnProceed?: boolean;
  actions?: ReactNode;
}

const CartSummary = ({
  showCartItems,
  proceedTo,
  proceedText,
  isProceedDisabled,
  changeStepOnProceed,
  actions,
}: CartSummaryProps) => {
  const { state, states } = useAppMachine();

  return (
    <Card
      as="aside"
      className="h-fit flex flex-col justify-center w-full gap-y-4"
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
      {proceedTo && (
        <Link
          href={proceedTo}
          className="mt-2"
          disabled={isProceedDisabled}
          onClick={changeStepOnProceed ? states.goNext : undefined}
        >
          {proceedText}
        </Link>
      )}
      {actions}
    </Card>
  );
};

export { CartSummary };
