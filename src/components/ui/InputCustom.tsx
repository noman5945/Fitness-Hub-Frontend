type InputCustomProps = {
  inputType: string;
  placeHolder: string;
  HtmlFor?: string;
};
export const InputCustom = ({
  inputType,
  placeHolder,
  HtmlFor,
}: InputCustomProps) => {
  return (
    <div>
      <label
        htmlFor={HtmlFor ? HtmlFor : "input"}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {placeHolder ? placeHolder : "Input"}
      </label>
      <input
        type={inputType}
        id="last_name"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Doe"
        required
      />
    </div>
  );
};
