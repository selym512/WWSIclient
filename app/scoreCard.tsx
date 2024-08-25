"use client"

import { Popover } from "flowbite-react";
// import { useState, useEffect } from 'react';




export default function ScoreCard({dailySentiment}){


      
    // function useWindowDimensions() {
    //     const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
      
    //     useEffect(() => {
    //       function handleResize() {
    //         setWindowDimensions(getWindowDimensions());
    //       }
      
    //       window.addEventListener('resize', handleResize);
    //       return () => window.removeEventListener('resize', handleResize);
    //     }, []);
      
    //     return windowDimensions;
    //   }

    //   function getWindowDimensions() {
    //     return {
    //       width: window.innerWidth,
    //       height: window.innerHeight
    //     };
    //   }
      
    //   const { height, width } = useWindowDimensions();
      
      
      
      


    return(
        <Popover trigger="hover" placement="auto" content={
            <div className="w-64 text-sm text-gray-500 dark:text-gray-400">
                <div className="border-b border-gray-200 bg-gray-100 px-3 py-2 dark:border-gray-600 dark:bg-gray-700">
                    <h3 id="default-popover" className="font-semibold text-gray-900 dark:text-white text-center">WWSI Score</h3>
                </div>
                <div className="px-3 py-2 text-center">
                    <p className="text-wrap">This indicates the percentage of today's world news that had positive sentiment according to AWS Comprehend&apos;s AI Sentiment analysis</p>
                </div>
            </div>
            }>
            <div id="popoverContent" className="rounded-md border-dotted border-2 px-3 text-2xl h-40 gap-2 mx-auto mt-5 mb-10 flex flex-col justify-center">
                <div className="object-center mx-auto">
                    <h2 className="font-bold text-black text-3xl text-wrap text-center">Today&apos;s Score</h2>
                </div>
                <div className="object-center mx-auto">
                    <h3 className="underline text-black text-center">{(100 * Number(dailySentiment[dailySentiment.length - 1].value)).toFixed(1)}</h3>
                </div>
            </div>
        </Popover>

    );
}
