import React from "react";
import { connect } from "react-redux";

import Btn from "../../../components/btn";

class NavBar extends React.Component {
  render() {
    return (
      <ul className={this.props.className}>
        <li>
          <Btn type="link" to="/" color="blue">
            Home Page
          </Btn>
        </li>
        <li>
          <Btn type="link" to="/" color="blue">
            Home Page
          </Btn>
        </li>
        <li>
          <Btn type="link" to="/" color="blue">
            Home Page
          </Btn>
        </li>
      </ul>
    );
  }
}

export default connect(null)(NavBar);
