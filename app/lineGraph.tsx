"use client"
import corechart, { Chart } from "react-google-charts";
  
export const options : any = {
  chart: {
    curveType: "function",
    title: "",
    subtitle: "", 
    // vAxis: {viewWindowMode: "maximized"},
  },
  

  legend: { position: 'none' }
};

export default function LineGraph({dates}){
  


  return (
    <div className="w-full p-4 object-center mb-5 mx-auto">
      <div className="flex flex-col sm:flex-row justify-items-center justify-center sm:justify-around">
        <div className="flex justify-center sm:justify-normal flex-row"><h1 className="text-black">World Wide Sentiment Throughout Time</h1></div>
        <div className="flex justify-center sm:justify-normal flex-row">
          <div className="bg-blue-600 w-3 h-1 mr-1 rounded self-center"></div><h1 className="text-black">Positive</h1>
          <div className="bg-red-600 ml-3 w-3 h-1 mr-1 rounded self-center"></div><h1 className="text-black">Negative</h1>
        </div>
        </div>
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
