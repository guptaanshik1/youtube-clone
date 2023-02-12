import React from "react";
import {
  MdHomeFilled,
  MdOutlineExplore,
  MdOutlineSubscriptions,
  MdOutlineVideoLibrary,
} from "react-icons/md";
import { VscHistory } from "react-icons/vsc";
import YtShortsIcon from "../icons/YtShortsIcon";
import { IconProps } from "../types/IconProps";

const Icon: React.FC<IconProps> = ({ iconName, ...props }) => {
  switch (iconName) {
    case "Home":
      return <MdHomeFilled {...props} />;
    case "Explore":
      return <MdOutlineExplore {...props} />;
    case "Shorts":
      return <YtShortsIcon {...props} />;
    case "Subscriptions":
      return <MdOutlineSubscriptions {...props} />;
    case "Library":
      return <MdOutlineVideoLibrary {...props} />;
    case "History":
      return <VscHistory {...props} />;
    default:
      return null;
  }
};

export default Icon;
