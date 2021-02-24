import React from "react";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./styles.css";

const DropdownMenu = () => {
  return (
    <>
      <Dropdown>
        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
          切換地區
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Link
            to={{
              pathname: `daan`,
              state: {
                dist: "大安區",
                image:
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Taipei_Daan_Park_-_Ecological_Pool_-_20180805_-_02.jpg/1821px-Taipei_Daan_Park_-_Ecological_Pool_-_20180805_-_02.jpg",
              },
            }}
            className="dropdown-item"
          >
            大安區
          </Link>
          <Link
            to={{
              pathname: `xinyi`,
              state: {
                dist: "信義區",
                image:
                  "https://images.unsplash.com/photo-1571566988511-67a346198378?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=8107&q=80",
              },
            }}
            className="dropdown-item"
          >
            信義區
          </Link>
          <Link
            to={{
              pathname: `zhongshan`,
              state: {
                dist: "中山區",
                image:
                  "https://upload.wikimedia.org/wikipedia/commons/d/dc/%E5%8F%B0%E5%8C%97%E5%B8%82%E5%8D%97%E4%BA%AC%E6%9D%B1%E8%B7%AF%E4%BA%8C%E6%AE%B5_-_panoramio_%2831%29.jpg",
              },
            }}
            className="dropdown-item"
          >
            中山區
          </Link>
          <Link
            to={{
              pathname: `songshan`,
              state: {
                dist: "松山區",
                image:
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/TransGlobe_Life_headquarters_at_Ruentex_Songshan_Station_Complex_B_20170812.jpg/768px-TransGlobe_Life_headquarters_at_Ruentex_Songshan_Station_Complex_B_20170812.jpg",
              },
            }}
            className="dropdown-item"
          >
            松山區
          </Link>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export default DropdownMenu;
