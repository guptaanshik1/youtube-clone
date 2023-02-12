
import React from "react";
import { useVideosContext } from "./utils/context";

export default function VideosView() {
    const { count } = useVideosContext();
    return <p>Videos View and count is {count}</p>;
}    
