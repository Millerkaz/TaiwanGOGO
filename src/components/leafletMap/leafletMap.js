import React, { useEffect } from "react";
import styles from "./leafletMap.module.scss";

const LeafletMap = props => {
  useEffect(() => {
    let myMap = window.L.map("map").setView([props.location.lat, props.location.lon], 16);

    window.L.tileLayer("https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(myMap);

    let marker = window.L.marker([props.location.lat, props.location.lon]).addTo(myMap);
  }, []);

  return <div id="map" style={{ height: "500px" }}></div>;
};

export default LeafletMap;
