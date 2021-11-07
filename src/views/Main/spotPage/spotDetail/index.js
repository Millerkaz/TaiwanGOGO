import React, { useState, useEffect } from "react";
import { PTX } from "../../../../API";
import { action } from "../../../../store";
import { useDispatch } from "react-redux";
import DetailCard from "../../../../components/card/detailCard";

//從 match 引入ID
const SpotDetail = props => {
  const [data, setData] = useState(null);
  const dispatch = useDispatch();
  const { city, term, page } = props.match.params;

  useEffect(() => {
    dispatch(action.popWindowShowCreator(null));
    const fetchData = async () => {
      const response = await PTX.get(`/v2/Tourism/ScenicSpot?$filter=ID%20eq%20'${props.match.params.id}'&$format=JSON`);

      setData(response.data[0]);
    };

    fetchData();
  }, []);

  return <DetailCard data={data} backPath={`/spot/${city}/${term}/${page}`} />;
};

export default SpotDetail;
