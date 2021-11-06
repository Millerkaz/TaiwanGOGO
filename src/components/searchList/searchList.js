import React, { useEffect } from "react";
import { action } from "../../store";
import { useSelector, useDispatch } from "react-redux";

import ListSmallCard from "../card/listSmallCard/listSmallCard";

const renderList = dataArray => {
  return dataArray.map(spotObj => {
    return <ListSmallCard key={spotObj.ID} id={spotObj.ID} title={spotObj.Name} location={spotObj.City} url={spotObj.Picture.PictureUrl1} alt={spotObj.Picture.PictureDescription1} />;
  });
};

const SearchList = props => {
  const dispatch = useDispatch();
  let dataObj = useSelector(state => state.searchData);
  let nowPage = useSelector(state => state.nowPage);

  useEffect(() => {
    return () => {
      console.log("clear");
      dispatch(action.pageBarNumberChangeCreator(1));
    };
  }, [dataObj]);

  if (!dataObj) {
    return <div>Loading...</div>;
  }

  let dataArray = Object.values(dataObj);
  if (dataArray.length === 0) {
    return <div>No Spot Founded!</div>;
  }

  return (
    <div>
      <div>{renderList(dataObj[nowPage])}</div>
    </div>
  );
};

export default SearchList;
