import exampleProduct from "../assets/Products/Dumbell.jpg";
import { Button } from "../components/ui/Button";
import { Loader } from "../components/ui/Loader";
import { benefits } from "../constants/BenefitsParagraph";
import { useGetSingleProductbyIDQuery } from "../redux/features/product/productAPI";
import { useAppSelector } from "../redux/hook";
import { TProduct } from "../types/product.type";
export const ProductDetails = () => {
  const { _id } = useAppSelector((state) => state.product);
  let product = {};
  let errors;
  let loading;
  if (_id) {
    const { data, isLoading, isError } = useGetSingleProductbyIDQuery(_id);
    product = data?.data || {};
    loading = isLoading;
    errors = isError;
  }

  if (loading) {
    return <Loader />;
  }
  const Product: TProduct = { ...product };
  return (
    <div className=" flex flex-col items-center mt-[100px]">
      <div className=" text-center my-[20px]">
        <h3 className=" font-bold text-lg md:text-2xl">
          {Product ? Product.name : "Item Name"}
        </h3>
      </div>
      <div className=" flex flex-col lg:flex-row items-start justify-between">
        <div>
          <img
            className=" rounded-md w-[400px] h-[300px]"
            src={Product ? Product.img : exampleProduct}
            alt="example"
          />
        </div>
        <div className=" lg:ps-10 flex flex-col items-start w-[400px] h-[400px]">
          <div className=" text-base block">
            <h3 className=" font-bold text-lg">Description</h3>
            <p>{Product ? Product.description : benefits}</p>
          </div>
          <div className=" flex flex-col gap-2 my-[50px]">
            <p className=" font-bold text-lg">
              Category: {Product ? Product.category : "Biceps"}
            </p>
            <p className=" font-bold text-lg">
              Price: {Product ? Product.price : "Price"} BDT
            </p>
            <p className=" font-bold text-lg">
              Stock: {Product ? Product.Qty : "stock_number"} pcs
            </p>
          </div>
          <Button title="ADD TO CART"></Button>
        </div>
      </div>
    </div>
  );
};
