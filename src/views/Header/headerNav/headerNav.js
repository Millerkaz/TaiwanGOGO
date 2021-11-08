import React from "react";
import { connect } from "react-redux";
import { historyPush } from "../../../helper";

import Btn from "../../../components/btn";

class NavBar extends React.Component {
  render() {
    return (
      <ul className={this.props.className}>
        <li>
          <Btn
            color="nav"
            onClick={() => {
              historyPush("/spot");
            }}
          >
            景點查詢
          </Btn>
        </li>
        <li>
          <Btn
            color="nav"
            onClick={() => {
              historyPush("/");
            }}
          >
            找活動
          </Btn>
        </li>
        <li>
          <Btn
            color="nav"
            onClick={() => {
              historyPush("/");
            }}
          >
            找美食
          </Btn>
        </li>
        <li>
          <Btn
            color="nav"
            onClick={() => {
              historyPush("/");
            }}
          >
            找住宿
          </Btn>
        </li>
        <li>
          <Btn
            color="nav"
            onClick={() => {
              historyPush("/");
            }}
          >
            在地暢遊
          </Btn>
        </li>
      </ul>
    );
  }
}

export default connect(null)(NavBar);
