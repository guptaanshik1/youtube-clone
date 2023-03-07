import { Flex } from "@chakra-ui/react";
import React from "react";

interface IProps {
  button: string;
}

const SingleButton = ({ button }: IProps) => {
  return (
    <Flex
      backgroundColor={"gray.200"}
      padding={"8px 12px"}
      rounded={"md"}
      w={"auto"}
      alignItems={"center"}
      border={"1px solid green"}
      minWidth={"fit-content"}
      fontWeight={500}
    >
      {button}
    </Flex>
  );
};

export default SingleButton;
