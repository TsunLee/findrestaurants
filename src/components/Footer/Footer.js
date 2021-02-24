import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";
import "./styles.css";

const Footer = () => {
  return (
    <div className="footer-div">
      <div className="logos">
        <Link to="/findrestaurants">
          <img src={logo} />
        </Link>
      </div>
      <div className="footer-button">
        <Link
          to={{
            pathname: `/findrestaurants/zhongshan`,
            state: {
              dist: "中山區",
              image:
                "https://upload.wikimedia.org/wikipedia/commons/d/dc/%E5%8F%B0%E5%8C%97%E5%B8%82%E5%8D%97%E4%BA%AC%E6%9D%B1%E8%B7%AF%E4%BA%8C%E6%AE%B5_-_panoramio_%2831%29.jpg",
            },
          }}
        >
          <button className="one">前往體驗</button>
        </Link>
        <Link to="/findrestaurants/question">
          <button className="two">常見問題</button>
        </Link>
        <button className="three">關於我們</button>
      </div>
    </div>
  );
};

export default Footer;
