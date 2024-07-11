import exampleProduct from "../assets/Products/Dumbell.jpg";
import { Button } from "../components/ui/Button";
import { benefits } from "../constants/BenefitsParagraph";
export const ProductDetails = () => {
  return (
    <div className=" flex flex-col items-center mt-[100px]">
      <div className=" text-center my-[20px]">
        <h3 className=" font-bold text-lg md:text-2xl">Item Name</h3>
      </div>
      <div className=" flex flex-col lg:flex-row items-start justify-between">
        <div>
          <img
            className=" rounded-md w-[400px] h-[300px]"
            src={exampleProduct}
            alt="example"
          />
        </div>
        <div className=" lg:ps-10 flex flex-col items-start w-[400px] h-[400px]">
          <div className=" text-base block">
            <h3 className=" font-bold text-lg">Description</h3>
            <p>{benefits}</p>
          </div>
          <div className=" flex flex-col gap-2 my-[50px]">
            <p className=" font-bold text-lg">Category: Biceps</p>
            <p className=" font-bold text-lg">Price: 4000 BDT</p>
            <p className=" font-bold text-lg">Stock: 50 pcs</p>
          </div>
          <Button title="ADD TO CART"></Button>
        </div>
      </div>
    </div>
  );
};
