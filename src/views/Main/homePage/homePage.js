import React, { useState, useEffect } from "react";

import SearchBar from "../../../components/searchBar/searchBar";

import title_img from "../../../img/title.png";
import cloud_big from "../../../img/cloud1.svg";
import cloud_small from "../../../img/cloud2.svg";

const HomePage = props => {
  return (
    <div className="main__homePage">
      <img src={cloud_big} className="main__homePage--cloudBig" />
      <img src={cloud_small} className="main__homePage--cloudSmall" />
      <img src={title_img} alt="title" className="main__homePage--title" />
      <h3>好回憶，來自好旅程</h3>
      <SearchBar className="searchBar--homepage" />
    </div>
  );
};

export default HomePage;
