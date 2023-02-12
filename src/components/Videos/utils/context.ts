
import React from "react";

export const VideosContext = React.createContext(null);

export const useVideosContext = () => {
  const context = React.useContext(VideosContext);
  if (!context)
    throw new Error("useVideosContext can not be used outside it's provider");
  return context;
};
