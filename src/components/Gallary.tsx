import { GallaryPics } from "../constants/GallaryPics";

export const Gallary = () => {
  return (
    <div className=" mt-[120px] flex flex-col items-center rounded-lg p-2">
      <div className=" text-3xl text-center font-bold my-3 block">
        <h3>Gallary</h3>
        <p className=" text-lg font-normal">A sneak peek from our customers</p>
      </div>{" "}
      <div className=" columns-1 md:columns-2 lg:columns-3 ">
        {GallaryPics.map((pic) => {
          return (
            <img
              className=" w-[350px] rounded-lg m-2 aspect-auto"
              src={pic.path}
            />
          );
        })}
      </div>
    </div>
  );
};
