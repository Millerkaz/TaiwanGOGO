import React, { useState, useEffect } from "react";
import { PTX } from "../../../API";
import { action } from "../../../store";
import { useDispatch } from "react-redux";
import Popup from "../../popup";

const renderDetail = data => {
  let imgCount = Object.keys(data.Picture).length;
  let imgArray = [];
  if (imgCount <= 2) {
    imgArray.push({ url: data.Picture[`PictureUrl${1}`], alt: data.Picture[`PictureDescription${1}`] });
  }
  if (imgCount > 2 && imgCount % 2 === 0) {
    for (let i = 1; i <= imgCount / 2; i++) {
      imgArray.push({ url: data.Picture[`PictureUrl${i}`], alt: data.Picture[`PictureDescription${i}`] });
    }
  }

  return (
    <div className="detailCard">
      <div className="detailCard__imgList">
        {imgArray.map(imgObj => (
          <img src={imgObj.url} alt={imgObj.alt} />
        ))}
      </div>
      <div className="detailCard__imgArrowBar">{imgArray.length > 1 && <div>icon</div>}</div>
      <div className="detailCard__description">
        <h4>{data.Name}</h4>
        <p>{data.DescriptionDetail}</p>
      </div>
      <div className="detailCard__iconGrid">
        <div className="detailCard__iconGrid--openTime">{data.OpenTime}</div>
        <div className="detailCard__iconGrid--ticketInfo">{!data.TicketInfo ? "免費" : data.TicketInfo}</div>
        <div className="detailCard__iconGrid--address">{data.Address}</div>
        <a href={`tel:+${data.Phone}`} className="detailCard__iconGrid--phone">
          {data.Phone}
        </a>
      </div>
    </div>
  );
};

//從 match 引入ID
const DetailCard = props => {
  const [data, setData] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(action.popWindowShowCreator(null));
    console.log(props);
    const fetchData = async () => {
      const response = await PTX.get(`/v2/Tourism/ScenicSpot?$filter=ID%20eq%20'${props.match.params.id}'&$format=JSON`);

      setData(response.data[0]);
      console.log(response.data[0]);
    };

    fetchData();
  }, []);

  return <Popup backPath={`/spot`}>{data ? renderDetail(data) : <div>Loading...</div>}</Popup>;
};

export default DetailCard;
