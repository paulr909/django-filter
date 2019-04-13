import React from 'react';
import moment from 'moment'


const Result = ({journal}) => {
    return (
        <div>
            <li>
        <span>
          <strong>Title: </strong>{journal.title}{" "}
        </span>
                <span>
          <strong>Author: </strong>{journal.author.name}{" "}
        </span>
                <span>
          <strong>Categories: </strong>
                    {journal.categories.map(c => {
                        return <span key={c}>{c} </span>;
                    })}
        </span>
                <span>
          <strong>Publish date: </strong>{moment(journal.publish_date).format('DD-MM-YYYY')}{" "}

        </span>
                <span>
          <strong>View count: </strong>{journal.views}{" "}
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
