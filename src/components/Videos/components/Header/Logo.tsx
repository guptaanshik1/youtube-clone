import { IconButton, Image } from "@chakra-ui/react";
import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { useAppDispatch } from "../../../../app/hooks";
import { toggleSidebar } from "../../../../features/sidebarSlice";

const Logo = () => {
  const dispatch = useAppDispatch();

  const handleToggleSidebar = () => {
    dispatch(toggleSidebar());
  };

  return (
    <>
      <IconButton
        icon={<RxHamburgerMenu size={"25px"} cursor={"pointer"} />}
        aria-label={"Open drawer"}
        background={"transparent"}
        _hover={{
          backgroundColor: "lightgrey",
          cursor: "pointer",
          rounded: "full",
        }}
        _focus={{ outline: "none" }}
        onClick={handleToggleSidebar}
      />
      <Image
        src={
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
        }
        alt="logo"
        w={"90px"}
        h={"20px"}
        ml={"1em"}
      />
    </>
  );
};

export default Logo;
