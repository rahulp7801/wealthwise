import React from "react";
import { List } from "antd";

function NewsItemFind({ item }) {
    // Extract the relevant data from the item
    const headline = item[1];
    const publisherName = item[0];
    const link = item[3];

    return (
        <List.Item>
            <a href={link} className="article">
                <div className="article-content">
                    <div className="article-source">
                        <span>{publisherName}</span>
                    </div>
                    <div className="article-title">
                        <h2>{headline}</h2>
                    </div>
                </div>
            </a>
        </List.Item>
    );
}

export default NewsItemFind;
