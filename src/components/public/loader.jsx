import React from "react";

function Loader() {
  return (
    <div
      style={{ fontSize: "100px", color: "#e81961", margin: "100px" }}
      className="d-flex justify-content-center"
    >
      <i className="fa fa-cog fa-spin" />
    </div>
  );
}

export default Loader;
