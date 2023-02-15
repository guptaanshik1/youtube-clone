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
      h={"auto"}
      overflowY={"scroll"}
      flexDir={"column"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <OpenedSidebarCommon iconNameMap={sidebarIconsNameMap} />
      <OpenedSidebarCommon iconNameMap={sidebarExploreIconsNameMap} />
      <OpenedSidebarCommon iconNameMap={moreFromYtIconNameMap} />
    </Flex>
  );
};

export default OpenedSidebar;
