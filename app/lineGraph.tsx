"use client"
import { Chart } from "react-google-charts";


 const options : any = {
    chart: {
      curveType: "function",
      title: "",
      subtitle: "", 
      legend: { position: "bottom" }
    },
    legend: {position:"none"}
  };
  

export default function LineGraph({dates}){


  return (
    <div className="w-full p-4 object-center mb-5 mx-auto">
      <h1 className="text-black text-center">World Wide Sentiment Throughout Time</h1>
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
