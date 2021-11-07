import React, { useState, useEffect } from "react";
import history from "../../helper/history";
import { action } from "../../store";
import { useDispatch } from "react-redux";

const SearchBar = props => {
  const [term, setTerm] = useState("");
  const [type, setType] = useState("景點");
  const [city, setCity] = useState("all");

  const dispatch = useDispatch();

  const formSubmitHandler = e => {
    e.preventDefault();
    console.log({ term, type, city });
    // dispatch(action.formSearchSubmitCreator({ term, type, city }));
    history.push(`/spot/${city}/${term ? term : "all"}/1`);
    setTerm("");
    setType("景點");
    setCity("all");
  };

  //TODO: 表單必須驗證INPUT有無輸入

  return (
    <div className="searchBar">
      <div className="searchBar__container">
        <div className="searchBar__title">welcome to taiwan</div>
        <div className="searchBar__subtitle">台北、台中、台南、屏東、宜蘭……遊遍台灣</div>
        <form className="searchBar__form" onSubmit={formSubmitHandler}>
          <input
            type="text"
            value={term}
            onChange={e => {
              setTerm(e.target.value);
            }}
          />
          <button type="submit">submit</button>
          <select
            value={type}
            onChange={e => {
              setType(e.target.value);
            }}
          >
            <option value="景點">景點</option>
            <option value="活動">活動</option>
          </select>
          <select
            value={city}
            onChange={e => {
              setCity(e.target.value);
            }}
          >
            <option value="all">不分縣市</option>
            <option value="臺北市">臺北市</option>
            <option value="臺中市">臺中市</option>
            <option value="基隆市">基隆市</option>
            <option value="臺南市">臺南市</option>
            <option value="高雄市">高雄市</option>
            <option value="新北市">新北市</option>
            <option value="宜蘭縣">宜蘭縣</option>
            <option value="桃園市">桃園市</option>
            <option value="嘉義市">嘉義市</option>
            <option value="新竹縣">新竹縣</option>
            <option value="苗栗縣">苗栗縣</option>
            <option value="南投縣">南投縣</option>
            <option value="彰化縣">彰化縣</option>
            <option value="新竹市">新竹市</option>
            <option value="雲林縣">雲林縣</option>
            <option value="嘉義縣">嘉義縣</option>
            <option value="屏東縣">屏東縣</option>
            <option value="花蓮縣">花蓮縣</option>
            <option value="臺東縣">臺東縣</option>
            <option value="金門縣">金門縣</option>
            <option value="澎湖縣">澎湖縣</option>
            <option value="連江縣">連江縣</option>
          </select>
          <button>location</button>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
