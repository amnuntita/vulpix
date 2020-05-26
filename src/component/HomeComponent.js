import React from "react";
import { Media } from "reactstrap";
import Search from "./SearchComponent.js";
import { baseUrl } from "../shared/BaseUrl.js";
import { logDOM } from "@testing-library/react";

const HomeComponent = (props) => {
  const IconCredit = () => {
    return (
      <div className="credit">
        Icons made by{" "}
        <a
          href="https://www.flaticon.com/authors/smashicons"
          title="Smashicons"
        >
          Smashicons
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
    );
  };
  return (
    <div>
      <IconCredit />
      <div className="logo">
        <Media>
          <Media src={baseUrl + "public/newlogo.png"} alt="vulpix" />
        </Media>
      </div>
      <div className="homesearch">
        <Search />
      </div>
    </div>
  );
};

export default HomeComponent;
