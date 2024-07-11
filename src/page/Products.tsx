import { Button } from "../components/ui/Button";
import { ProductCard } from "../components/ui/ProductCard";
import { SearchBar } from "../components/ui/SearchBar";
import { SearchCategory } from "../components/ui/SearchCategory";

export const Products = () => {
  return (
    <div className=" flex flex-col items-center justify-center">
      <div className=" text-center block ">
        <h3 className=" text-lg md:text-2xl font-bold  mt-[20px]">Products</h3>
      </div>
      <div className=" flex flex-row mt-[10px] w-full justify-center items-center gap-2">
        <SearchBar />
        <SearchCategory />
        <Button title="Search" />
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mt-[100px]">
        <ProductCard name="Dumbell" category="Biceps" price={400} qty={50} />
        <ProductCard name="Dumbell" category="Biceps" price={400} qty={50} />
        <ProductCard name="Dumbell" category="Biceps" price={400} qty={50} />
        <ProductCard name="Dumbell" category="Biceps" price={400} qty={50} />
      </div>
    </div>
  );
};
