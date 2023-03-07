import { Flex, useDisclosure } from "@chakra-ui/react";
import { useAppSelector } from "../../../../app/hooks";
import ClosedSidebar from "./Sidebar/ClosedSidebar";
import OpenedSidebar from "./Sidebar/OpenedSidebar";
import TopButtons from "./TopButtons/TopButtons";
import VideoContainer from "./VideoCard/VideoContainer";

const Body = () => {
  const isMenuOpen = useAppSelector((state) => state.sidebar.isOpen);

  return (
    <Flex w={"100%"} border={"1px solid red"} flexDir={"column"}>
      {isMenuOpen ? <OpenedSidebar /> : <ClosedSidebar />}
      <TopButtons />
      <VideoContainer />
    </Flex>
  );
};

export default Body;
