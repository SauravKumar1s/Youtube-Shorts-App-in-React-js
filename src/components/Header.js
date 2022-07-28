import React from "react";
import "./header.css";
import MenuIcon from "@mui/icons-material/Menu";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
const Header = () => {
  return (
    <>
      <div className="header2">
        <div className="header">
          <MenuIcon style={{ marginLeft: "20px"}} />
          <img style={{margin:'2px' , height:'20px' }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/2560px-YouTube_full-color_icon_%282017%29.svg.png" />
          <h2>Youtube</h2>
        </div>
      </div>
    </>
  );
};

export default Header;
