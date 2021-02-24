import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import "./styles.css";
import Maps from "../Maps/Maps";

const Detail = (props) => {
  //返回地區
  const [back, setBack] = useState({});
  const check = () => {
    if (props.location.state.location === "大安區") {
      setBack({
        pathname: `/findrestaurants/daan`,
        state: {
          dist: "大安區",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Taipei_Daan_Park_-_Ecological_Pool_-_20180805_-_02.jpg/1821px-Taipei_Daan_Park_-_Ecological_Pool_-_20180805_-_02.jpg",
        },
      });
    } else if (props.location.state.location === "信義區") {
      setBack({
        pathname: `/findrestaurants/xinyi`,
        state: {
          dist: "信義區",
          image:
            "https://images.unsplash.com/photo-1571566988511-67a346198378?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=8107&q=80",
        },
      });
    } else if (props.location.state.location === "中山區") {
      setBack({
        pathname: `/findrestaurants/zhongshan`,
        state: {
          dist: "中山區",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/d/dc/%E5%8F%B0%E5%8C%97%E5%B8%82%E5%8D%97%E4%BA%AC%E6%9D%B1%E8%B7%AF%E4%BA%8C%E6%AE%B5_-_panoramio_%2831%29.jpg",
        },
      });
    } else {
      setBack({
        pathname: `/findrestaurants/songshan`,
        state: {
          dist: "松山區",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/TransGlobe_Life_headquarters_at_Ruentex_Songshan_Station_Complex_B_20170812.jpg/768px-TransGlobe_Life_headquarters_at_Ruentex_Songshan_Station_Complex_B_20170812.jpg",
        },
      });
    }
  };
  console.log(props);
  useEffect((props) => {
    check(props);
  }, []);

  return (
    <div>
      <div
        className="detail-hero"
        style={{ backgroundImage: `url(${props.location.state.image})` }}
      ></div>
      <div className="detail-section">
        <div className="detail-nav">
          <Link to="/findrestaurants">首頁</Link>
          <span>{`>`}</span>
          <Link to={back}>{props.location.state.location}</Link>
          <span>{`>`}</span>
          <p>{props.location.state.name}</p>
        </div>
        <div className="details">
          <div className="detail-title">{props.location.state.name}</div>
          <span className="detail-rating">
            <AiFillStar /> {props.location.state.rating}
          </span>
          |<span className="address">{props.location.state.address}</span>
          <div className="detail-line"></div>
          <div className="detail-text">{props.location.state.description}</div>
        </div>
      </div>
      <div className="map">
        <Maps data={props.location.state} />
      </div>
      <div className="comments">
        <span>|</span>評論(0)
        <p>目前還沒有評論</p>
      </div>
    </div>
  );
};

export default Detail;
