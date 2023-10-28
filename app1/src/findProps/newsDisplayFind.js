import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import MenuFind from "./newsMenuFind";
import NewsGridFind from "./newsGridFind";
function NewsDisplayFind() {
    const [items, setItems] = useState([])

    // const apiKey = 'CPgjfwDJOutj46KdeJhwtHC2UfQL5Ble';
    // const apiData = useSelector((state) => state.apiData); // Accessing the apiData state from Redux

    useEffect(() => {
        fetch('/api/news')  // Replace with the actual endpoint URL
            .then((res) => res.json())
            .then((data) => {
                setItems(data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <div className="news-body">
            <Menu  />
            <NewsGrid items={items}/>
        </div>
    )
}
export default NewsDisplayFind
