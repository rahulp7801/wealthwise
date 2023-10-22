import React from "react"
import { Line } from "react-chartjs-2"

const FutureCashflowChart = ({futureChartData}) => {

      
    return (
        <Line data={futureChartData}  />
    );
};

export default FutureCashflowChart;
