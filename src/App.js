import React from "react";
import { Router, Route } from "react-router-dom";

import history from "./helper/history";

import Header from "./views/Header";
import Main from "./views/Main";
import HomePage from "./views/Main/homePage/homePage";
import SpotPage from "./views/Main/spotPage";
import SpotDetail from "./views/Main/spotPage/spotDetail";
import ActivityPage from "./views/Main/activityPage";
import ActivityDetail from "./views/Main/activityPage/activityDetail";
import RestaurantPage from "./views/Main/restaurantPage";
import RestaurantDetail from "./views/Main/restaurantPage/restaurantDetail";

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
        <Route path="/activity" exact component={Main} />
        <Route path="/activity/:city/:term/:page" exact component={ActivityPage} />
        <Route path="/activity/:city/:term/:page/:id" exact component={ActivityDetail} />
        <Route path="/restaurant" exact component={Main} />
        <Route path="/restaurant/:city/:term/:page" exact component={RestaurantPage} />
        <Route path="/restaurant/:city/:term/:page/:id" exact component={RestaurantDetail} />
      </Router>
    </React.Fragment>
  );
};

export default App;
