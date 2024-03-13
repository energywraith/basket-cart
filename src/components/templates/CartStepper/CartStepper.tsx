import { Routes } from "@/consts";
import { CartStepperItem } from "./CartStepperItem";

interface CartStepperProps {
  activeStep: string;
  steps: Routes;
}

const CartStepper = ({ activeStep, steps }: CartStepperProps) => {
  const stepKeys = Object.keys(steps);

  return (
    <ol className="flex justify-center gap-x-2 items-center w-full text-xs font-medium text-center text-gray-500 md:text-base">
      {stepKeys.map((step, index) => {
        const isCompleted = index < stepKeys.indexOf(activeStep);

        return (
          <CartStepperItem
            key={index}
            step={steps[step].label}
            index={index}
            isActive={index === stepKeys.indexOf(activeStep)}
            isLast={index === Object.keys(steps).length - 1}
            isCompleted={isCompleted}
          />
        );
      })}
    </ol>
  );
};

export { CartStepper };
