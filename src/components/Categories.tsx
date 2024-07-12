import { categoriesList } from "../constants/Categories";
import { CatagoryCard } from "./ui/CatagoryCard";

export const Categories = () => {
  const categories = categoriesList;
  return (
    <div className=" flex flex-col justify-center items-center mt-[100px]">
      <div className=" text-2xl font-bold text-center p-3">
        <h2>Categories</h2>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        {categories.map((category, index) => {
          return (
            <CatagoryCard
              key={index}
              img={category.img}
              title={category.name}
            />
          );
        })}
      </div>
    </div>
  );
};
