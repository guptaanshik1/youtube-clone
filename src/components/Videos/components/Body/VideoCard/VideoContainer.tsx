import { Flex } from "@chakra-ui/react";
import React from "react";
import { useVideosContext } from "../../../utils/context";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const { videosData, isVideosDataLoading } = useVideosContext();

  return (
    <Flex
      flexWrap={"wrap"}
      w={"95%"}
      ml={"100px"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      {
        // @ts-ignore
        !isVideosDataLoading &&
          videosData?.contents?.map((data) => (
            <VideoCard key={data?.video?.videoId} {...data?.video} />
          ))
      }
    </Flex>
  );
};

export default VideoContainer;
