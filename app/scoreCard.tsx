"use client"



export default function ScoreCard({dailySentiment}){



    return(
            <div className="rounded-md border-dotted border-4 px-4 text-2xl h-40 gap-2 mx-auto mt-5 mb-10 flex flex-col justify-center">
                <div className="object-center mx-auto">
                    <h2 className="font-bold text-black text-3xl text-wrap text-center">Today&apos;s Score</h2>
                </div>
                <div className="object-center mx-auto">
                    <h3 className="underline text-black text-center">{(100 * Number(dailySentiment[dailySentiment.length - 1].value)).toFixed(1)}%</h3>
                </div>
            </div>
    )
}
