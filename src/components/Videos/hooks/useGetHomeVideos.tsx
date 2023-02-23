import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import { VideoTypes } from "../../../types/VideoTypes";
import { YOUTUBE_VIDEOS_API } from "../../../utils/constants";

const getVideos = async (): Promise<VideoTypes> => {
  const endpoint = YOUTUBE_VIDEOS_API;
  const { data } = await axios.get(endpoint);
  return data;
};

export default function useGetHomeVideos() {
  const { data, isLoading } = useQuery("home/videos", () => getVideos());
  return {
    data,
    isLoading,
  };
}
