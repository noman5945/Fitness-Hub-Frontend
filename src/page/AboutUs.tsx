import { aboutUs } from "../constants/AboutUsInfos";

export const AboutUs = () => {
  return (
    <div className=" container h-screen">
      <div className=" flex flex-col my-[100px] items-center">
        <div className=" text-center font-bold">
          <h3 className=" text-2xl">Gymrat Nation</h3>
        </div>
        <div className=" text-base font-sans text-center w-[400px] md:w-[600px]">
          <p className=" text-sm">{aboutUs}</p>
        </div>
      </div>
      <div id="meet-team">
        <div className=" text-center font-bold ">
          <h3 className=" text-2xl">Meet the Team</h3>
        </div>
      </div>
    </div>
  );
};
