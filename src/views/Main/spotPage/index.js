import React from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchList from "../../../components/searchList/searchList";
import { action } from "../../../store";
import history from "../../../helper/history";

import SearchBar from "../../../components/searchBar/searchBar";

const Homepage = props => {
  const dispatch = useDispatch();

  return (
    <div>
      <SearchBar />
      <SearchList />
    </div>
  );
};

export default Homepage;
