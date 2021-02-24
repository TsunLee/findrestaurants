import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "./logo.png";
import "./styles.css";

const Navbar = () => {
  const [icons, setIcons] = useState(false);

  return (
    <Nav>
      <div className="navbar">
        <Link to="/" className="logo">
          <img src={logo} />
        </Link>
        <div className="menu-icon" onClick={() => setIcons(!icons)}>
          {icons ? <FaTimes /> : <FaBars />}
        </div>
        <div className={icons ? "navs active" : "navs"}>
          <Nav.Item>
            <Link
              className="nav-link"
              onClick={() => setIcons(!icons)}
              to={{
                pathname: `daan`,
                state: {
                  dist: "大安區",
                  image:
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Taipei_Daan_Park_-_Ecological_Pool_-_20180805_-_02.jpg/1821px-Taipei_Daan_Park_-_Ecological_Pool_-_20180805_-_02.jpg",
                },
              }}
            >
              尋找餐廳
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={() => setIcons(!icons)} href="/">
              聯絡我們
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Link
              className="nav-link"
              onClick={() => setIcons(!icons)}
              to={{
                pathname: `login`,
                state: {
                  number: 0,
                },
              }}
            >
              登入
            </Link>
          </Nav.Item>
        </div>
      </div>
    </Nav>
  );
};

export default Navbar;
