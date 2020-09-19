import React, { lazy, Suspense } from "react";

import "./scss/index.scss";

import { useHistory, Route, Switch, withRouter } from "react-router-dom";

import { connect } from "react-redux";

import { bindActionCreators } from "redux";

import { useTranslation } from "react-i18next";

import {
  setCurrentLanguage,
  setCurrentLocation,
} from "./actions/configActions";

import { TOP_NEWS, CATEGORIES, SEARCH, HOME } from "./constants/urls";

import Header from "./components/HeaderComponents/Header";

import TopNewsContainer from "./components/TopNewsComponents/TopNewsContainer";

const App = ({ setCurrentLanguage, setCurrentLocation }) => {
  const history = useHistory();
  const { i18n } = useTranslation();

  function waitingComponent(Component) {
    return (props) => (
      <Suspense fallback={<div>Wait please</div>}>
        <Component {...props} />
      </Suspense>
    );
  }

  function changeLocation(locationToGo) {
    history.push(locationToGo);
    setCurrentLocation(locationToGo);
  }

  function changeLanguage(languageToChange) {
    i18n.changeLanguage(languageToChange);
    setCurrentLanguage(languageToChange);
  }

  return (
    <div className="App">
      <Header changeLocation={changeLocation} changeLanguage={changeLanguage} />
      <Switch>
        <Route exact path={HOME} component={TopNewsContainer} />
        <Route
          exact
          path={TOP_NEWS}
          component={waitingComponent(
            lazy(() =>
              import("./components/TopNewsComponents/TopNewsContainer")
            )
          )}
        />
        <Route
          exact
          path={CATEGORIES}
          component={waitingComponent(
            lazy(() =>
              import("./components/CategoriesComponents/CategoriesContainer")
            )
          )}
        />
        <Route
          exact
          path={SEARCH}
          component={waitingComponent(
            lazy(() => import("./components/SearchComponents/SearchContainer"))
          )}
        />
      </Switch>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentLanguage: bindActionCreators(setCurrentLanguage, dispatch),
    setCurrentLocation: bindActionCreators(setCurrentLocation, dispatch),
  };
};

export default withRouter(connect(null, mapDispatchToProps)(App));
