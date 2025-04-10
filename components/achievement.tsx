const Archivements = () => {
    const publication = [
        { id: 1, bib: "亀谷長太，宮本友樹，内海彰：活性拡散ネットワークとずれの解消理論に基づく詩の鑑賞過程の計算モデル，日本認知科学会第41回大会，O-6-4（2024.10）" },
    ];

    return (
        <div id="recent" className="flex justify-center">
            <div className="w-full max-w-xl">
                <h2 className="text-4xl font-semibold flex justify-center items-center mb-14">publication</h2>
                <div className="mt-15 mb-16 space-y-8">
                    {publication.map(({id, bib}) => (
                        <div key={id} className="space-y-1">
                                <ol className="list-inside list-circle ml-4">
                                    {bib}
                                </ol>
                        </div>
                    ))}
                 </div>
            </div>
        </div>
    );
}

export default Archivements;