import { Categories } from "../components/Categories";
import { Featured } from "../components/Featured";
import { Hero } from "../components/Hero";

export const Home = () => {
  return (
    <>
      <Hero />
      <Categories />
      <Featured />
    </>
  );
};
