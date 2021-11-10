import React from "react";
import ReactDOM from "react-dom";

import cloud_big from "../../../../img/icon/cloud 1.png";
import cloud_small from "../../../../img/icon/cloud 2.png";
import saly14 from "../../../../img/Saly-14.png";
import saly15 from "../../../../img/Saly-15.png";
import boat from "../../../../img/boat.png";

const BgImg = props => {
  return ReactDOM.createPortal(
    <React.Fragment>
      <img src={cloud_big} className="main__homePage-cloud main__homePage-cloud--B_top" />
      <img src={cloud_small} className="main__homePage-cloud main__homePage-cloud--S_top" />
      <img src={cloud_big} className="main__homePage-cloud main__homePage-cloud--B_2nd" />
      <img src={cloud_small} className="main__homePage-cloud main__homePage-cloud--S_2nd" />
      <img src={cloud_small} className="main__homePage-cloud main__homePage-cloud--S_mid" />
      <img src={cloud_big} className="main__homePage-cloud main__homePage-cloud--B_3rd" />
      <img src={cloud_small} className="main__homePage-cloud main__homePage-cloud--S_3rd" />
      <img src={cloud_big} className="main__homePage-cloud main__homePage-cloud--B_last-L" />
      <img src={cloud_big} className="main__homePage-cloud main__homePage-cloud--B_last-R" />
      <img src={saly14} className="main__homePage-bookman" />
      <img src={saly15} className="main__homePage-flagman" />
      <img src={boat} className="main__homePage-boat" />
    </React.Fragment>,
    document.body
  );
};

export default BgImg;
