"use server"
// import Image from "next/image";
// import foundation from "./foundation";
import { Suspense } from "react";
import LineGraph from "./lineGraph";
import ScoreCard from "./scoreCard";
import PhraseViewer from "./phraseViewer";

 




export default async function Home() {


  const {positive, negative, dailySentiment} = await fetch("http://localhost:9080/wwsi/api/dailySentiment", { cache: 'force-cache' }).then((res : any) => res.json());

  let dates = [["Date", "Percent of Positive News"]];

  for (let i = 0; i < dailySentiment.length; i++){
    let day = new Date(Date.parse(dailySentiment[i].date.$date));
    let score = Number(dailySentiment[i].value) * 100
    dates.push([day, score]);
    
  }
  console.log(dates)


  return (
    <div className="bg-white w-screen h-screen py-10">
      <h1 className="text-black text-center text-wrap text-3xl font-bold mx-auto object-center">World Wide Sentiment Indicator</h1>
      <div className="flex flex-col gap-5 mx-auto">
        <ScoreCard dailySentiment={dailySentiment}></ScoreCard>
        <PhraseViewer positive={positive} negative={negative}></PhraseViewer>
        <LineGraph dates={dates}></LineGraph>
      </div>
    </div>
  );
}
