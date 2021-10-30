import React from "react";
import { withRouter } from "react-router-dom";

import "./menu-item.styles.scss";

const MenuItem = ({ section, history }) => (
  <div
    className={`${section.size ? section.size : ""} menu-item`}
    onClick={() => history.push(section.linkUrl)}
  >
    <div
      className="background-image"
      style={{ backgroundImage: `url(${section.imageUrl})` }}
    />
    <div className="content">
      <h1 className="title">{section.title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default withRouter(MenuItem);
