import React, { useState, useEffect } from "react";
import { Col, Row, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import ShopData from "../Data/ShopData";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import "./styles.css";

//找出符合地區的資料
const Restaurant = (props) => {
  const filterData = ShopData.filter(function (item, index, array) {
    if (item.location === props.location.state.dist) {
      return true;
    }
  });

  //初始可見數量
  const [visible, setVisible] = useState(6);

  //點擊增加的可見數量
  const showMore = () => {
    setVisible((prevValue) => prevValue + 6);
  };

  return (
    <div className="restaurants">
      <div
        className="hero"
        style={{ backgroundImage: `url(${props.location.state.image})` }}
      >
        <div className="hero-dark"></div>
        <div className="hero-title">
          {props.location.state.dist}
          <DropdownMenu />
        </div>
      </div>
      <div className="container">
        <div className="header">
          <h1 className="header-title">更多選擇</h1>
          <p className="header-description">探索更多在地餐廳</p>
        </div>
      </div>
      <Row className="line">
        {[...filterData.slice(0, visible)].map((restaurant, index) => (
          <Col xs={12} md={6} lg={4} key={restaurant.name}>
            <Card>
              <Link
                to={{
                  pathname: `/findrestaurants/detail`,
                  state: {
                    name: restaurant.name,
                    description: restaurant.description,
                    address: restaurant.address,
                    tel: restaurant.tel,
                    rating: restaurant.rating,
                    image: restaurant.images,
                    lat: restaurant.lat,
                    lng: restaurant.lng,
                    location: restaurant.location,
                  },
                }}
              >
                <Card.Img variant="top" src={restaurant.images} />
                <Card.Body>
                  <Card.Title>
                    {restaurant.name}
                    <span className="rating">★ {restaurant.rating}</span>
                  </Card.Title>
                  <Card.Text>{restaurant.description}</Card.Text>
                </Card.Body>
              </Link>
            </Card>
          </Col>
        ))}
      </Row>
      <div className="load-more">
        <button onClick={showMore}>瀏覽更多</button>
      </div>
    </div>
  );
};

export default Restaurant;
