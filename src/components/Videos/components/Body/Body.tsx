import { Flex } from "@chakra-ui/react";
import { useAppSelector } from "../../../../app/hooks";
import ClosedSidebar from "./Sidebar/ClosedSidebar";
import OpenedSidebar from "./Sidebar/OpenedSidebar";
import VideoContainer from "./VideoCard/VideoContainer";

const Body = () => {
  const isMenuOpen = useAppSelector((state) => state.sidebar.isOpen);

  return (
    <Flex w={"100%"}>
      {isMenuOpen ? <OpenedSidebar /> : <ClosedSidebar />}
      <VideoContainer />
    </Flex>
  );
};

export default Body;
