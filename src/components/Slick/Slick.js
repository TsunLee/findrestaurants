import React, { Component, useEffect, useState } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import ShopData from "../Data/ShopData";
import "./styles.css";

export default class MultipleItems extends Component {
  render() {
    //responsive設定
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
      ],
    };

    //設定隨機6個餐廳顯示
    const number = getRandom(1, 300);
    const shop = ShopData.slice(number, number + 6);
    function getRandom(min, max) {
      return Math.floor(Math.random() * max) + min;
    }

    return (
      <div className="slick-container">
        <h1>熱門餐廳</h1>
        <Slider {...settings}>
          {[...shop].map((shops, index) => (
            <div className="slicker" key={shops.name}>
              <div className="card">
                <Link
                  to={{
                    pathname: `/findrestaurants/detail`,
                    state: {
                      name: shops.name,
                      description: shops.description,
                      address: shops.address,
                      tel: shops.tel,
                      rating: shops.rating,
                      image: shops.images,
                      lat: shops.lat,
                      lng: shops.lng,
                      location: shops.location,
                    },
                  }}
                >
                  <img src={shops.images} />
                  <div className="card-title" to="/">
                    {shops.name}
                    <div className="rating">
                      ★ {shops.rating}
                      <span className="seperate-line">|</span>
                      <span className="shop-location">{shops.location}</span>
                    </div>
                  </div>
                  <div className="card-text">{shops.description}</div>
                </Link>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
