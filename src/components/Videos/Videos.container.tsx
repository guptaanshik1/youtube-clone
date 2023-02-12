import React from "react";
import VideosView from "./Videos.view";
import { VideosContext } from "./utils/context";

export default function VideosContainer() {
  return (
    <VideosContext.Provider value={{}}>
      <VideosView />
    </VideosContext.Provider>
  );
}
