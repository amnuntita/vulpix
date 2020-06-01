import React, { useState, useEffect } from "react";
import SearchComponent from "../../shared/SearchComponent.js";
import ResCard from "./ResCard.js";
//import { baseUrl } from "../../shared/BaseUrl.js";

const ResultComponent = (props) => {
  const [resList, setList] = useState([]);
  const [num, setNum] = useState(false);
  const query = "/search/?q=" + props.query;

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(query);
      res
        .json()
        .then((res) => {
          setList(res.rows);
          return res;
        })
        .then((res) => {
          setNum(res.rowCount);
        });
    }
    fetchData();
  }, [query]);

  return (
    <div>
      <div className="resultSearch">
        <SearchComponent resList={resList} />
      </div>
      <div className="textstyle">
        {num} results for keyword "{props.query}"
      </div>
      <div className="row">
        {resList.map((app) => {
          return <ResCard app={app} />;
        })}
      </div>
    </div>
  );
};

export default ResultComponent;
