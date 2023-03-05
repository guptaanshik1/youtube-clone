import React from "react";
import VideosView from "./Videos.view";
import { VideosContext } from "./utils/context";
import useGetHomeVideos from "./hooks/useGetHomeVideos";
import { useDisclosure } from "@chakra-ui/react";

export default function VideosContainer() {
  const { data: videosData, isLoading: isVideosDataLoading } =
    useGetHomeVideos();

  const [searchQuery, setSearchQuery] = React.useState<string>("");

  const {
    isOpen: isDrawerOpen,
    onClose: onDrawerClose,
    onOpen: onDrawerOpen,
  } = useDisclosure();

  return (
    <VideosContext.Provider
      value={{
        videosData,
        isDrawerOpen,
        onDrawerClose,
        onDrawerOpen,
        searchQuery,
        setSearchQuery,
      }}
    >
      <VideosView />
    </VideosContext.Provider>
  );
}
