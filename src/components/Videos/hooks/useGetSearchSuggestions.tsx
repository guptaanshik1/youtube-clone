import axios from "axios";
import { useQuery } from "react-query";
import { YOUTUBE_SEARCH_API } from "../../../utils/constants";

const getSearch = async (searchQuery: string): Promise<any> => {
  const endpoint = `${YOUTUBE_SEARCH_API}${searchQuery}`;
  const res = axios.get(endpoint);
  return res;
};

export default function useGetSearchSuggestions(searchQuery: string) {
  const { data, isLoading } = useQuery("search-suggestions", () =>
    getSearch(searchQuery)
  );

  return {
    data,
    isLoading,
  };
}
