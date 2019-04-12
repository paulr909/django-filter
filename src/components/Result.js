import React from "react";

const Result = ({journal}) => {
    return (
        <div>
            <li>
        <span>
          <strong>Title:</strong> {journal.title}{" "}
        </span>
                <span>
          <strong>Author:</strong> {journal.author.name}{" "}
        </span>
                <span>
          <strong>Categories:</strong>
                    {journal.categories.map(c => {
                        return <span key={c}>{c} </span>;
                    })}
        </span>
                <span>
          <strong>Publish date:</strong> {journal.publish_date}{" "}
        </span>
                <span>
          <strong>View count:</strong> {journal.views}{" "}
        </span>
                <span>
          <strong>Reviewed: </strong>
                    {`${journal.reviewed}`}{" "}
        </span>
            </li>
            <hr/>
        </div>
    );
};

export default Result;
