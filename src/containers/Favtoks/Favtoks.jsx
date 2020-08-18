import React, { useState } from "react";

export const Favtoks = () => {
  const [video, setVideo] = useState("video1");

  const videos = ["video1", "video2", "video3", "video4", "video5"];

  const updateVid = () => {
    const randomVid = videos[Math.floor(Math.random() * 5)];

    setVideo(randomVid);
  };

  return (
      <div>
          <h1 onClick={() => { updateVid()}}>{video}</h1>
      </div>
  )
};
