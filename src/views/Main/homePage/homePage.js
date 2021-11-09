import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { action } from "../../../store";
import { historyPush } from "../../../helper";

import SearchBar from "../../../components/searchBar/searchBar";
import SearchList from "../../../components/searchList/searchList";
import Btn from "../../../components/btn";

import title_img from "../../../img/title.png";
import cloud_big from "../../../img/icon/cloud 1.svg";
import cloud_small from "../../../img/icon/cloud 2.svg";
import saly14 from "../../../img/Saly-14.png";
import saly15 from "../../../img/Saly-15.png";
import hotel1 from "../../../img/icon/hotel.png";
import hotel2 from "../../../img/icon/hotel2.png";
import hotel3 from "../../../img/icon/hotel3.png";
import hotel4 from "../../../img/icon/hotel4.png";
import bike from "../../../img/bike.png";
import bus from "../../../img/bus.png";
import boat from "../../../img/boat.png";

const HomePage = props => {
  const dispatch = useDispatch();
  const homepageData = useSelector(state => state.homepageData);

  useEffect(() => {
    if (!homepageData) {
      window.navigator.geolocation.getCurrentPosition(
        coords => {
          dispatch(action.fetchHomepageDataCreator({ lat: coords.coords.latitude, lon: coords.coords.longitude }));
        },
        () => {},
        { enableHighAccuracy: true }
      );
      dispatch(action.fetchHomepageDataCreator());
    }
  }, []);

  return (
    <div className="main__homePage">
      <img src={cloud_big} className="main__homePage-cloud main__homePage-cloud--B_top" />
      <img src={cloud_small} className="main__homePage-cloud main__homePage-cloud--S_top" />
      <img src={cloud_big} className="main__homePage-cloud main__homePage-cloud--B_2nd" />
      <img src={cloud_small} className="main__homePage-cloud main__homePage-cloud--S_2nd" />
      <img src={cloud_small} className="main__homePage-cloud main__homePage-cloud--S_mid" />
      <img src={cloud_big} className="main__homePage-cloud main__homePage-cloud--B_3rd" />
      <img src={cloud_small} className="main__homePage-cloud main__homePage-cloud--S_3rd" />
      <img src={cloud_big} className="main__homePage-cloud main__homePage-cloud--B_last-L" />
      <img src={cloud_big} className="main__homePage-cloud main__homePage-cloud--B_last-R" />
      <img src={saly14} className="main__homePage-bookman" />
      <img src={saly15} className="main__homePage-flagman" />
      <img src={boat} className="main__homePage-boat" />
      <img src={title_img} alt="title" className="main__homePage--title" />
      <h3>好回憶，來自好旅程</h3>
      <SearchBar className="searchBar--homepage" />
      <h2>推薦景點</h2>
      <div className="main__homePage--spot">{homepageData ? <SearchList data={homepageData.spot} /> : "Loading..."}</div>
      <Btn
        color="search"
        onClick={() => {
          historyPush(`/spot/${homepageData.spot[0].City || homepageData.spot[0].Address.slice(0, 3)}/all/1`);
        }}
      >
        看更多景點
      </Btn>
      <h2>最新活動</h2>
      <div className="main__homePage--activity">{homepageData ? <SearchList type="activity" data={homepageData.activity} /> : "Loading..."}</div>
      <Btn
        color="search"
        onClick={() => {
          historyPush(`/activity/${homepageData.spot[0].City || homepageData.spot[0].Address.slice(0, 3)}/all/1`);
        }}
      >
        看更多活動
      </Btn>
      <h2>就要吃美食</h2>
      <div className="main__homePage--restaurant">{homepageData ? <SearchList className="main__homePage--restaurant" type="restaurant" data={homepageData.restaurant} /> : "Loading..."}</div>
      <Btn
        color="search"
        onClick={() => {
          historyPush(`/restaurant/${homepageData.spot[0].City || homepageData.spot[0].Address.slice(0, 3)}/all/1`);
        }}
      >
        尋找更多美食
      </Btn>
      <h2>優質住宿</h2>
      <div className="main__homePage--hotel">
        <div className="main__homePage--hotel-card">
          <img src={hotel1} alt="hotel1" />
          <p>一般旅館</p>
        </div>
        <div className="main__homePage--hotel-card">
          <img src={hotel2} alt="hotel2" />
          <p>國際觀光旅館</p>
        </div>
        <div className="main__homePage--hotel-card">
          <img src={hotel3} alt="hotel3" />
          <p>一般觀光旅館</p>
        </div>
        <div className="main__homePage--hotel-card">
          <img src={hotel4} alt="hotel4" />
          <p>民宿</p>
        </div>
      </div>
      <h2>在地暢遊</h2>
      <div className="main__homePage--local">
        <div className="main__homePage--local-card">
          <img src={bike} alt="bike" className="main__homePage--local-bikeImg" />
          <p>自行車道查詢</p>
        </div>
        <div className="main__homePage--local-card">
          <img src={bus} alt="bus" className="main__homePage--local-busImg" />
          <p>全台公車查詢</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
