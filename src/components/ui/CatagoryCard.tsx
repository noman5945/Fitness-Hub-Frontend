import defaultImg from "../../assets/Category/cardio-category.jpg";
import { Button } from "./Button";
export const CatagoryCard = () => {
  return (
    <div className=" relative text-center ">
      <img className=" h-[350px] w-[300px] rounded-md" src={defaultImg} />
      <div className=" absolute inset-0 bg-gray-900/50 bg-gradient-to-r hover:backdrop-blur-sm transition duration-150 ease-out hover:ease-in group flex flex-col items-center justify-center rounded-md">
        <h3 className=" text-white font-bold group-hover:text-2xl group-hover:ease-in transition duration-150 ease-out">
          Cardio
        </h3>
        <div className="  justify-center opacity-0  group-hover:opacity-100 ">
          <Button title="Explore" />
        </div>
      </div>
    </div>
  );
};
