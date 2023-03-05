import { Flex, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { useVideosContext } from "../../utils/context";
import Logo from "../Logo";
import SearchBar from "./HeaderParts/SearchBar";
import SearchSuggestions from "./HeaderParts/SearchSuggestions";
import UserHeader from "./HeaderParts/UserHeader";

const Header = () => {
  const { searchQuery } = useVideosContext();
  const [showSuggestions, setShowSuggestions] = React.useState(false);
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
      <Flex position={"relative"}>
        <SearchBar />
        {searchQuery.length > 0 && (
          <Flex
            mt={"50px"}
            position={"absolute"}
            width={"80%"}
            h={"100px"}
            backgroundColor={"#000000"}
            borderRadius={"12px"}
          >
            <SearchSuggestions />
          </Flex>
        )}
      </Flex>
      <Flex justifyContent={"flex-end"}>
        <UserHeader />
      </Flex>
    </SimpleGrid>
  );
};

export default Header;
