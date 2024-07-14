import { StatusCard } from "../components/ui/StatusCard";

export const CheckoutError = () => {
  return (
    <div className=" flex justify-center items-center">
      <StatusCard
        status="Error"
        message="Error occured while payment.Payment Not complete!"
      />
    </div>
  );
};
