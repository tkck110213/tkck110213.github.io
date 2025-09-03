const Archivements = () => {
    const publication = [
        { id: 5, bib: "Chota Kameya, Tomoki Miyamoto, Akira Utsumi: A computational model of poetry appreciation based on a spreading activation network and the incongruity resolution theory, Proceedings of the 47th Annual Meeting of the Cognitive Science Society (CogSci2025) (2025.7)" },
        { id: 4, bib: "亀谷長太，宮本友樹，内海彰：活性拡散ネットワークとずれの解消理論に基づく詩の鑑賞過程の計算モデル，日本認知科学会第41回大会，O-6-4（2024.10）" },
        { id: 3, bib: "植木駿介，亀谷長太，戸板佳祐，中理怡恒，髙玉圭樹，佐藤寛之: 二個体協調における自由度に基づくマルチエージェント逆強化学習，計測自動制御学会 システム・情報部門学術講演会（SSI2022）（2022.11）" },
        { id: 2, bib: "亀谷長太, 玉城龍洋: 影響力を持つアカウントを考慮したエコーチェンバー現象モデルの検討，第74回電気関係学会九州支部連合大会（2021.9）" },
        { id: 1, bib: "亀谷長太，金城篤史, 鈴木大作, 山田親稔: 利用環境に応じた歌詞に基づく楽曲推薦システムの検討，第10回電気学会九州支部高専研究講演会（2020.3）" },
    ];

    return (
        <div id="recent" className="flex justify-center">
            <div className="w-full max-w-xl">
                <h2 className="text-4xl font-semibold flex justify-center items-center mb-14">Publication</h2>
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
