import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Text,
} from "@chakra-ui/react";
import {
  commonIconNameMap,
  moreFromYtIconNameMap,
  sidebarExploreIconsNameMap,
  sidebarIconsNameMap,
} from "../../../../../utils/sidebarIconsNameMap";
import { useVideosContext } from "../../../utils/context";
import Logo from "../../Logo";
import OpenedSidebarCommon from "./OpenedSidebarCommon";

const OpenedSidebar = () => {
  const { isDrawerOpen, onDrawerClose } = useVideosContext();

  return (
    <Drawer isOpen={isDrawerOpen} onClose={onDrawerClose} placement="left">
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader display={"flex"} alignItems={"center"}>
          <Logo />
        </DrawerHeader>
        <DrawerBody>
          <OpenedSidebarCommon iconNameMap={sidebarIconsNameMap} />
          <>
            <Text fontWeight={500}>Explore</Text>
            <OpenedSidebarCommon iconNameMap={sidebarExploreIconsNameMap} />
          </>
          <>
            <Text fontWeight={500}>More From YouTube</Text>
            <OpenedSidebarCommon iconNameMap={moreFromYtIconNameMap} />
          </>
          <OpenedSidebarCommon iconNameMap={commonIconNameMap} />
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default OpenedSidebar;
