import { useGetLatestProductsQuery } from "../redux/features/product/productAPI";
import { TProduct } from "../types/product.type";
import { Button } from "./ui/Button";
import { ProductCard } from "./ui/ProductCard";

export const Featured = () => {
  const { data } = useGetLatestProductsQuery(undefined);

  return (
    <div className=" mt-[100px] flex flex-col justify-center items-center">
      <div className=" my-3 block text-center">
        <h3 className=" text-2xl font-bold">Featured Items</h3>
        <p className=" text-base my-2 ">Latest Additions</p>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        {data?.data.map((prod: TProduct) => {
          return (
            <ProductCard
              key={prod._id}
              name={prod.name}
              _id={prod._id}
              description={prod.description}
              price={prod.price}
              category={prod.category}
              img={prod.img}
              qty={prod.Qty}
            />
          );
        })}
      </div>
      <div className=" my-[50px]">
        <Button title="View More" />
      </div>
    </div>
  );
};
