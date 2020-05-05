import React, { useState, useEffect } from "react";
import { Input, Col } from "reactstrap";
import { baseUrl } from "../shared/BaseUrl.js";

const Search = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchValue, setSearchValue] = useState([]);

  const handleValue = (term) => {
    async function fetchSuggest() {
      const res = await fetch(baseUrl + "api/apps/?suggest=" + term);
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
    }
  };

  useEffect(() => {});

  return (
    <Col>
      <Input type="text" onChange={handleInputChange} value={searchTerm} />
    </Col>
  );
};

export default Search;
