import React from "react";
import BackGroundImg from "../public/img/netflix.png";
import Logo from "./public/logo";
import Search from "./search";

const divStyle = {
  width: "100%",
  height: "300px",
  background:
    "linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.45) )," +
    `url(${BackGroundImg})`,
  padding: "20px 100px"
};

export const Header = props => {
  return (
    <div
      style={divStyle}
      className="d-flex flex-column justify-content-between"
    >
      <Logo />
      <Search />
    </div>
  );
};
