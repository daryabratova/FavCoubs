import React, { useState, useEffect } from "react";
import "./style.scss";
import { videosSrc } from "./data";

let playedVids = [videosSrc[0]];

export const FavCoubs = () => {
  const [video, setVideo] = useState(videosSrc[0]);
  const [size, setSize] = useState(["800", "600"]);

  const updateVid = () => {
    let unplayedVids = videosSrc.filter((vid) => !playedVids.includes(vid));

    if (unplayedVids.length === 0) {
      playedVids = [];
      unplayedVids = videosSrc;
    }

    const randomVid =
      unplayedVids[Math.floor(Math.random() * unplayedVids.length)];
    playedVids.push(randomVid);
    setVideo(randomVid);
  };

  useEffect(() => {
    const sizeChange = () => {
      if (window.innerWidth < 996) {
        setSize(["360", "360"]);
      } else {
        setSize(["800", "600"]);
      }
    };

    window.addEventListener("resize", sizeChange, false);
    window.addEventListener("load", sizeChange, false);
  }, []);

  return (
    <div className="app">
      <div className="app__layout">
        <h1 className="app__title">Enjoy my favourite coubs!</h1>
        <iframe
          className="app__video"
          src={`//coub.com/embed/${video}?muted=false&autostart=true&originalSize=false&startWithHD=false`}
          width={size[0]}
          height={size[1]}
          allowfullscreen
          frameborder="0"
          allow="autoplay"
        ></iframe>
        <div className="app__update">
          <button
            className="app__update-vid"
            onClick={() => {
              updateVid();
            }}
          >
            Show next one
          </button>
        </div>
      </div>
      <script async src="//c-cdn.coub.com/embed-runner.js"></script>
    </div>
  );
};
