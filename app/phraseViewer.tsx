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
        <div className="bg-gray-100 mx-auto w-3/4 mb-20 rounded-2xl">
            <div><p className="text-black text-2xl mt-2 mx-auto text-center text-wrap">Would you rather see the good news or the bad news?</p></div>
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
        <div className="mx-1 mt-4 mb-24 p-2 flex flex-wrap">
            <div className="bg-white text-black rounded-lg p-1 m-1 ml-4 mr-auto text-center hover:text-blue-600 active:bg-blue-100">
                <button onClick={loadPositivePhrase}>Positive News</button>
            </div>
            <div className="bg-white text-black rounded-lg p-1 m-1 mr-4 ml-auto text-center hover:text-red-600 active:bg-red-100">
                <button onClick={loadNegativePhrase}>Negative News</button>
            </div>
        </div>
        <div className="h-24 flex mt-14">
            <div className="mx-auto">
                <p className="text-black text-center px-1">
                    {loadedPhrase}
                </p>
            </div>
        </div>
        </>
    );

}