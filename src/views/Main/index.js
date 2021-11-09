import React, { useEffect } from "react";
import "./main.scss";
import cloud_big from "../../img/icon/cloud 1.png";
import cloud_small from "../../img/icon/cloud 2.png";

import SearchBar from "../../components/searchBar/searchBar";

const typeDecide = props => {
  switch (props.location.pathname) {
    case "/activity":
      return "activity";
    case "/restaurant":
      return "restaurant";
    default:
      return "spot";
  }
};

const titleDecide = props => {
  switch (props.location.pathname) {
    case "/activity":
      return "找活動";
    case "/restaurant":
      return "找餐廳";
    default:
      return "全台景點";
  }
};

const Main = props => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflowY = "visible";
    };
  });

  return (
    <main>
      <div className="main__spotPage">
        <img src={cloud_big} className="main__spotPage--cloudBig" />
        <img src={cloud_small} className="main__spotPage--cloudSmall" />
        <h3>{titleDecide(props)}</h3>
        <SearchBar type={typeDecide(props)} />
      </div>
    </main>
  );
};

export default Main;
