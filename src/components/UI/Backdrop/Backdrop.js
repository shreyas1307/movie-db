import React from "react";

const backdrop = props => {
  let style = null;
  if (props.active) {
    style = {
      zIndex: -100,
      backgroundColor: "black"
    };
  }
  return <div style={style} />;
};

export default backdrop;
