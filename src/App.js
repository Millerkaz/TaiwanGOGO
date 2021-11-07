import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Router, Route, Link } from "react-router-dom";
import { action } from "./store";

import history from "./helper/history";

import Header from "./views/Header";
import Main from "./views/Main";
import SpotDetail from "./views/Main/spotPage/spotDetail";
import SpotPage from "./views/Main/spotPage";

import "./sass/index.scss";

const App = props => {
  return (
    <div>
      <Router history={history}>
        <Header />
        <Route path="/spot" component={Main} />
        <Route path="/spot/:city/:term/:page" exact component={SpotPage} />
        <Route path="/spot/:city/:term/:page/:id" exact component={SpotDetail} />
      </Router>
    </div>
  );
};

export default App;
