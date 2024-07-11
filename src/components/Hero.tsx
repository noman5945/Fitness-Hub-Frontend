import { NavLink } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="relative bg-hero-pattern bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-gray-900/75 bg-gradient-to-r sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:justify-center lg:px-8">
        <div className="max-w-xl text-center ">
          <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
            Let us find your
            <strong className="block font-extrabold text-blue-700">
              {" "}
              Gym Tools.{" "}
            </strong>
          </h1>

          <p className="mt-4 max-w-lg text-white sm:text-xl/relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            illo tenetur fuga ducimus numquam ea!
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center justify-center">
            <NavLink
              to={"/products"}
              className="block w-full rounded bg-blue-700 px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-800 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
            >
              Explore Products
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};
