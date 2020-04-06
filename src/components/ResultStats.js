import React from 'react';

const ResultStats = (props) => {
    return (
        <div className="ui message">
            <div className="header">Search Results!</div>
            <div>Found {props.resultCount} articles</div>
        </div>
    );
};

export default ResultStats;

