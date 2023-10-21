import React from "react"
import { Line } from "react-chartjs-2"
import { Chart as ChartJS } from "chart.js/auto";

const FutureCashflowChart = ({futureChartData}) => {

      
    return (
        <Line data={futureChartData}  />
    );
};

export default FutureCashflowChart;
