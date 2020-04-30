import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import AppDisplay from "./AppDisplay.js";
import HomeComponent from "./HomeComponent.js";
import AboutComponent from "./AboutComponent.js";
import ResultComponent from "./ResultComponent.js";

import Test from "./test.js";

const Main = () => {
  const [selectedId, setSelected] = useState(false);

  const detail = ({ match }) => {
    setSelected(match.params.appId);
    return <AppDisplay select={selectedId} />;
  };

  return (
    <div>
      <Switch>
        <Route path="/home">
          <HomeComponent />
        </Route>
        <Route path="/about" component={AboutComponent} />
        <Route path="/detail/:appId" component={detail} />
      </Switch>
    </div>
  );
};

export default Main;
