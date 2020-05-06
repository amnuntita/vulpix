import React, { useState, useEffect } from "react";
import { Input, Col, Button, Row, Form } from "reactstrap";
import { baseUrl } from "../shared/BaseUrl.js";
import { Link } from "react-router-dom";

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
      console.log(searchValue);
    }
  };

  useEffect(() => {});

  return (
    <Form inline>
      <Input type="text" onChange={handleInputChange} value={searchTerm} />
      <Button>
        <Link to={`/result/${searchTerm}`}>Go</Link>
      </Button>
    </Form>
  );
};

export default Search;
