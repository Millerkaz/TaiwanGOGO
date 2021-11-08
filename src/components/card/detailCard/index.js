import React, { useState, useEffect } from "react";
import LeafletMap from "../../leafletMap/leafletMap";
import Btn from "../../btn";

import "./detailCard.scss";
import marker_icon from "../../../img/Marker.svg";
import clock_icon from "../../../img/icon/Clock.svg";
import info_icon from "../../../img/icon/Info.svg";
import dollar_icon from "../../../img/icon/US Dollar.svg";
import spot404_img from "../../../img/spotImg404.png";

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
      <div>首頁/全台景點/</div>
      <div className="detailCard__imgShow">
        {imgArray.length > 1 && <div className="detailCard__imgShow--Bar">{<div>icon</div>}</div>}
        <div className="detailCard__imgShow--List">
          {imgArray.map(imgObj => (
            <div className="detailCard__imgShow--each">
              <img onError={e => (e.target.src = spot404_img)} src={imgObj.url ? imgObj.url : spot404_img} alt={imgObj.alt} />
            </div>
          ))}
        </div>
      </div>

      <div className="detailCard__header">
        <h2 className="detailCard__header--title">{data.Name}</h2>
        <div className="detailCard__header--class">
          <span>
            <img src={marker_icon} alt="marker" />
            {data.City || data.Address.slice(0, 3)}
          </span>
          {data.Class1 ? <span>{data.Class1}</span> : ""}
          {data.Class2 ? <span>{data.Class2}</span> : ""}
          {data.Class3 ? <span>{data.Class3}</span> : ""}
          {data.Class4 ? <span>{data.Class4}</span> : ""}
          {data.Level ? <span>{data.Level}</span> : ""}
        </div>
      </div>

      <div className="detailCard__iconGrid">
        <div className="detailCard__iconGrid--left">
          {data.OpenTime && (
            <div className="detailCard__iconGrid--openTime">
              <img src={clock_icon} />
              {data.OpenTime}
            </div>
          )}
          <div className="detailCard__iconGrid--ticketInfo">
            <img src={dollar_icon} />
            {!data.TicketInfo ? "免費" : data.TicketInfo}
          </div>

          {data.TravelInfo && (
            <div className="detailCard__iconGrid--travelInfo">
              <img src={info_icon} />
              {data.TravelInfo}
            </div>
          )}
          {data.Remarks && (
            <div className="detailCard__iconGrid--remarks">
              <img src={info_icon} />
              {data.Remarks}
            </div>
          )}
          {data.Address && (
            <div className="detailCard__iconGrid--address">
              <img src={marker_icon} alt="marker" style={{ width: "3rem", height: "3rem" }} />
              {data.Address}
            </div>
          )}
          <div className="detailCard__iconGrid--link">
            <Btn type="anchor" color="detailCard" href={`tel:+${data.Phone}`}>
              {data.Phone}
            </Btn>
            {data.WebsiteUrl && (
              <Btn type="anchor" color="search" href={`${data.WebsiteUrl}`} blank={true}>
                官方網站
              </Btn>
            )}
          </div>
        </div>

        <LeafletMap className="detailCard__iconGrid--map" name={data.Name} location={{ lat: data.Position.PositionLat, lon: data.Position.PositionLon }} />
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
