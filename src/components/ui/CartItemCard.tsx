export const CartItemCard = () => {
  return (
    <div className=" flex flex-row gap-2 h-fit border shadow-md rounded-md p-5">
      <div className=" mr-4 md:mr-56">
        <p>SL</p>
      </div>
      <div className=" mr-[100px] md:mr-[500px]">
        <p>Name</p>
      </div>
      <div className=" mr-[100px] md:mr-[500px]">
        <p>Qty</p>
      </div>
      <div className=" mr-4 md:mr-56">
        <p>price</p>
      </div>
    </div>
  );
};
