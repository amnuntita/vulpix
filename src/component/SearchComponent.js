import React, { useState, useEffect } from "react";
import { Input, Col } from "reactstrap";

const Search = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchValue, setSearchValue] = useState([]);
  const [appList, setAppList] = useState([]);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    if (appList) {
      setAppList(props.appList);
    }
  });

  return (
    <Col>
      <Input type="text" onChange={handleInputChange} value={searchTerm} />
    </Col>
  );
};

export default Search;
