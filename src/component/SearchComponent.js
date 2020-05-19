import React, { useState, useEffect } from "react";
import { Input, Col, Button, Row, Form } from "reactstrap";
import { baseUrl } from "../shared/BaseUrl.js";
import { Link } from "react-router-dom";
import SuggestComponent from "./SuggestComponent.js";

const Search = (props) => {
  const [searchTerm, setSearchTerm] = useState("");

  async function handleInputChange(e) {
    setSearchTerm(e.target.value);
  }

  function keyHandle(e) {
    if (e.key == "Enter") {
      window.location.href = `/result/${searchTerm}`;
    }
  }

  return (
    <div>
      <Input
        type="text"
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyPress={keyHandle}
        value={searchTerm}
        type="text"
      />
      <div className="suggest">
        <SuggestComponent term={searchTerm} />
      </div>
      <div>
        <div className="searchButton">
          <Button>
            <Link to={`/result/${searchTerm}`}>Go</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Search;
