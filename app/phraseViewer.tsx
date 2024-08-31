"use client"

import { useState } from "react";

export default function PhraseViewer({positive, negative}){

    const positivePhrases = [];
    for (const obj of positive){
        positivePhrases.push(obj.phrase.Phrase);
        
    }
    const negativePhrases = [];
    for (const obj of negative){
        negativePhrases.push(obj.phrase.Phrase);
    }


    return(
        <div className="bg-gray-100 mx-auto w-5/6 sm:w-4/5 mb-20 rounded-md">
            <div><p className="text-black text-3xl font-bold mt-2 mx-auto text-center text-wrap">Would you rather see the good news or the bad news?</p></div>
            <div><PhraseTextField positivePhrases={positivePhrases} negativePhrases={negativePhrases}></PhraseTextField></div>
        </div>
    );

}

export function PhraseTextField({positivePhrases, negativePhrases}){

    const [loadedPhrase, setLoadedPhrase] = useState('');

    function loadNegativePhrase(){
        let temp = negativePhrases.shift();
        setLoadedPhrase(temp);
        negativePhrases.push(temp) 

    }

    function loadPositivePhrase(){
        let temp = positivePhrases.shift();
        setLoadedPhrase(temp);
        positivePhrases.push(temp)
    }

    return(
        <>
        <div className="mx-1 mt-4 mb-24 p-2 sm:flex sm:flex-wrap">
            <div className="bg-white text-black shadow-md font-bold border-solid border-2 border-slate-200 rounded-md p-1 m-1 mx-14 sm:ml-20 sm:mr-auto text-xl text-center hover:text-blue-600 hover:border-blue-100 active:bg-blue-100">
                <button onClick={loadPositivePhrase}>Positive News</button>
            </div>
            <div className="bg-white text-black shadow-md font-bold border-solid border-2 border-slate-200 rounded-md p-1 m-1 mx-14 sm:mr-20 sm:ml-auto text-xl text-center hover:text-red-600 hover:border-red-100 active:bg-red-100">
                <button onClick={loadNegativePhrase}>Negative News</button>
            </div>
        </div>
        <div className="h-28 sm:h-20 flex mt-14">
            <div className="mx-auto">
                <p className="text-black text-xl text-center px-1">
                    {loadedPhrase}
                </p>
            </div>
        </div>
        </>
    );

}