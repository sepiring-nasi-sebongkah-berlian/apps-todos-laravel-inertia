import { PropsWithChildren } from "react";

import CustomNavBar from "./NavBar";
import CustomSideBar from "./SideBar";

const CustomDrawer = ({ children }: PropsWithChildren) => {
  return (
    <div className="drawer transition-all duration-500">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <CustomNavBar />

        {/* Page content here */}
        {children}
      </div>

      <CustomSideBar />
    </div>
  );
};

export default CustomDrawer;
