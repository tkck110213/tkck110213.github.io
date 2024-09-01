const Recent = () => {
    const news = [
        { id: 1, desc: "2024/08/31，サイトを開設しました．", title: "" },
        { id: 2, desc: "2024/10/12-14，日本認知科学会第41回大会にて発表いたします．", title: "亀谷長太，宮本友樹，内海彰: 活性拡散ネットワークとずれの解消理論に基づく詩の鑑賞過程の計算モデル，O-6-4" },
    ];

    return (
        <div>
            <h2 className="text-4xl font-semibold flex justify-center items-center mb-14">近況</h2>
            <div className="mt-15 mb-16 flex justify-center">
                <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside">
                    {news.map(({ id, desc, title }) => (
                        <li key={id}>
                            {desc}
                            {title && (
                                <ul className="list-inside list-disc ml-4">
                                    <li>{title}</li>
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Recent;