type ButtonProps = {
  title: string;
  onClickFunc?: () => void;
  customStyle?: string;
  disablity?: boolean;
};
export const Button = ({
  title,
  customStyle,
  onClickFunc,
  disablity,
}: ButtonProps) => {
  const defaultStyle: string =
    "block w-full rounded bg-blue-700 px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-800 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto";
  return (
    <button
      onClick={onClickFunc ? onClickFunc : () => {}}
      className={customStyle ? customStyle : defaultStyle}
      disabled={disablity ? disablity : false}
    >
      <h3>{title}</h3>
    </button>
  );
};
