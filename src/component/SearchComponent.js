import React, { useState, useEffect } from "react";
import { Input, Col, Button, Row, Form } from "reactstrap";
import { baseUrl } from "../shared/BaseUrl.js";
import { Link } from "react-router-dom";

const Search = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchValue, setSearchValue] = useState([]);

  const handleValue = (term) => {
    async function fetchSuggest() {
      const res = await fetch(baseUrl + "suggest/?q=" + term);
      res.json().then((res) => {
        setSearchValue(res);
      });
    }
    fetchSuggest();
  };
  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    console.log(searchTerm);
    if (searchTerm.length >= 2) {
      handleValue(searchTerm);
      console.log(searchValue);
    }
  };

  useEffect(() => {});

  return (
    <div>
      <div className="search">
        <Input type="text" onChange={handleInputChange} value={searchTerm} />
      </div>
      <div className="searchButton">
        <Button>
          <Link to={`/result/${searchTerm}`}>Go</Link>
        </Button>
      </div>
    </div>
  );
};

export default Search;
