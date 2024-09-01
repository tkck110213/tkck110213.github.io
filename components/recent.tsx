const Recent = () => {
    const news = [
        { id: 1, date: "2024/08/31", desc: "サイトを開設しました．", title: "" },
        { id: 2, date: "2024/10/12-14", desc: "日本認知科学会第41回大会にて発表いたします．", title: "亀谷長太，宮本友樹，内海彰: 活性拡散ネットワークとずれの解消理論に基づく詩の鑑賞過程の計算モデル，O-6-4" },
    ];

    return (
        <div className="flex justify-center">
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