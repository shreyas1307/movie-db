import React from "react";
import classes from "./InputSection.module.css";

const inputSection = props => {
  return (
    <div className={classes.divElement}>
      <input
        className={classes.input}
        type="text"
        name="input"
        onChange={props.inputHandler}
        placeholder="Search your Favorite Movies and TV Shows"
      />
      <div className={classes.infoElement}>
        <h1 className={classes.h1}>Movie-DB</h1>
        <h4>Powered by OMDb API</h4>
      </div>
    </div>
  );
};

export default inputSection;
