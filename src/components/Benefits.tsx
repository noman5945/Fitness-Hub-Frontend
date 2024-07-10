import { benefits } from "../constants/BenefitsParagraph";

export const Benefits = () => {
  return (
    <div className=" relative h-[650px] bg-benefits-section-bg bg-cover bg-no-repeat bg-center mt-[90px]">
      <div className="absolute inset-0 bg-gray-900/75 bg-gradient-to-r sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>
      <div className=" relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:justify-center lg:px-8">
        <div className=" flex flex-col flex-1 justify-center items-center">
          <h2 className="text-3xl font-extrabold text-blue-500 sm:text-5xl">
            Level Up your Strength
          </h2>
          <p className="mt-4 max-w-lg text-white lg:text-base sm:text-xl/relaxed">
            {benefits}
          </p>
        </div>
      </div>
    </div>
  );
};
