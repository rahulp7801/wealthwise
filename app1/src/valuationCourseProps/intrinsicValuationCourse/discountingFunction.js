import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
// Problems
// costDebt
// interestExpense
// taxRate: Infinity
// incomeBeforeTax:
// discountRate: NaN
const Discounter = () => {
    const apiData = useSelector((state) => state.apiData);
    const terms = apiData.trim().split(' ');
    // User's Stock
    const STOCK_SYMBOL = terms[terms.length - 1]

    // Initial
    const [incomeStatement, setIncomeStatement] = useState("");
    const [balanceStatement, setBalanceStatement] = useState("");
    // const [profile, setProfile] = useState("");
    const [dividends, setDividends] = useState("");
    const riskFreeRate = 0.0429
    const risk_premium = 0.057
    // WACC / Discount Rate 
    const [equityWeight, setEquityWeight] = useState("");
    const [beta, setBeta] = useState("");
    const [mktCap, setMktCap] = useState("");
    const costEquity = (0.0429 + beta) * 0.057
    const [interestExpense, setInterestExpense] = useState("");
    const [totalDebt, setTotalDebt] = useState("");
    const costDebt = interestExpense / totalDebt;
    const [incomeExpense, setIncomeExpense] = useState("");
    const [incomeBeforeTax, setIncomeBeforeTax] = useState("");
    const taxRate = incomeExpense / incomeBeforeTax;
    const debtWeight = 1 - taxRate
    const weightOfDebt = totalDebt / (totalDebt + mktCap)
    const weightOfEquity = mktCap / (totalDebt + mktCap)
    const discountRate = ((weightOfDebt * costDebt) + (weightOfEquity * costEquity)) * 100;
    // projection
    const [capEx, setCapEx] = useState("")
    const [currentFreeCashFlow, setCurrentFreeCashFlow] = useState("");
    const [pastFreeCashFlow, setPastFreeCashFlow] = useState("");

    const [currentRevenue, setCurrentRevenue] = useState("")
    const [pastRevenue, setPastRevenue] = useState("")
    const [costRevenue, setCostRevenue] = useState("")
    const [grossProfit, setGrossProfit] = useState("")
    const [operatingIncome, setOperatingIncome] = useState("")
    const [netIncome, setNetIncome] = useState("")
    const [weightedAverageShsOut, setWeightedAverageShsOut] = useState("")
    const [eps, setEps] = useState("")
    const [operatingCashFlow, setOperatingCashFlow] = useState("")
    const operatingCashFlowMargin = operatingCashFlow / currentRevenue
    const capitalExpenditureMargin = capEx / currentRevenue
    const grossMargin = grossProfit / currentRevenue
    const operatingMargin = operatingIncome / currentRevenue
    const netMargin = netIncome / currentRevenue
    const discountedFreeCashFlow = freeCashFlow;
    const freeCashFlowMargin = freeCashFlow / currentRevenue
    const revenueGrowthRate = ((currentRevenue - pastRevenue) / currentRevenue) * 100
    const freeCashFlowMarginGrowthRate = ((currentFreeCashFlow - pastFreeCashFlow) / currentFreeCashFlow) * 100
      // '_revenueGrowthRate': ['function:growth_rate', 'revenue'],
    // income statement
    useEffect(() => {
        async function fetchData() {
          try {
            const response = await fetch(`https://financialmodelingprep.com/api/v3/income-statement/${STOCK_SYMBOL}?limit=120&apikey=01e4bab5bf0732e8f24a4de466b692bb`);
            const data = await response.json(); 
            setIncomeStatement(data[0].revenue) 
            setInterestExpense(data[0].interestExpense) 
            setOperatingIncome(data[0].operatingIncome)
            setNetIncome(data[0].netIncome)
            setWeightedAverageShsOut(data[0].weightedAverageShsOut)
            setEps(data[0].eps)
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        }
        fetchData();
      }, [STOCK_SYMBOL]);
      // balance statement
      useEffect(() => {
        async function fetchData() {
          try {
            const response = await fetch(`https://financialmodelingprep.com/api/v3/balance-sheet-statement/${STOCK_SYMBOL}?apikey=01e4bab5bf0732e8f24a4de466b692bb&limit=120`);
            const data = await response.json();   
            console.log(data)
            setBalanceStatement(data[0].cashAndCashEquivalents)
            setTotalDebt(data[0].totalDebt)

          } catch (error) {
            console.error('Error fetching data:', error);
          }
        }
        fetchData();
      }, [STOCK_SYMBOL]);
      //cash flow statement
      useEffect(() => {
        async function fetchData() {
          try {
            const response = await fetch(`https://financialmodelingprep.com/api/v3/cash-flow-statement/${STOCK_SYMBOL}?apikey=01e4bab5bf0732e8f24a4de466b692bb&limit=120`);
            const data = await response.json();   
            console.log(data)
            setCurrentFreeCashFlow(data[0].freeCashFlow)
            setPastFreeCashFlow(data[4].freeCashFlow)
            setCapEx(data[0].capitalExpenditure)
            setOperatingCashFlow(data[0].operatingCashFlow)
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        }
        fetchData();
      }, [STOCK_SYMBOL]);
      //profile
      useEffect(() => {
        async function fetchData() {
          try {
            const response = await fetch(`https://financialmodelingprep.com/api/v3/profile/${STOCK_SYMBOL}?apikey=01e4bab5bf0732e8f24a4de466b692bb`);
            const data = await response.json();   
            console.log(data)
            setBeta(data[0].beta)
            setMktCap(data[0].mktCap)

            
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        }
        fetchData();
      }, [STOCK_SYMBOL]);
      // dividend
      useEffect(() => {
        async function fetchData() {
          try {
            const response = await fetch(`https://financialmodelingprep.com/api/v3/historical-price-full/stock_dividend/${STOCK_SYMBOL}?apikey=01e4bab5bf0732e8f24a4de466b692bb`);
            const data = await response.json();   
            console.log(data)
            setDividends(data.historical[0].dividend)
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
            setEquityWeight(data.results[0].financials.balance_sheet.equity.value)
            setIncomeExpense(data.results[0].financials.income_statement.income_tax_expense_benefit.value)
            setIncomeBeforeTax(data.results[0].financials.income_statement.income_loss_from_continuing_operations_before_tax.value)
            setCurrentRevenue(data.results[0].financials.income_statement.revenues.value)
            setPastRevenue(data.results[0].financials.income_statement.revenues.value)
            setCostRevenue(data.results[0].financials.income_statement.cost_of_revenue.value)
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        }
        fetchData();
      }, [STOCK_SYMBOL]);
      
    return (
        <div>
          <div>
            income_statement: {incomeStatement}
          </div>
          <div>
            balance_sheet: {balanceStatement}
          </div>
          <div>
            cashflowStatement: {cashflowStatement}
          </div>

          <div>
            dividends: {dividends}
          </div>
          <div>
            riskFreeRate: {riskFreeRate}
          </div>
          <div>
            risk_premium: {risk_premium}
          </div>
          <div>
            equityWeight: {equityWeight}
          </div>
          <div>
            beta: {beta}
          </div>
          <div>
            costEquity: {costEquity}
          </div>
          <div>
            costDebt: {costDebt}
          </div>
          <div>
            interestExpense: {interestExpense}
          </div>
          <div>
            totalDebt: {totalDebt}
          </div>
          <div>
            debt weight: {debtWeight}
          </div>
          <div>
            incomeExpense: {incomeExpense}
          </div>
          <div>
            taxRate: {taxRate}
          </div>
          <div>
            incomeBeforeTax: {incomeBeforeTax}
          </div>
          <div>
            discountRate: {discountRate}
          </div>


        </div>
    );
};

export default Discounter;
