import React, { useState, useEffect } from "react";
import LeafletMap from "../../leafletMap/leafletMap";
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

  console.log(data);
  return (
    <div className="detailCard">
      <div className="detailCard__imgList">
        {imgArray.map(imgObj => (
          <img src={imgObj.url} alt={imgObj.alt} />
        ))}
      </div>
      <div className="detailCard__imgArrowBar">{imgArray.length > 1 && <div>icon</div>}</div>

      <div className="detailCard__header">
        <h2 className="detailCard__header--title">{data.Name}</h2>
        <div className="detailCard__header--class">
          <span>
            <i></i>
            {data.City}
          </span>
          {data.Class1 ? <span>{data.Class1}</span> : ""}
          {data.Class2 ? <span>{data.Class2}</span> : ""}
          {data.Class3 ? <span>{data.Class3}</span> : ""}
          {data.Class4 ? <span>{data.Class4}</span> : ""}
          {data.Level ? <span>{data.Level}</span> : ""}
        </div>
      </div>

      <div className="detailCard__iconGrid">
        <div className="detailCard__iconGrid--openTime">{data.OpenTime}</div>
        <div className="detailCard__iconGrid--ticketInfo">{!data.TicketInfo ? "免費" : data.TicketInfo}</div>
        <div className="detailCard__iconGrid--address">{data.Address}</div>
        <a href={`tel:+${data.Phone}`} className="detailCard__iconGrid--phone">
          {data.Phone}
        </a>

        <LeafletMap location={{ lat: data.Position.PositionLat, lon: data.Position.PositionLon }} />
      </div>

      <div className="detailCard__description">
        <p>{data.DescriptionDetail}</p>
      </div>
    </div>
  );
  // backPath={props.backPath}
};

//從 match 引入ID
const DetailCard = props => {
  return <React.Fragment>{props.data ? renderDetail(props.data) : <div>Loading...</div>}</React.Fragment>;
};

export default DetailCard;
