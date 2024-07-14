import { StatusCard } from "../components/ui/StatusCard";

export const CheckoutSuccess = () => {
  return (
    <div className=" mt-20 flex h-max items-center justify-center">
      <StatusCard status="Success" message="Successfully completed payment" />
    </div>
  );
};
