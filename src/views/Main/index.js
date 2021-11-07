import React from "react";
import { Router, Route, Link } from "react-router-dom";

import SearchBar from "../../components/searchBar/searchBar";

class Main extends React.Component {
  render() {
    return (
      <main className="main">
        <SearchBar />
      </main>
    );
  }
}

export default Main;
