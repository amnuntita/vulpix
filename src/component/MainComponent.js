import React, { useState, useCallback } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import NavBar from "./NavBar.js";
import AppDisplay from "./AppDisplay.js";
import HomeComponent from "./HomeComponent.js";
import AboutComponent from "./AboutComponent.js";
import ResultComponent from "./ResultComponent.js";
// I like to seperate 'My Components' from the other things
// Much cleaner to looking for anything

const Main = () => {
  // For good convention, use the same for state, and setState
  const [selectedId, setSelectedId] = useState(false);
  const [query, setQuery] = useState("");

  //
  const detail = useCallback(
    ({ match }) => {
      setSelectedId(match.params.appId);
      return <AppDisplay select={selectedId} />;
    },
    [selectedId]
  );

  const result = useCallback(
    ({ match }) => {
      setQuery(match.params.query);
      return (
        <div>
          <ResultComponent query={query} />
        </div>
      );
    },
    [query]
  );

  // Deletable if you understanded
  // You can make Layout (that used in every page) by wrap around routes like this
  // Look at Navbar
  // You don't need to repeatly put in every page
  return (
    <>
      <NavBar />
      <Switch>
        <>
          <Route
            exact
            path="/"
            render={() => <Redirect from="/" to="/home" />}
          ></Route>
          <Route path="/home/" component={HomeComponent} />
          <Route path="/about" component={AboutComponent} />
          <Route path="/detail/:appId" component={detail} />
          <Route path="/result/:query" component={result} />
        </>
      </Switch>
      {/* For example, when you wanna put footer, you can put it here! */}
      {/* <Footer /> */}
    </>
  );
};

export default Main;
