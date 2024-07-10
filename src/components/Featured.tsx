import { Button } from "./ui/Button";
import { ProductCard } from "./ui/ProductCard";

export const Featured = () => {
  return (
    <div className=" mt-[100px] flex flex-col justify-center items-center">
      <div className=" text-2xl font-bold my-3">
        <h3>Featured Items</h3>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        <ProductCard name="Dumbell" category="Biceps" price={400} qty={50} />
        <ProductCard name="Dumbell" category="Biceps" price={400} qty={50} />
        <ProductCard name="Dumbell" category="Biceps" price={400} qty={50} />
        <ProductCard name="Dumbell" category="Biceps" price={400} qty={50} />
      </div>
      <div className=" my-[50px]">
        <Button title="View More" />
      </div>
    </div>
  );
};
