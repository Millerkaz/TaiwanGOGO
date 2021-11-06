import React from "react";
import { Router, Route, Link } from "react-router-dom";

import SpotPage from "./spotPage";
import DetailCard from "../../components/card/detailCard";

class Main extends React.Component {
  render() {
    return (
      <main className="main">
        <Route path="/spot" component={SpotPage} />
        <Route path="/spot/:id" exact component={DetailCard} />
      </main>
    );
  }
}

export default Main;
