import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import { VideoTypes } from "../../../types/VideoTypes";
import { YOUTUBE_VIDEOS_API } from "../../../utils/constants";
import { BASE_URL, HEADERS, headersType, methodType } from "../utils/caller";

interface IOptions {
  params: Object;
  headers: headersType;
}

const getVideos = async (): Promise<any> => {
  const endpoint = `${BASE_URL}/search/?q=New`;
  const params = { hl: "en", gl: "IN" };
  const options: IOptions = {
    params,
    headers: HEADERS,
  };

  const { data } = await axios.get(endpoint, options);
  return data;
};

export default function useGetHomeVideos() {
  const { data, isLoading, refetch } = useQuery("home/videos", () =>
    getVideos()
  );
  return {
    data,
    isLoading,
    refetch,
  };
}
