import React from "react";
import CommonData from "../Data/CommonData";
import AccountData from "../Data/AccountData";
import "./styles.css";

const Question = () => {
  return (
    <div className="question">
      <div className="hero-div">
        <div className="ques-hero">
          <div className="hero-title">
            <h1>常見問題</h1>
          </div>
        </div>
      </div>
      <div className="ques-section">
        <div className="title">平台與方案問題</div>
        {CommonData.map((item, index) => {
          return (
            <div className="ques-div" key={item.question}>
              <div className="ques-title">
                <span>{index + 1}. </span>
                {item.question}
              </div>
              <div className="ques-answer">{item.answer}</div>
            </div>
          );
        })}
      </div>
      <div className="ques-section">
        <div className="title">帳號相關問題</div>
        {AccountData.map((item, index) => {
          return (
            <div className="ques-div" key={item.question}>
              <div className="ques-title">
                <span>{index + 1}. </span>
                {item.question}
              </div>
              <div className="ques-answer">{item.answer}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Question;
