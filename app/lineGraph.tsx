"use client"
import { Chart } from "react-google-charts";


 const options : any = {
    chart: {
      curveType: "function",
      title: "World Wide Sentiment Throughout Time",
      subtitle: "", 
      legend: { position: "bottom" }
    },
    legend: {position:"none"}
  };
  

export default function LineGraph({dates}){


  return (
    <div className="w-5/6 object-center mb-5 mx-auto">
      <Chart
        chartType="Line"
        width="100%"
        height="400px"
        data={dates}
        options={options}
      />
    </div>
  );

}
