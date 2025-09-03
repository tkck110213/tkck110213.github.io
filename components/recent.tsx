const Recent = () => {
    const news = [
        { id: 7, date: "2024/09/11", desc: "第13回認知科学若手の会ワークショップにて発表します．ライトニングトークのセッションです．", title: "" },
        { id: 6, date: "2025/07/30 - 08/03", desc: "CogSci2025にてポスター発表しました．", title: "Chota Kameya, Tomoki Miyamoto, Akira Utsumi: A computational model of poetry appreciation based on a spreading activation network and the incongruity resolution theory" },
        { id: 5, date: "2025/04/10", desc: "CogSci2025にてポスター発表でフルペーパー採択されました．", title: "" },
        { id: 4, date: "2025/04/04", desc: "電気通信大学大学院博士後期課程に入学しました．", title: "" },
        { id: 3, date: "2025/03/25", desc: "電気通信大学大学院博士前期課程を修了しました．修士（工学）が授与されました．", title: "" },
        { id: 2, date: "2024/10/12 - 14", desc: "日本認知科学会第41回大会にて発表しました．", title: "亀谷長太，宮本友樹，内海彰: 活性拡散ネットワークとずれの解消理論に基づく詩の鑑賞過程の計算モデル，O-6-4" },
        { id: 1, date: "2024/08/31", desc: "サイトを開設しました．", title: "" },
    ];

    return (
        <div id="recent" className="flex justify-center">
            <div className="w-full max-w-xl">
                <h2 className="text-4xl font-semibold flex justify-center items-center mb-14">NEWS</h2>
                <div className="mt-15 mb-16 space-y-8">
                    {news.map(({ id, date, desc, title }) => (
                        <div key={id} className="space-y-1">
                            <div className="ps-2 my-2 first:mt-0">
                                <h3 className="text-lg font-medium uppercase text-gray-500">
                                    {date}
                                </h3>
                            </div>
                            <ul className="space-y-1 text-gray-800 list-disc list-inside">
                                <li className="list-disc">
                                    {desc}
                                    {title && (
                                        <ul className="list-inside list-circle ml-4">
                                            <li>{title}</li>
                                        </ul>
                                    )}
                                </li>
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Recent;
