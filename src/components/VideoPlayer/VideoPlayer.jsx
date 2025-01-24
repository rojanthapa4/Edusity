import React from "react";
import "./VideoPlayer.css";
import video from "../../assets/college-video.mp4";
import { useRef } from "react";

const VideoPlayer = ({ player, setPlayer }) => {
  const Play = useRef(null);

  const closePlayer = (e) => {
    if (e.target === Play.current) {
      setPlayer(false);
    }
  };

  return (
    <div
      className={`video-player ${player ? "" : "hide"}`}
      ref={Play}
      onClick={closePlayer}
    >
      <video src={video} autoPlay muted controls></video>
    </div>
  );
};

export default VideoPlayer;
