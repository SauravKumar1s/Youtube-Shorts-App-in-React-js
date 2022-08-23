import React, { useState } from "react";
import "./like.css";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import ShareIcon from "@mui/icons-material/Share";
import IconButton from "@mui/material/IconButton";
import { Avatar } from "@mui/material";

const LikeComm = ({ name }) => {
  const [Like, setLike] = useState(0);

  const likeCount = () => {
    if (Like) {
      setLike(Like - 1);
    } else {
      setLike(Like + 1);
    }
  };

  return (
    <>
      <div className="likecom">
        <div className="likecom_btn">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <ThumbUpIcon onClick={likeCount} style={{ cursor: "pointer" }} />
          </IconButton>

          <p style={{ marginTop: "-7px", marginLeft: "2px" }}>{Like}</p>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <ThumbDownIcon />
          </IconButton>
          <p style={{ marginTop: "-5px", marginLeft: "-8px" }}>Dislike</p>

          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <InsertCommentIcon />
          </IconButton>

          <p style={{ marginTop: "-5px", marginLeft: "-2px" }}>225</p>

          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <ShareIcon />
          </IconButton>
          <p style={{ marginTop: "-5px", marginLeft: "-8px" }}>Share</p>
        </div>
      </div>
      <div>
      </div>
      <div className="Subscribe">
        <Avatar />
        <p style={{ marginLeft: "-5px" }}>
          <b>Saurav Kumar</b>
        </p>
        <button className="btnSub">Subscribe</button>
      </div>
    </>
  );
};

export default LikeComm;
