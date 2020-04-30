import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import AppDisplay from "./AppDisplay.js";
import HomeComponent from "./HomeComponent.js";
import AboutComponent from "./AboutComponent.js";
import ResultComponent from "./ResultComponent.js";
import { baseUrl } from "../shared/BaseUrl.js";
import Test from "./test.js";

const Main = () => {
  const [appList, setAppList] = useState({});
  const [selectedId, setSelected] = useState(false);
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(baseUrl + "app_list");
      res.json().then((res) => setAppList(res));
    }

    fetchData();
  });

  const detail = ({ match }) => {
    if (appList) {
      console.log(parseInt(match.params.appId, 10));
      setSelected(parseInt(match.params.appId, 10));
    }
    return <AppDisplay select={selectedId} appList={appList} />;
  };

  return (
    <div>
      <Switch>
        <Route path="/home">
          <HomeComponent appList={appList} />
        </Route>
        <Route path="/about" component={AboutComponent} />
        <Route path="/detail/:appId" component={detail} />
        <Route path="/test" component={Test} />
      </Switch>
    </div>
  );
};

export default Main;
