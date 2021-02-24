import React from "react";
import { Link } from "react-router-dom";
import MemberData from "../Data/MemberData";
import "./styles.css";

const Member = (props) => {
  //決定登入or註冊
  const Number = props.location.state.number;
  //讀取資料庫
  const member = MemberData[Number];
  //登入頁面回傳註冊link
  //註冊頁面回傳登入link
  const path =
    Number === 0
      ? {
          pathname: `singup`,
          state: {
            number: 1,
          },
        }
      : {
          pathname: `login`,
          state: {
            number: 0,
          },
        };

  return (
    <div className="member-background">
      <div className="member-section">
        <div className="member-top">
          <div className="member-title">{member.title}</div>
          <div className="title-explain">{member.titleExplain}</div>
          {[...member.input].map((inputs, index) => (
            <div key={inputs.placeholder}>
              <input type={inputs.className} placeholder={inputs.placeholder} />
            </div>
          ))}
          <div className="member-btn">
            <button type="submit">{member.button}</button>
          </div>
        </div>
        <div className="member-bottom">
          <p>{member.text}</p>
          <span>
            <Link to={path}>{member.link}</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Member;
