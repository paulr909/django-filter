import React from "react";
import Result from "./Result";

const Results = ({ items }) => (
  <ul style={{ listStyleType: "none", maxWidth: "95%", paddingLeft: "5%" }}>
    {items.map((i) => {
      return <Result item={i} key={i.id} />;
    })}
  </ul>
);

export default Results;
