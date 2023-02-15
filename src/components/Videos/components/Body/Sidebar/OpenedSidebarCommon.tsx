import { Divider, Flex, Text } from "@chakra-ui/react";
import React from "react";
import Icon from "../../../../Icon";

interface IProps {
  iconNameMap: {
    iconName: string;
  }[];
}

const OpenedSidebarCommon = ({ iconNameMap }: IProps) => {
  return (
    <Flex
      flexDir={"column"}
      height={"40vh"}
      justifyContent={"space-between"}
      alignItems={"center"}
      alignSelf={"flex-start"}
      p={"0.6em 0"}
      // border={"1px solid orange"}
    >
      {iconNameMap.map((icon, index) => {
        return (
          <Flex
            flexDir={"row"}
            key={icon.iconName}
            justifyContent={"space-between"}
            alignItems={"center"}
            // border={"1px solid orange"}
            w={"80%"}
            ml={"10px"}
            p={"0.6em 0.4em"}
            gap={"20px"}
          >
            <Flex w={"34px"}>
              <Icon iconName={icon.iconName} size={"24px"} />
            </Flex>
            <Flex w={"40px"}>
              <Text fontSize={"14px"} mr={"20px"}>
                {icon.iconName}
              </Text>
            </Flex>
          </Flex>
        );
      })}
      <Divider orientation="horizontal" color={"blue"} />
    </Flex>
  );
};

export default OpenedSidebarCommon;
