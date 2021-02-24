import React from "react";
import { AiTwotoneShop, AiTwotonePhone } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";
import { Link } from "react-scroll";

import "./styles.css";

const Pick = () => {
  return (
    <div className="picker">
      <div className="picker-title">
        <div className="title">簡單饗食</div>
        <p>快速訂位</p>
      </div>
      <div className="picker-pic">
        <AiTwotoneShop />
        <span>----</span>
        <BiTimeFive />
        <span>----</span>
        <AiTwotonePhone />
      </div>
      <div className="picker-button">
        <Link to="common" smooth={true} duration={1000}>
          <button>了解更多</button>
        </Link>
      </div>
    </div>
  );
};

export default Pick;
