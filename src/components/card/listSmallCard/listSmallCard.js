import React from "react";
import history from "../../../helper/history";

const ListSmallCard = props => {
  return (
    <div
      className="listSmallCard"
      onClick={() => {
        history.push(`/spot/${props.id}`);
      }}
    >
      <img src={props.url} alt={props.alt || "NO PICTURE"} className="listSmallCard__img" />
      <h3 className="listSmallCard__title">{props.title}</h3>
      <div>
        <svg className="listSmallCard__icon" />
        <span className="listSmallCard__location">{props.location}</span>
      </div>
    </div>
  );
};

export default ListSmallCard;
