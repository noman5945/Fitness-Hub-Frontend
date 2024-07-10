import { Benefits } from "../components/Benefits";
import { Categories } from "../components/Categories";
import { Featured } from "../components/Featured";
import { Gallary } from "../components/Gallary";
import { Hero } from "../components/Hero";

export const Home = () => {
  return (
    <>
      <Hero />
      <Categories />
      <Featured />
      <Benefits />
      <Gallary />
    </>
  );
};
