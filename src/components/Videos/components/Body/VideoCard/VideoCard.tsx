import { Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import React from "react";
import { RxDotsVertical } from "react-icons/rx";
import { limitTitleChars } from "../../../utils/limitTitleChars";
import { formatViewCount } from "../../../utils/viewCountFormatter";

const VideoCard = ({ ...video }) => {
  console.log("video: ", video);
  const [isMouseOver, setIsMouseOver] = React.useState(false);

  const handleMouseOver = () => {
    setIsMouseOver(true);
  };

  const handleMouseLeave = () => {
    setIsMouseOver(false);
  };

  return (
    <>
      <Flex
        flexDir={"column"}
        flexWrap={"wrap"}
        w={"25%"}
        m={"10px 10px"}
        cursor={"pointer"}
      >
        <Flex>
          <Image
            src={video?.snippet?.thumbnails?.standard?.url}
            borderRadius={"8px"}
          />
        </Flex>
        <Grid
          m={"4px"}
          p={"2px 4px"}
          templateColumns={"repeat(3, 1fr)"}
          templateRows={"repeat(4, 1fr)"}
          h={"100px"}
          w={"330px"}
          onMouseOver={handleMouseOver}
          onMouseLeave={handleMouseLeave}
        >
          <GridItem
            w={"40px"}
            border={"1px solid pink"}
            colStart={0}
            colEnd={1}
            rowStart={0}
            rowEnd={1}
            rounded={"full"}
            mr={"8px"}
          />
          <GridItem
            colEnd={4}
            colStart={1}
            rowStart={0}
            rowEnd={1}
            w={"90%"}
            maxH={"50px"}
          >
            <Text fontWeight={700} fontSize={"14px"}>
              {limitTitleChars(video?.snippet?.title)}
            </Text>
          </GridItem>
          <GridItem
            colStart={3}
            colEnd={4}
            rowStart={0}
            rowEnd={1}
            w={"10px"}
            h={"40px"}
            alignSelf={"flex-end"}
            ml={"70px"}
          >
            {isMouseOver ? (
              <RxDotsVertical size={"24px"} color={"grey"} />
            ) : null}
          </GridItem>
          <GridItem
            colStart={1}
            colEnd={4}
            rowStart={1}
            rowEnd={2}
            w={"100%"}
            mt={"4px"}
          >
            <Text fontSize={"12px"}>{video?.snippet?.channelTitle}</Text>
          </GridItem>
          <GridItem colStart={1} colEnd={2} rowStart={2} rowEnd={3}>
            <Text fontSize={"10px"}>
              {formatViewCount(video?.statistics?.viewCount)}
            </Text>
          </GridItem>
          <GridItem colStart={2} colEnd={3} rowStart={2} rowEnd={3}>
            <Text fontSize={"10px"}>Time ago</Text>
          </GridItem>
        </Grid>
      </Flex>
    </>
  );
};

export default VideoCard;
