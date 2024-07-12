type ErrorSectionProps = {
  msg: string;
};
export const ErrorSection = ({ msg }: ErrorSectionProps) => {
  return (
    <div className="flex flex-col items-center justify-center text-red-800 my-7">
      {msg}
    </div>
  );
};
