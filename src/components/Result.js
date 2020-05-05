import React from "react";
import moment from "moment";

const Result = ({ item }) => {
  return (
    <div>
      <li>
        <span>
          <strong>Title: </strong>
          {item.title}{" "}
        </span>
        <span>
          <strong>Author: </strong>
          {item.author}{" "}
        </span>
        <span>
          <strong>Categories: </strong>
          {item.categories.map((c) => {
            return <span key={c}>{c} </span>;
          })}{" "}
        </span>
        <span>
          <strong>Publish date: </strong>
          {moment(item.publish_date).format("DD/MM/YYYY")}{" "}
        </span>
        <span>
          <strong>View count: </strong>
          {item.views}{" "}
        </span>
        <span>
          <strong>Reviewed: </strong>
          {`${item.reviewed}`}{" "}
        </span>
      </li>
      <hr />
    </div>
  );
};

export default Result;
