import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import AppDisplay from "./pages/detail/detail.js";
import HomeComponent from "./pages/home/home.js";
import ResultComponent from "./pages/result/result.js";
import NotFoundPage from "./pages/NotFoundPage.js";
import NavBar from "./shared/NavBar.js";
import About from "./pages/about/about.js";
import Info from "./pages/about/info.js";

const Main = () => {
  const [selectedId, setSelected] = useState(false);
  const [q, setQuery] = useState("");

  const detail = ({ match }) => {
    setSelected(match.params.appId);
    console.log(selectedId);
    return <AppDisplay select={selectedId} />;
  };

  const result = ({ match }) => {
    setQuery(match.params.query);
    return (
      <div>
        <ResultComponent query={q} />
      </div>
    );
  };

  useEffect(() => {
    document.title = "VULPIX";
  }, []);

  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <HomeComponent />
        </Route>
        <Route path="/detail/:appId" component={detail} />
        <Route path="/result/:query" component={result} />
        <Route path="/about" component={About} />
        <Route path="/info" component={Info} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
};

export default Main;
