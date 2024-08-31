"use client"



export default function ScoreCard({dailySentiment}){



    return(
        <>
            <h1 className="text-center text-black text-4xl font-bold">Today's Scores</h1>
            <div className="flex flex-row gap-1 mb-6">
                <div className="ml-auto bg-blue-50 rounded-md border-dotted border-4 px-4 text-2xl h-40 gap-2 mb-10 flex flex-col justify-center">
                    <div className="object-center mx-auto">
                        <h2 className="font-bold text-black text-3xl text-wrap text-center">Positive News</h2>
                    </div>
                    <div className="object-center mx-auto">
                        <h3 className="underline text-black text-center">{(100 * Number(dailySentiment[dailySentiment.length - 1].positiveScore)).toFixed(1)}%</h3>
                    </div>
                </div>
                <div className="mr-auto bg-red-50 rounded-md border-dotted border-4 px-4 text-2xl h-40 gap-2 mb-10 flex flex-col justify-center">
                <div className="object-center mx-auto">
                    <h2 className="font-bold text-black text-3xl text-wrap text-center">Negative News</h2>
                </div>
                <div className="object-center mx-auto">
                    <h3 className="underline text-black text-center">{(100 * Number(dailySentiment[dailySentiment.length - 1].negativeScore)).toFixed(1)}%</h3>
                </div>
                </div>
            </div>
        </>
    )
}
