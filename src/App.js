import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Router, Route, Link, Switch } from "react-router-dom";
import { action } from "./store";

import history from "./helper/history";

import Header from "./views/Header";
import Main from "./views/Main";
import SpotDetail from "./views/Main/spotPage/spotDetail";
import SpotPage from "./views/Main/spotPage";
import HomePage from "./views/Main/homePage/homePage";

import "./sass/index.scss";

const App = props => {
  return (
    <React.Fragment>
      <Router history={history}>
        <Header />
        <Route path="/" exact component={HomePage} />
        <Route path="/spot" exact component={Main} />
        <Route path="/spot/:city/:term/:page" exact component={SpotPage} />
        <Route path="/spot/:city/:term/:page/:id" exact component={SpotDetail} />
      </Router>
    </React.Fragment>
  );
};

export default App;
