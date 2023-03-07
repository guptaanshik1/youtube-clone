import { Flex } from "@chakra-ui/react";
import React from "react";
import { buttonNames } from "../../../../../utils/aboveButtonsName";
import SingleButton from "./SingleButton";

const TopButtons = () => {
  return (
    <Flex
      border={"1px solid blue"}
      ml={"80px"}
      justifyContent={"flex-start"}
      alignItems={"center"}
      gap={"10px"}
      w={"100%"}
      h={"40px"}
    >
      {buttonNames.map((button) => (
        <SingleButton button={button} />
      ))}
    </Flex>
  );
};

export default TopButtons;
