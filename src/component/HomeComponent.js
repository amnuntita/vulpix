import React from "react";
import { baseUrl } from "../shared/BaseUrl.js";

// Components from 3rd party
import { Media } from "reactstrap";

// My Components
import Search from "./SearchComponent.js";

// Seperate for being cleaner
const IconCredit = () => (
  <div className="credit">
    Icons made by{" "}
    <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">
      Smashicons
    </a>{" "}
    from{" "}
    <a href="https://www.flaticon.com/" title="Flaticon">
      www.flaticon.com
    </a>
  </div>
);

const HomeComponent = () => {
  return (
    <main>
      <IconCredit />
      <div className="logo">
        <Media src={`${baseUrl}public/newlogo.png`} alt="vulpix" />
      </div>
      <div className="homesearch">
        <Search />
      </div>
    </main>
  );
};

export default HomeComponent;
