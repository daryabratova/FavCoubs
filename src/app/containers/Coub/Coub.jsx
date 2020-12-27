import React, { useState, useEffect } from "react";

import { coubIds } from "../../data/coubIds";

import { cn } from "../../helpers/classname";
import { getVideoSize } from "../../helpers/getVideoSize";

import "./Coub.scss";

const [firstCoubId] = coubIds;

const coubClassName = cn("coub");

export const Coub = () => {
  const [playerState, setPlayerState] = useState({
    currentCoubId: firstCoubId,
    playedCoubIds: [firstCoubId],
  });

  const [size, setSize] = useState(getVideoSize());

  useEffect(() => {
    const changeSize = () => {
      setSize(getVideoSize());
    };

    window.addEventListener("resize", changeSize, false);
  }, []);

  const { currentCoubId } = playerState;
  const [width, height] = size;

  const nextCoub = () => {
    setPlayerState((playerState) => {
      const { playedCoubIds } = playerState;

      const unplayedCoubIds = coubIds.filter(
        (coubId) => !playedCoubIds.includes(coubId)
      );

      if (unplayedCoubIds.length === 0) {
        return {
          currentCoubId: firstCoubId,
          playedCoubIds: [firstCoubId],
        };
      }

      const randomCoubId =
        unplayedCoubIds[Math.floor(Math.random() * unplayedCoubIds.length)];

      return {
        currentCoubId: randomCoubId,
        playedCoubIds: [...playedCoubIds, randomCoubId],
      };
    });
  };

  return (
    <div className={coubClassName("layout")}>
      <h1 className={coubClassName("title")}>Enjoy my favourite coubs!</h1>
      <div className={coubClassName("video")}>
        <iframe
          title="video"
          src={`//coub.com/embed/${currentCoubId}?muted=false&autostart=true&originalSize=false&startWithHD=false`}
          width={width}
          height={height}
          allowfullscreen
          frameborder="0"
          allow="autoplay"
        ></iframe>
      </div>
      <div className={coubClassName("next-button-layout")}>
        <button className={coubClassName("next-button")} onClick={nextCoub}>
          Show next one
        </button>
      </div>
      <script async src="//c-cdn.coub.com/embed-runner.js"></script>
    </div>
  );
};
