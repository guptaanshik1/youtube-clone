import { Divider, Flex, Text } from "@chakra-ui/react";
import {
  moreFromYtIconNameMap,
  sidebarExploreIconsNameMap,
  sidebarIconsNameMap,
} from "../../../../../utils/sidebarIconsNameMap";
import Icon from "../../../../Icon";
import OpenedSidebarCommon from "./OpenedSidebarCommon";

const OpenedSidebar = () => {
  return (
    <Flex
      w={"200px"}
      h={"100"}
      overflowY={"scroll"}
      flexDir={"column"}
      justifyContent={"space-between"}
      alignItems={"center"}
      position={"absolute"}
      zIndex={100}
      backgroundColor={"#FFFFFF"}
    >
      <OpenedSidebarCommon iconNameMap={sidebarIconsNameMap} />
      <OpenedSidebarCommon iconNameMap={sidebarExploreIconsNameMap} />
      <OpenedSidebarCommon iconNameMap={moreFromYtIconNameMap} />
    </Flex>
  );
};

export default OpenedSidebar;
