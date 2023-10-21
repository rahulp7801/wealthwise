import { useState, useEffect  } from "react";
import { useDispatch } from 'react-redux';
import { updateStocks  } from './actions';
import 'assets/scss/stock-select.css'
import { Input, Button, Space, ConfigProvider, theme  } from 'antd';
import { useSelector } from 'react-redux';

const apiKey = "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";
const CompetitorSet = () => {
    const [competitorMessage, setCompetitorMessage] = useState("");
    const [tempStock1, setTempStock1] = useState(""); // Temporary state for Stock 1
    const [tempStock2, setTempStock2] = useState(""); // Temporary state for Stock 2
    const [loading, setLoading] = useState(false); // Loading state

    const apiData = useSelector((state) => state.apiData);
    useEffect(() => {
        if (apiData) {
        callOpenAIAPI(apiData);
        // Pass the apiData to the API call function
        }
    }, [apiData]);
    const dispatch = useDispatch();

    const handleSubmit = () => {
      setLoading(true); // Set loading to true when the button is clicked

        // Set the stock values when the submit button is pressed
        setTempStock1(tempStock1);
        setTempStock2(tempStock2);
        dispatch(updateStocks(tempStock1, tempStock2));
        // You can access the values of stock1 and stock2 here to perform further actions.
        console.log('Stock 1:', tempStock1);
        console.log('Stock 2:', tempStock2);
        setTimeout(() => {
          // After 10 seconds, reset the loading state
          setLoading(false);
        }, 10000);
      };
      async function callOpenAIAPI(apiData) {
        // Construct your APIBody using apiData from the Redux store
        const APIBody = {
          "model": "gpt-4",
          "messages": [
            {
              "role": "system",
              "content": "Given a stock, talk about two other publicly traded companies in its industry. Talk about their competition with each other, pros and cons, and mention their stock tickers",
            },
            {
              "role": "user",
              "content": apiData,
            },
          ],
          "temperature": 1,
          "max_tokens": 150,
        }; 
        try {
            const response = await fetch("https://api.openai.com/v1/chat/completions", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + apiKey,
              },
              body: JSON.stringify(APIBody),
            });
        
            const data = await response.json();
            setCompetitorMessage(data.choices[0].message.content)
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        }
    return (
        <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
            <h1>{apiData} Competitors</h1>
            <div>{competitorMessage}</div>
            <h2>This section will talk about two of your company's competitors. Either enter their tickers into the inputs below or use the tickers of your choosing to relatively value your company.</h2>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <ConfigProvider
                theme={{
                  ...theme,
                  algorithm: theme.darkAlgorithm,
                }}
              >
                <Space.Compact style={{ width: '100%' }}>
                  <Input
                    placeholder="Enter Stock 1"
                    value={tempStock1}
                    onChange={(e) => setTempStock1(e.target.value)}
                  />
                  <Input
                    placeholder="Enter Stock 2"
                    value={tempStock2}
                    onChange={(e) => setTempStock2(e.target.value)}
                  />
                  <Button type="primary" onClick={handleSubmit} loading={loading}>
                    Submit
                  </Button>
                </Space.Compact>
              </ConfigProvider>
              </div>
              </div>
    

    )
}
export default CompetitorSet;
