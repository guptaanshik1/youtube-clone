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
      justifyContent={"flex-start"}
      alignItems={"flex-start"}
      // border={"1px solid orange"}
    >
      {iconNameMap.map((icon) => {
        return (
          <Flex
            flexDir={"row"}
            key={icon.iconName}
            justifyContent={"flex-start"}
            alignItems={"center"}
            // border={"1px solid blue"}
            w={"80%"}
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
