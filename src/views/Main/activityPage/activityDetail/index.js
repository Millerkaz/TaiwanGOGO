import React, { useState, useEffect } from "react";
import { PTX } from "../../../../API";
import { useDispatch } from "react-redux";
import DetailCard from "../../../../components/card/detailCard";

import cloud_big from "../../../../img/icon/cloud 1.png";
import cloud_small from "../../../../img/icon/cloud 2.png";

//從 match 引入ID
const ActivityDetail = props => {
  const [data, setData] = useState(null);
  const dispatch = useDispatch();
  const { city, term, page } = props.match.params;

  useEffect(() => {
    const fetchData = async () => {
      const response = await PTX.get(`/v2/Tourism/activity?$filter=ActivityID%20eq%20'${props.match.params.id}'&$format=JSON`);

      setData(response.data[0]);
    };

    fetchData();
  }, [props.match.params.id]);

  return (
    <React.Fragment>
      <img src={cloud_big} className="main__detail--cloudBig" />
      <img src={cloud_small} className="main__detail--cloudSmall" />
      <DetailCard type="activity" data={data} backPath={`/activity/${city}/${term}/${page}`} />
    </React.Fragment>
  );
};

export default ActivityDetail;
