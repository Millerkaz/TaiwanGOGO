import React from "react";

const SearchBar = props => {
  return (
    <div className="searchBar">
      <div className="searchBar__container">
        <div className="searchBar__title">welcome to taiwan</div>
        <div className="searchBar__subtitle">台北、台中、台南、屏東、宜蘭……遊遍台灣</div>
        <form className="searchBar__form">
          <input type="text" />
          <select>
            <option>景點</option>
            <option>活動</option>
          </select>
          <select>
            <option></option>
          </select>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
