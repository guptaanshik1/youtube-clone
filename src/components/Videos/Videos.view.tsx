import { Flex, Image, Skeleton } from "@chakra-ui/react";
import Body from "./components/Body/Body";
import { useVideosContext } from "./utils/context";

export default function VideosView() {
  const { isVideosDataLoading } = useVideosContext();

  if (isVideosDataLoading) {
    return (
      <Flex>
        <Skeleton
          alignItems={"center"}
          flexDir={"column"}
          w={"240px"}
          h={"140px"}
          p={"20px"}
        />
        {[1, 2, 3].map((item) => (
          <Skeleton key={item} h={"20px"} />
        ))}
      </Flex>
    );
  }

  return (
    <Flex flexDir={"column"}>
      <Body />
      {/* {
        // @ts-ignore
        videosData?.items?.map((video) => {
          return (
            <Image
              src={video?.snippet?.thumbnails?.medium?.url}
              alt="video"
              key={video?.id}
            />
          );
        })
      } */}
    </Flex>
  );
}
