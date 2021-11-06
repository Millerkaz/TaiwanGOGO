import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Router, Route, Link } from "react-router-dom";
import { action } from "./store";

import history from "./helper/history";

import Header from "./views/Header";
import Main from "./views/Main";

import "./sass/index.scss";

const App = props => {
  return (
    <div>
      <Router history={history}>
        <Header />
        <Main />
      </Router>
    </div>
  );
};

export default App;
