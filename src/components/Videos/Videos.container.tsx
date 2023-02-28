import React from "react";
import VideosView from "./Videos.view";
import { VideosContext } from "./utils/context";
import useGetHomeVideos from "./hooks/useGetHomeVideos";

export default function VideosContainer() {
  const { data: videosData, isLoading: isVideosDataLoading } =
    useGetHomeVideos();

  return (
    <VideosContext.Provider
      value={{
        videosData,
      }}
    >
      <VideosView />
    </VideosContext.Provider>
  );
}
