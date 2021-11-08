import React, { useEffect } from "react";
import { action } from "../../store";
import { useSelector, useDispatch } from "react-redux";

import ListSmallCard from "../card/listSmallCard/listSmallCard";

import "./searchList.scss";

const renderList = (dataArray, hash) => {
  return dataArray.map(spotObj => {
    return <ListSmallCard key={spotObj.ID} id={spotObj.ID} title={spotObj.Name} location={spotObj.City} url={spotObj.Picture.PictureUrl1} alt={spotObj.Picture.PictureDescription1} address={spotObj.Address?.slice(0, 3)} hash={hash} />;
  });
};

const SearchList = props => {
  const dispatch = useDispatch();
  let dataObj = useSelector(state => state.searchData?.data);
  // let nowClickPage = useSelector(state => state.nowPage);

  // useEffect(() => {
  //   return () => {
  //     console.log("clear");
  //     dispatch(action.pageBarNumberChangeCreator(1));
  //   };
  // }, [dataObj]);

  if (!dataObj) {
    return <div>Loading...</div>;
  }

  if (Object.keys(dataObj).length === 0) {
    return <div>No Spot Founded!</div>;
  }

  return <div className="searchList">{renderList(dataObj[props.hash.page], props.hash)}</div>;
};

export default SearchList;
