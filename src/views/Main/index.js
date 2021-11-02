import React from "react";
import { Router, Route, Link } from "react-router-dom";

import BusToolPage from "./busToolPage";

class Main extends React.Component {
  render() {
    return (
      <main className="main">
        <Route path="/" exact component={BusToolPage} />
      </main>
    );
  }
}

export default Main;
