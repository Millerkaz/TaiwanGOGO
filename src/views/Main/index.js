import React, { useEffect } from "react";
import "./main.scss";
import cloud_big from "../../img/cloud1.svg";
import cloud_small from "../../img/cloud2.svg";
import { Router, Route, Link } from "react-router-dom";

import SearchBar from "../../components/searchBar/searchBar";

const Main = props => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "visible";
    };
  });

  return (
    <main>
      <div className="main__spotPage">
        <img src={cloud_big} className="main__spotPage--cloudBig" />
        <img src={cloud_small} className="main__spotPage--cloudSmall" />
        <h3>全台景點</h3>
        <SearchBar />
      </div>
    </main>
  );
};

export default Main;
