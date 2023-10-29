import React, { useState, useEffect } from "react";
import NewsItemFind from "./newsItemFind";
import { List } from "antd";


function NewsDisplayFind() {
    const [items, setItems] = useState([]);

    const fetchData = () => {
        fetch('http://localhost:5000/api/get-news-data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({}),
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            setItems(data);
        })
        .catch((error) => {
            console.error(error);
        });
    };

    useEffect(() => {
        // Fetch data when the component loads
        fetchData();
    }, []);

    return (
        <div className="news-body">
            <List
                dataSource={items}
                renderItem={(item, index) => (
                    <NewsItemFind key={index} item={item} />
                )}
            />
        </div>
    );
}

export default NewsDisplayFind;






