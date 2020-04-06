import React from 'react';
import NewsItem from './NewsItem';

const NewsList = (props) => {
    const newsItems = props.newsItems.map((newsItem, index) => {
        return <NewsItem key={newsItem.source.id + '_' + index} newsDetails={newsItem} />
    });

    return (
        <div className="ui items">
            {newsItems}
        </div>
    );
}

export default NewsList;