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
    if (appList.length !== 0) {
      setAppList(props.appList);
      //console.log(appList);
      const value = appList.filter((app) =>
        app.package_name.toLowercase().includes(searchTerm)
      );

      setSearchValue(value);
    }
  });
  console.log(() => {
    appList.map((app) => app);
  });

  return (
    <Col>
      <Input type="text" onChange={handleInputChange} value={searchTerm} />
    </Col>
  );
};

export default Search;
