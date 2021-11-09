import React, { useEffect } from "react";

const LeafletMap = props => {
  useEffect(() => {
    let coords = [props.location.lat, props.location.lon];
    let myMap = window.L.map("map").setView(coords, 16);

    window.L.tileLayer("https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(myMap);

    let marker = window.L.marker(coords).addTo(myMap);

    //* 建立圖標到初始地點;
    window.L.marker(coords).addTo(myMap).bindPopup(props.name).openPopup();
  }, []);

  return <div className={props.className} id="map"></div>;
};

export default LeafletMap;
