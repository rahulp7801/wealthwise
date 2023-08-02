import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import Menu from "./newsMenu";
import NewsGrid from "./newsGrid";
function NewsDisplay() {
    const [items, setItems] = useState([])

    const apiKey = '09d814c562654e04b9460c5d8f9594d5';
    const apiData = useSelector((state) => state.apiData); // Accessing the apiData state from Redux

    useEffect(() => {
        // Assuming you have additionalKeyword and sortBy variables defined somewhere in the component
        const sortBy = "relevance";
        
        const pageSize = 3;
        fetch(`https://newsapi.org/v2/everything?q=${apiData}&sortBy=${sortBy}&pageSize=${pageSize}&apiKey=${apiKey}`)
            .then(res => res.json())
            .then(data => setItems(data.articles))
    }, [apiData])
    return (
        <div className="news-body">
            <h1 className="news-title">{apiData} News</h1>
            <Menu  />
            <NewsGrid items={items}/>
        </div>
    )
}
export default NewsDisplay
