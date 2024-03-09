import { CartStepperItem } from "./CartStepperItem";

interface CartStepperProps {
  activeStep: string;
  steps: Record<string, string>;
  onCompletedClick: (key: string) => void;
}

const CartStepper = ({
  activeStep,
  steps,
  onCompletedClick,
}: CartStepperProps) => {
  const stepKeys = Object.keys(steps);

  return (
    <ol className="flex justify-center gap-x-2 items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base">
      {stepKeys.map((step, index) => {
        const isCompleted = index < stepKeys.indexOf(activeStep);

        return (
          <CartStepperItem
            key={index}
            step={steps[step]}
            index={index}
            isActive={index === stepKeys.indexOf(activeStep)}
            isLast={index === Object.keys(steps).length - 1}
            isCompleted={isCompleted}
            onClick={isCompleted ? () => onCompletedClick(step) : undefined}
          />
        );
      })}
    </ol>
  );
};

export { CartStepper };
