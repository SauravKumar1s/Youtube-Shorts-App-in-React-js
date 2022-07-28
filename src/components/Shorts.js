import React, { useRef, useState } from "react";
import LikeComm from "./LikeComm";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import "./shorts.css";

const Shorts = ({ src }) => {
  const [play, setplay] = useState(false);
  const first = useRef(null);

  const PlayPause = () => {
    if (play) {
      first.current.play();
      setplay(false);
    } else {
      first.current.pause();
      setplay(true);
    }
  };

  return (
    <>
      <div className="real-section">
        <video
          className="videoWatch"
          loop
          autoPlay={true}
          ref={first}
          onClick={PlayPause}
          src={src}
          alt=""
        />
        <ThumbUpIcon />
      </div>
      <LikeComm />
    </>
  );
};

export default Shorts;
