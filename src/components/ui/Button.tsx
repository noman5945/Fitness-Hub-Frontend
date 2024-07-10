type ButtonProps = {
  title: string;
  onClickFunc?: () => void;
};
export const Button = ({ title }: ButtonProps) => {
  return (
    <button className="block w-full rounded bg-blue-700 px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-800 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto">
      <h3>{title}</h3>
    </button>
  );
};
