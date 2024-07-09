import { Outlet } from "react-router-dom";
import { Navbar } from "../ui/Navbar";

export const MainLayout = () => {
  return (
    <div className=" mx-auto p-0">
      <Navbar />
      <div className=" mt-[65px]">
        <Outlet></Outlet>
      </div>
    </div>
  );
};
