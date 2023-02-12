import { Image } from "@chakra-ui/react";
import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const Logo = () => {
  return (
    <>
      <RxHamburgerMenu size={"25px"} />
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
