import { Flex, Input } from "@chakra-ui/react";
import React from "react";
import { TfiSearch } from "react-icons/tfi";
import { MdOutlineMic } from "react-icons/md";

const SearchBar = () => {
  return (
    <>
      <Input
        w={"100%"}
        borderLeftRadius={"full"}
        border={"1px solid grey"}
        placeholder={"Search"}
        padding={"1em 1em"}
      />
      <Flex
        borderRightRadius={"full"}
        border={"1px solid grey"}
        w={"64px"}
        h={"40px"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <TfiSearch cursor={"pointer"} />
      </Flex>
      <Flex ml={"0.8em"} alignItems={"center"} justifyContent={"center"}>
        <MdOutlineMic size={"25px"} cursor={"pointer"} />
      </Flex>
    </>
  );
};

export default SearchBar;
