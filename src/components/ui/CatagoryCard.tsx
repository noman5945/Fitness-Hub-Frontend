import { useNavigate } from "react-router-dom";
import defaultImg from "../../assets/Category/cardio-category.jpg";
import { setOptionalCategory } from "../../redux/features/product/categorySlice";
import { useAppDispatch } from "../../redux/hook";
import { Button } from "./Button";

type CatagoryProps = {
  title: string;
  img: string;
};
export const CatagoryCard = ({ title, img }: CatagoryProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const goToProduct = () => {
    dispatch(setOptionalCategory(title));
    navigate("/products");
  };
  return (
    <div className=" relative text-center ">
      <img
        className=" h-[350px] w-[300px] rounded-md"
        src={img ? img : defaultImg}
      />
      <div className=" absolute inset-0 bg-gray-900/50 bg-gradient-to-r hover:backdrop-blur-sm transition duration-150 ease-out hover:ease-in group flex flex-col items-center justify-center rounded-md">
        <h3 className=" text-white font-bold group-hover:text-2xl group-hover:ease-in transition duration-150 ease-out">
          {title ? title : "Title"}
        </h3>
        <div className="  justify-center opacity-0  group-hover:opacity-100 ">
          <Button
            onClickFunc={goToProduct}
            customStyle="block w-full rounded bg-blue-700 px-9 py-2 text-sm font-medium text-white shadow hover:bg-blue-800 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
            title="Explore"
          />
        </div>
      </div>
    </div>
  );
};
