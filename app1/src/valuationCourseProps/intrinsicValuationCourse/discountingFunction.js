import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { linearRegression} from 'simple-statistics'
import HistoricalCashflowChart from './historicalCashflowChart';
import FutureCashflowChart from './futureCashflowChart';

const Discounter = () => {
    const apiData = useSelector((state) => state.apiData);
    const terms = apiData.trim().split(' ');
    // User's Stock
    const STOCK_SYMBOL = terms[terms.length - 1]
    // // Initial
    // // WACC / Discount Rate 
    const [beta, setBeta] = useState("");
    
    const [mktCap, setMktCap] = useState("");
    const costEquity = (0.0429 + beta) * 0.057
    const [interestExpense, setInterestExpense] = useState("");
    const [totalDebt, setTotalDebt] = useState("");
    const costDebt = interestExpense / totalDebt;
    const [incomeExpense, setIncomeExpense] = useState("");
    const [incomeBeforeTax, setIncomeBeforeTax] = useState("");
    const taxRate = incomeExpense / incomeBeforeTax;

    const weightOfDebt = totalDebt / (totalDebt + mktCap)
    const weightOfEquity = mktCap / (totalDebt + mktCap)
    const discountRate = ((weightOfDebt * costDebt) + (weightOfEquity * costEquity)) * (1 - taxRate);
    // projection
    const [cashAndShortTermInvestments, setCashAndShortTermInvestments] = useState("");
    const [currentFreeCashFlow, setCurrentFreeCashFlow] = useState("");
    const [freeCashFlow2018, setFreeCashFlow2018] = useState("");
    const [freeCashFlow2019, setFreeCashFlow2019] = useState("");
    const [freeCashFlow2020, setFreeCashFlow2020] = useState("");
    const [freeCashFlow2021, setFreeCashFlow2021] = useState("");
    const freeCashFlowDF = [
      [ 2018, freeCashFlow2018 ],
      [ 2019, freeCashFlow2019 ],
      [ 2020, freeCashFlow2020 ],
      [ 2021, freeCashFlow2021 ],
      [ 2022, currentFreeCashFlow ],
    ];
    console.log("freecaashflowDF", freeCashFlowDF)
    const result = linearRegression(freeCashFlowDF);
    console.log("result", result)

    const slope = result.m;
    const intercept = result.b;
    const futureYears = [2023, 2024, 2025, 2026, 2027];
    const forecastCashFlow = (year) => {
      // y = mx + b, where y is the forecasted cashflow
      const forecastedCashFlow = slope * year + intercept;
      console.log("forecastedCashFlow", forecastedCashFlow)
      return forecastedCashFlow;
    };
    // Calculate and log the forecasted cashflows for each future year
    const forecastedCashFlows = futureYears.map((year) => {
      const forecastedCashFlow = forecastCashFlow(year);
      return  [year, forecastedCashFlow] ;
    });
    console.log(forecastedCashFlows)

    // const array = [
    //   [2023, 118765900000],
    //   [2024, 131636000000],
    //   [2025, 144506100000],
    //   [2026, 157376200000],
    //   [2027, 170246300000],
    // ];
  
    

    const discountedCashFlows = freeCashFlowDF.map(([year, cashFlow]) => {
      // Calculate the present value for each cash flow
      const presentValue = cashFlow / Math.pow(1 + discountRate, year - 2018);
    
      return [year, presentValue];
    });
    const cashArray = discountedCashFlows[4]
    const year5Cash = cashArray[1]
    const totalDiscountedCashFlow = discountedCashFlows.reduce(
      (accumulator, [, presentValue]) => accumulator + presentValue,
      0
    );
    
    const [weightedAverageShsOut, setWeightedAverageShsOut] = useState("")
    const [eps2022, setEps2022] = useState("")
    const [eps2021, setEps2021] = useState("")
    const [eps2020, setEps2020] = useState("")
    const [eps2019, setEps2019] = useState("")
    const [eps2018, setEps2018] = useState("")
    const growthEPS = [
      [ 2018, eps2018 ],
      [ 2019, eps2019 ],
      [ 2020, eps2020 ],
      [ 2021, eps2021 ],
      [ 2022, eps2022 ],
    ];
   
    const resultEPS = linearRegression(growthEPS);
    // const perpetualGrowthRate = resultEPS.m;
    const perpetualGrowthRate = 0.0449;
    console.log(resultEPS)
    const terminalValue = (year5Cash * (1 + perpetualGrowthRate)) / (discountRate - perpetualGrowthRate)
    const discountedTerminalValue = terminalValue / Math.pow(1 + discountRate, 5)
    const projectedEnterpriseValue = discountedTerminalValue + totalDiscountedCashFlow
    const equityValue = projectedEnterpriseValue + cashAndShortTermInvestments - totalDebt

    const dcfValue = equityValue / weightedAverageShsOut
    // // income statement
    useEffect(() => {
        async function fetchData() {
          try {
            const response = await fetch(`https://financialmodelingprep.com/api/v3/income-statement/${STOCK_SYMBOL}?limit=120&apikey=01e4bab5bf0732e8f24a4de466b692bb`);
            const data = await response.json(); 
            setInterestExpense(data[0].interestExpense) 

            setWeightedAverageShsOut(data[0].weightedAverageShsOut)
            setEps2022(data[0].eps)
            setEps2021(data[1].eps)
            setEps2020(data[2].eps)
            setEps2019(data[3].eps)
            setEps2018(data[4].eps)

          } catch (error) {
            console.error('Error fetching data:', error);
          }
        }
        fetchData();
      }, [STOCK_SYMBOL]);
    //   // balance statement
      useEffect(() => {
        async function fetchData() {
          try {
            const response = await fetch(`https://financialmodelingprep.com/api/v3/balance-sheet-statement/${STOCK_SYMBOL}?apikey=01e4bab5bf0732e8f24a4de466b692bb&limit=120`);
            const data = await response.json();   
            setTotalDebt(data[0].totalDebt)
            setCashAndShortTermInvestments(data[0].cashAndShortTermInvestments)
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        }
        fetchData();
      }, [STOCK_SYMBOL]);
    //   //cash flow statement
      useEffect(() => {
        async function fetchData() {
          try {
            const response = await fetch(`https://financialmodelingprep.com/api/v3/cash-flow-statement/${STOCK_SYMBOL}?apikey=01e4bab5bf0732e8f24a4de466b692bb&limit=120`);
            const data = await response.json();   
            setCurrentFreeCashFlow(data[0].freeCashFlow)
            setFreeCashFlow2019(data[3].freeCashFlow)
            setFreeCashFlow2020(data[2].freeCashFlow)
            setFreeCashFlow2018(data[4].freeCashFlow)
            setFreeCashFlow2021(data[1].freeCashFlow)

            // setCapEx(data[0].capitalExpenditure)
            // setOperatingCashFlow(data[0].operatingCashFlow)
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        }
        fetchData();
      }, [STOCK_SYMBOL]);
    //   //profile
      useEffect(() => {
        async function fetchData() {
          try {
            const response = await fetch(`https://financialmodelingprep.com/api/v3/profile/${STOCK_SYMBOL}?apikey=01e4bab5bf0732e8f24a4de466b692bb`);
            const data = await response.json();   
            setBeta(data[0].beta)
            setMktCap(data[0].mktCap)

            
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        }
        fetchData();
      }, [STOCK_SYMBOL]);

      // equity weight
      useEffect(() => {
        async function fetchData() {
          try {
            const response = await fetch(`https://api.polygon.io/vX/reference/financials?ticker=${STOCK_SYMBOL}&apiKey=CPgjfwDJOutj46KdeJhwtHC2UfQL5Ble`);
            const data = await response.json(); 
            
            setIncomeExpense(data.results[1].financials.income_statement.income_tax_expense_benefit.value)
            setIncomeBeforeTax(data.results[1].financials.income_statement.income_loss_from_continuing_operations_before_tax.value)
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        }
        fetchData();
      }, [STOCK_SYMBOL]);
      // graph stuff
      const [historicalData, setHistoricalData] = useState({
        labels: [],
        datasets: [
          {
            label: "Cashflow",
            data: [],
          },
        ],
      });
    
      // Update UserData whenever any of the freeCashFlow variables change
      useEffect(() => {
        const updatedHistoricalData = freeCashFlowDF.map(([year, cashflow], index) => ({
          id: index + 1,
          year,
          cashflow,
        }));
    
        setHistoricalData({
          labels: freeCashFlowDF.map(([year]) => year),
          datasets: [
            {
              label: "Cashflow",
              data: updatedHistoricalData.map((data) => data.cashflow),
            },
          ],
        });
      }, [freeCashFlow2018, freeCashFlow2019, freeCashFlow2020, freeCashFlow2021, currentFreeCashFlow]);

      const calculateForecastedCashFlows = () => {
        const result = linearRegression(freeCashFlowDF);
        console.log("result2", result)
        const slope = result.m;
        const intercept = result.b;
        const futureYears = [2023, 2024, 2025, 2026, 2027];
    
        const forecastedCashFlowsCharting = futureYears.map((year) => {
          const futureCashFlow = (slope * year) + intercept;
          return futureCashFlow;
        });
        console.log("forecastedCashFlowsCharting", forecastedCashFlowsCharting);
        return forecastedCashFlowsCharting;
      };
    
      // Initialize forecastedCashFlows
      const [forecastedCashFlowsCharting, setForecastedCashFlowsCharting] = useState(calculateForecastedCashFlows());
    
      // Define the userData state and setUserData function
      const [forecastedCashFlowsChart, setForecastedCashFlowsChart] = useState({
        labels: [2023, 2024, 2025, 2026, 2027],
        datasets: [
          {
            label: "Cashflow",
            data: forecastedCashFlowsCharting, // Use forecastedCashFlowsCharting directly
          },
        ],
      });
    
      // Update UserData whenever any of the freeCashFlow variables or forecastedCashFlows change
      useEffect(() => {
        const updatedForecastedCashFlowsChart = forecastedCashFlowsCharting.map((cashflow, index) => ({
          id: index + 1,
          cashflow,
        }));
    
        setForecastedCashFlowsChart({
          labels: [2023, 2024, 2025, 2026, 2027],
          datasets: [
            {
              label: "Cashflow",
              data: updatedForecastedCashFlowsChart.map(({ cashflow }) => cashflow),
            },
          ],
        });
      }, [freeCashFlow2018, freeCashFlow2019, freeCashFlow2020, freeCashFlow2021, currentFreeCashFlow]);
    
      console.log("forecastedCashFlowsChart", forecastedCashFlowsChart);
    

      
    return (
        <div>
          <div className="card-body">
                <div className='card2'>
                    <div className='card2-content'>
                      <div>
                        <h1 style={{textAlign:'center'}}>Discounted Cash Flow (DCF) Valuation</h1>
                        
                        <h2 style={{textAlign:'center'}}>Part 1: Determining the Discount Rate or WACC (Weighted Average Cost of Capital)</h2>

                        <p style={{textAlign:'center'}}><strong>Step 1: Get the Cost of Equity</strong></p>
                        <p>Explanation: Cost of equity represents the return expected by equity investors.</p>
                        <p>Formula: Cost of Equity = (Risk-Free Rate + Beta) * Market Premium</p>
                        <p>Risk Free Rate: 0.429</p>
                        <p>Beta: {beta} </p> 
                        <p>Market Premium: 0.057 </p>
                        <p>Cost of Equity: ${costEquity}</p>
                        <p style={{textAlign:'center'}}><strong>Step 2: Get the Cost of Debt</strong></p>
                        <p>Explanation: Cost of debt represents the cost of borrowing for the company.</p>
                        <p>Formula: Cost of Debt = Interest Expense / Total Debt</p>
                        <p>Interest Expense: ${interestExpense}</p>
                        <p>Total Debt: ${totalDebt}</p>
                        <p>Cost of Debt: ${costDebt}</p>
                        <p style={{textAlign:'center'}}><strong>Step 3: Get Tax Rate</strong></p>
                        <p>Explanation: Tax rate adjusts cash flows for taxes.</p>
                        <p>Formula: Tax Rate = Income Tax Expense / Income Before Tax</p>
                        <p>Income Tax Expense: ${incomeExpense}</p>
                        <p>Income Before Tax: ${incomeBeforeTax}</p>
                        <p>Tax Rate: {taxRate}</p>
                        <p style={{textAlign:'center'}}><strong>Step 4: Calculate Weight of Debt</strong></p>
                        <p>Explanation: Weight of debt shows the proportion of debt in the capital structure.</p>
                        <p>Formula: Weight of Debt = Total Debt / (Total Debt + Market Capitalization)</p>
                        <p>Total Debt: ${totalDebt}</p>
                        <p>Market Capitalization: ${mktCap}</p>
                        <p>Weight of Debt: ${weightOfDebt}</p>
                        <p style={{textAlign:'center'}}><strong>Step 5: Calculate Weight of Equity</strong></p>
                        <p>Explanation: Weight of equity shows the proportion of equity in the capital structure.</p>
                        <p>Formula: Weight of Equity = Market Capitalization / (Total Debt + Market Capitalization)</p>
                        <p>Market Capitalization: ${mktCap}</p>
                        <p>Total Debt: ${totalDebt}</p>
                        <p>Weight of Equity: ${weightOfEquity}</p>
                        <p style={{textAlign:'center'}}><strong>Step 6: Calculate Discount Rate</strong></p>
                        <p>Explanation: The discount rate is the weighted average of cost of debt and cost of equity, adjusted for the tax rate.</p>
                        <p>Formula: Discount Rate = ((Weight of Debt * Cost of Debt) + (Weight of Equity * Cost of Equity)) * (1 - Tax Rate)</p>
                        <p>Weight of Debt: ${weightOfDebt}</p>
                        <p>Cost of Debt: ${costDebt}</p>
                        <p>Weight of Equity: ${weightOfEquity}</p>
                        <p>Cost of Equity: ${costEquity}</p>
                        <p>Discount Rate: {discountRate}</p>

                        <h2 style={{textAlign:'center'}}>Part 2: Project and Discount Cash Flows</h2>

                        <p style={{textAlign:'center'}}><strong>Step 1: Get 5 Years of Historical Data Cash Flows</strong></p>
                        <HistoricalCashflowChart chartData={historicalData} />
                        <p style={{textAlign:'center'}}><strong>Step 2: Use Linear Regression to Project Next 5 Years of Cash Flows</strong></p>
                        <FutureCashflowChart futureChartData={forecastedCashFlowsChart} />

                        <p style={{textAlign:'center'}}><strong>Step 3: Discount Each Future Year with the Discount Rate</strong></p>

                        <p style={{textAlign:'center'}}><strong>Step 4: Calculate Terminal Value</strong></p>
                        <p>Explanation: Terminal value represents the value beyond the projection period.</p>
                        <p>Formula: Terminal Value = (Year 5 Cash Flow * (1 + Perpetual Growth Rate)) / (Discount Rate - Perpetual Growth Rate)</p>
                        <p>Year 5 Cash Flow: ${year5Cash}</p>
                        <p>Perpetual Growth Rate: {perpetualGrowthRate}</p>
                        <p>Discount Rate: {discountRate}</p>
                        <p>Terminal Value: ${terminalValue}</p>
                        <p> </p>
                        <p style={{textAlign:'center'}}><strong>Step 5: Discount Terminal Value</strong></p>
                        <p>Explanation: Discount terminal value back to its present value.</p>
                        <p>Formula: Discounted Terminal Value = Terminal Value / (1 + Discount Rate)^5</p>
                        <p>Terminal Value: ${terminalValue}</p>
                        <p>Discount Rate: ${discountRate}</p>
                        <p></p>
                        <p style={{textAlign:'center'}}><strong>Step 6: Calculate Projected Enterprise Value</strong></p>
                        <p>Explanation: Projected enterprise value is the sum of discounted terminal value and total discounted cash flows.</p>
                        <p>Formula: Projected Enterprise Value = Discounted Terminal Value + Total Discounted Cash Flow</p>
                        <p>Discounted Terminal Value: ${discountedTerminalValue}</p>
                        <p>Total Discounted Cash Flow: ${totalDiscountedCashFlow}</p>
                        <p>Projected Enterprise Value: ${projectedEnterpriseValue}</p>
                        <p style={{textAlign:'center'}}><strong>Step 7: Calculate Equity Value</strong></p>
                        <p>Explanation: Equity value is projected enterprise value adjusted for cash and short-term investments minus total debt.</p>
                        <p>Formula: Equity Value = Projected Enterprise Value + Cash and Short-Term Investments - Total Debt</p>
                        <p>Projected Enterprise Value: ${projectedEnterpriseValue}</p>
                        <p>Cash and Short Investments: ${cashAndShortTermInvestments}</p>
                        <p>Total Debt: ${totalDebt}</p>
                        <p style={{textAlign:'center'}}><strong>Step 8: Calculate Estimated DCF Value</strong></p>
                        <p>Explanation: DCF value is the equity value divided by weighted average shares outstanding, providing an intrinsic value per share.</p>
                        <p>Formula: DCF Value = Equity Value / Weighted Average Shares Outstanding</p>
                        <p>Equity Value: ${equityValue}</p>
                        <p>Weighted Average Shares Outstanding: {weightedAverageShsOut}</p>
                        <p>DCF Value: ${dcfValue}</p>
                      </div>
                    </div>
                </div>
                <div className="gap2"></div>
            </div>
        </div>
    );
};

export default Discounter;
