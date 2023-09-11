import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import Menu from "./newsMenu";
import NewsGrid from "./newsGrid";
function NewsDisplay() {
    const [items, setItems] = useState([])

    const apiKey = 'CPgjfwDJOutj46KdeJhwtHC2UfQL5Ble';
    const apiData = useSelector((state) => state.apiData); // Accessing the apiData state from Redux

    useEffect(() => {
        const terms = apiData.trim().split(' ');
        const STOCK_SYMBOL = terms[terms.length - 1]
        console.log(STOCK_SYMBOL)
        fetch(`https://api.polygon.io/v2/reference/news?ticker=${STOCK_SYMBOL}&limit=6&apiKey=${apiKey}`)
            .then((res) => res.json())
            .then((data) => {
            setItems(data.results);
            console.log(data.results); // Place console.log inside this block
            })
            .catch((error) => {
            // Handle any potential errors here
            console.error(error);
            });
        }, [apiData]);
    return (
        <div className="news-body">
            <Menu  />
            <NewsGrid items={items}/>
        </div>
    )
}
export default NewsDisplay
