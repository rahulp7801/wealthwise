import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import Menu from "./newsMenu";
import NewsGrid from "./newsGrid";
function NewsDisplay() {
    const [items, setItems] = useState([])
    const [active, setActive] = useState(1)
    const [category, setCategory] = useState("financial")
    const apiKey = '09d814c562654e04b9460c5d8f9594d5';
    const apiData = useSelector((state) => state.apiData); // Accessing the apiData state from Redux

    useEffect(() => {
        // Assuming you have additionalKeyword and sortBy variables defined somewhere in the component
        const sortBy = "relevance";
        const pageSize = 6;
        fetch(`https://newsapi.org/v2/everything?q=${apiData}+${category}&sortBy=${sortBy}&pageSize=${pageSize}&apiKey=${apiKey}`)
            .then(res => res.json())
            .then(data => setItems(data.articles))
    }, [apiData])
    return (
        <div className="news-body">
            <h1 className="news-title">{apiData} News</h1>
            <Menu active={active} setActive={setActive} setCategory={setCategory} />
            <NewsGrid items={items}/>
        </div>
    )
}
export default NewsDisplay
