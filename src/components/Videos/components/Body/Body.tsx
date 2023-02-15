import React from "react";
import { useAppSelector } from "../../../../app/hooks";
import ClosedSidebar from "./Sidebar/ClosedSidebar";
import OpenedSidebar from "./Sidebar/OpenedSidebar";

const Body = () => {
  const isMenuOpen = useAppSelector((state) => state.sidebar.isOpen);

  return <>{isMenuOpen ? <OpenedSidebar /> : <ClosedSidebar />}</>;
};

export default Body;
