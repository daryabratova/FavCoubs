import React, { useState, useEffect } from "react";

import { videoIds } from "../../data/videoIds";

import { cn } from "../../helpers/classname";
import { getVideoSize } from "../../helpers/getVideoSize";

import "./Coub.scss";

let playedVids = [videoIds[0]];

const coubClassName = cn("coub");

export const Coub = () => {
  const [video, setVideo] = useState(videoIds[0]);
  const [size, setSize] = useState(getVideoSize());

  const updateVid = () => {
    let unplayedVids = videoIds.filter((vid) => !playedVids.includes(vid));

    if (unplayedVids.length === 0) {
      playedVids = [];
      unplayedVids = videoIds;
    }

    const randomVid =
      unplayedVids[Math.floor(Math.random() * unplayedVids.length)];

    playedVids.push(randomVid);
    setVideo(randomVid);
  };

  useEffect(() => {
    const changeSize = () => {
      setSize(getVideoSize());
    };

    window.addEventListener("resize", changeSize, false);
  }, []);

  return (
    <div className={coubClassName("layout")}>
      <h1 className={coubClassName("title")}>Enjoy my favourite coubs!</h1>
      <div className={coubClassName("video")}>
        <iframe
          title="video"
          src={`//coub.com/embed/${video}?muted=false&autostart=true&originalSize=false&startWithHD=false`}
          width={size[0]}
          height={size[1]}
          allowfullscreen
          frameborder="0"
          allow="autoplay"
        ></iframe>
      </div>
      <div className={coubClassName("next-button-layout")}>
        <button
          className={coubClassName("next-button")}
          onClick={() => {
            updateVid();
          }}
        >
          Show next one
        </button>
      </div>
      <script async src="//c-cdn.coub.com/embed-runner.js"></script>
    </div>
  );
};
