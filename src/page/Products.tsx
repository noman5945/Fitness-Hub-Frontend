import { ErrorSection } from "../components/ErrorSection";
import { Button } from "../components/ui/Button";
import { Loader } from "../components/ui/Loader";
import { ProductCard } from "../components/ui/ProductCard";
import { SearchBar } from "../components/ui/SearchBar";
import { SearchCategory } from "../components/ui/SearchCategory";
import { useGetAllProductsQuery } from "../redux/features/product/productAPI";
import { TProduct } from "../types/product.type";

export const Products = () => {
  const {
    data: products,
    error,
    isLoading,
  } = useGetAllProductsQuery(undefined);
  if (error) {
    let errorMsg = "";
    if ("status" in error) {
      // It's a FetchBaseQueryError
      errorMsg = `Error ${error.status}: ${error.data}`;
    } else {
      // It's a SerializedError
      errorMsg = "something gone wrong while fetching!";
    }

    return <ErrorSection msg={errorMsg} />;
  }

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
        {isLoading ? (
          <Loader />
        ) : (
          products.data.map((product: TProduct) => {
            return (
              <ProductCard
                key={product._id}
                name={product.name}
                category={product.catagory}
                price={product.price}
                qty={product.Qty}
                img={product.img}
                _id={product._id}
              />
            );
          })
        )}
      </div>
    </div>
  );
};
