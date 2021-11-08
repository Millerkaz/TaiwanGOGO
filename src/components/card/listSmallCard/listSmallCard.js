import React from "react";
import history from "../../../helper/history";
import marker_icon from "../../../img/Marker.svg";
import spot404_img from "../../../img/spotImg404.png";
import { historyPush } from "../../../helper";
import "./listSmallCard.scss";

const ListSmallCard = props => {
  const { city, term, page } = props.hash;
  return (
    <div
      className="listSmallCard"
      onClick={() => {
        historyPush(`/spot/${city}/${term}/${page}/${props.id}`);
      }}
    >
      <div className="listSmallCard__img-container">
        <img
          onError={function (e) {
            e.target.src = spot404_img;
          }}
          src={props.url ? props.url : spot404_img}
          alt={props.alt || "NO PICTURE"}
        />
      </div>
      <p className="listSmallCard__title">{props.title}</p>
      <div className="listSmallCard__icon">
        <img src={marker_icon} />
        <span>{props.location || props.address}</span>
      </div>
      <p className="listSmallCard__more">了解更多</p>
    </div>
  );
};

export default ListSmallCard;
