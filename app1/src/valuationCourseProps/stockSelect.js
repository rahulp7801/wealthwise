import { useState } from "react";

const apiKey = "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";
const StockSelector = () => {
    const [stock, setStock] = useState("");
    const [validity, setValidity] = useState("");

    async function callOpenAIAPI() {

        const APIBody = {
            "model": "gpt-3.5-turbo",
            "messages": [
              {
                "role": "system",
                "content": "You determine if the user's inputs correspond to a publicly traded company. Input can be a ticker or name. If it matches, You return: True, the company name, and the stock ticker; otherwise, You'll return: False, Not a Valid Stock. ",
              },
              {
                "role": "user",
                "content": stock,
              }
            ],
            "temperature": 0,
            "max_tokens": 1024
          };
        await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + apiKey 
            },
            body: JSON.stringify(APIBody)
        }).then((data) => {
            return data.json();
        }).then((data) => {
            setValidity(data.choices[0].message.content);
        });
    }
    return (
        <div>
            <div>
                <h1>Enter the Stock You want to Analyze</h1>
                <textarea 
                onChange={(e) => setStock(e.target.value)}
                    placeholder="Submit Stock"
                    cols={50}
                    rows={10}
                />
            </div>
            <div>
                <button onClick={callOpenAIAPI}>Submit</button>
                {validity !== "" ?
                    <h3>This Input Is: {validity}</h3>
                    :
                    null
            }
            </div>
        </div>
    )
}
export default StockSelector;