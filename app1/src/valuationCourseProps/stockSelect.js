import { useState  } from "react";
import { useDispatch } from 'react-redux';
import { setApiData } from './actions';
import 'assets/scss/stock-select.css'

const apiKey = "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";
const StockSelector = () => {
    const [stock, setStock] = useState("");
    const [validity, setValidity] = useState("");

    const dispatch = useDispatch();


    async function callOpenAIAPI() {

        const APIBody = {
            "model": "gpt-3.5-turbo",
            "messages": [
              {
                "role": "system",
                "content": "You determine if the user's inputs correspond to a publicly traded company on yahoo finance. Input can be a ticker or name. If it matches, You return: the stock symbol and name; otherwise, You'll return: Not a Valid Stock, and Did you mean: followed by a list of stocks that are similar to the input ",
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
            console.log(data.choices[0].message.content);
            setValidity(data.choices[0].message.content);
            dispatch(setApiData(data.choices[0].message.content));
            
        });
    }
    return (

    <div className="submit-stock-box">
        <h2>Enter the Stock You want to Analyze</h2>
        <form>
            <div className="user-box">
                <textarea 
                    onChange={(e) => setStock(e.target.value)}
                    placeholder="Submit Stock"
                /> 
            </div>
            <div>
                <a>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <button 
                        className="submit-button-reset-style"  
                        type="button" 
                        onClick={callOpenAIAPI}
                    >
                        Submit
                    </button>
                </a>
                {validity !== "" ?
                    <h3> {validity}</h3>
                    :
                    null
                }     
            </div>          
        </form>
    </div>
        
        
    )
}
export default StockSelector;
