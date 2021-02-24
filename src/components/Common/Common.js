import React, { useState, useEffect } from "react";
import { Card, Accordion } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import CommonData from "../Data/CommonData";
import "./styles.css";

const Common = () => {
  return (
    <div className="ques-container" id="common">
      <h1>常見問題</h1>
      <p>了解更多問題</p>
      {CommonData.map((item, index) => {
        return (
          <Accordion key={item.question}>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                <div className="item-title">{item.question}</div>
                <div className="plus">
                  <FaPlus />
                </div>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>{item.answer}</Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        );
      })}
      <div className="ques-button">
        <Link to="/findrestaurants/question">
          <button>了解更多</button>
        </Link>
      </div>
    </div>
  );
};

export default Common;
