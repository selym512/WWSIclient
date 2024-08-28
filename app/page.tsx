"use server"
// import Image from "next/image";
// import foundation from "./foundation";
import LineGraph from "./lineGraph";
import ScoreCard from "./scoreCard";
import PhraseViewer from "./phraseViewer";

 




export default async function Home() {


  const {positive, negative, dailySentiment} = await fetch("http://localhost:9080/wwsi/api/dailySentiment", { cache: 'no-store' }).then((res : any) => res.json());

  let dates = [["Date", "Percent of Positive News"]];

  for (let i = 0; i < dailySentiment.length; i++){
    let day = new Date(Date.parse(dailySentiment[i].date.$date));
    let score = Number(dailySentiment[i].value) * 100
    dates.push([day, score]);
    
  }



  


  return (
    <div className="bg-white w-screen h-screen py-10">
      <h1 className="text-black text-center text-wrap text-4xl font-bold mb-10 p-2 mx-auto object-center">World Wide Sentiment Indicator</h1>
      <div className="flex flex-col gap-5 justify-items-center mx-auto">
        <ScoreCard dailySentiment={dailySentiment}></ScoreCard>
        <div className="border-dotted border-4 rounded-md shrink w-4/5 md:w-1/2 lg:w-2/5 mx-auto mb-10"><p className="p-5 text-center text-black">The <b>World Wide Sentiment Indicator</b> uses AWS Comprehend, a natural language processor powered by machine learning, to create a score for each day. The daily score represents the percentage
          of international news with sentiment that is positive.<br/><br/>The phrases used within this analysis are web scraped from a variety of international news websites. Currently the sources are: AP, BBC, NPR, PBS and Fox News.</p></div>
        <PhraseViewer positive={positive} negative={negative}></PhraseViewer>
        <LineGraph dates={dates}></LineGraph>
      </div>
    </div>
  );
}
