import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="hero-word">
        <h1>Find restaurant? </h1>
        <Link
          to={{
            pathname: `xinyi`,
            state: {
              dist: "信義區",
              image:
                "https://images.unsplash.com/photo-1571566988511-67a346198378?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=8107&q=80",
            },
          }}
        >
          <div className="hero-button">GO!!</div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
