import { Flex, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import UserHeader from "./UserHeader";

const Header = () => {
  return (
    <SimpleGrid
      columns={3}
      justifyContent={"space-between"}
      backgroundColor={"#FFFFFF"}
      w={"100%"}
      h={"56px"}
      p={"0 16px"}
      alignItems={"center"}
      position={"sticky"}
      top={0}
    >
      <Flex
        justifyContent={"flex-start"}
        alignItems={"center"}
        flexDir={"row"}
        ml={"1em"}
      >
        <Logo />
      </Flex>
      <Flex>
        <SearchBar />
      </Flex>
      <Flex justifyContent={"flex-end"}>
        <UserHeader />
      </Flex>
    </SimpleGrid>
  );
};

export default Header;
