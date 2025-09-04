const Recent = () => {
    const news = [
        { id: 7, date: "2025/09/11", desc: "第13回認知科学若手の会ワークショップにて発表します．ライトニングトークのセッションです．", title: "言語芸術の美的効果はなぜ生まれる？—計算論的アプローチで迫る—" },
        { id: 6, date: "2025/07/30 - 08/03", desc: "CogSci2025にてポスター発表しました．", title: "Chota Kameya, Tomoki Miyamoto, Akira Utsumi: A computational model of poetry appreciation based on a spreading activation network and the incongruity resolution theory, P2-K-90" },
        { id: 5, date: "2025/04/10", desc: "CogSci2025にてポスター発表でフルペーパー採択されました．", title: "" },
        { id: 4, date: "2025/04/04", desc: "電気通信大学大学院博士後期課程に入学しました．", title: "" },
        { id: 3, date: "2025/03/25", desc: "電気通信大学大学院博士前期課程を修了しました．修士（工学）が授与されました．", title: "" },
        { id: 2, date: "2024/10/12 - 10/14", desc: "日本認知科学会第41回大会にて発表しました．", title: "亀谷長太，宮本友樹，内海彰: 活性拡散ネットワークとずれの解消理論に基づく詩の鑑賞過程の計算モデル，O-6-4" },
        { id: 1, date: "2024/08/31", desc: "サイトを開設しました．", title: "" },
    ];

    const today = new Date();
    // 時刻情報をリセットして、日付のみで比較する
    today.setHours(0, 0, 0, 0);

    // 日付文字列からDateオブジェクトを生成するヘルパー関数
    // "YYYY/MM/DD - YYYY/MM/DD" のような範囲にも対応
    const getStartDate = (dateString) => new Date(dateString.split(' - ')[0]);

    // 今後の予定と過去のニュースに分類
    const futureNews = news.filter(item => getStartDate(item.date) >= today);
    const pastNews = news.filter(item => getStartDate(item.date) < today);

    // ニュース項目をレンダリングする共通コンポーネント
    const NewsItem = ({ id, date, desc, title }) => (
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
    );

    return (
        <div id="recent" className="flex justify-center">
            <div className="w-full max-w-xl">
                <h2 className="text-4xl font-semibold flex justify-center items-center mb-14">NEWS</h2>

                {/* Future Section */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold mb-6 text-left border-b-2 pb-2">Future</h3>
                    <div className="space-y-8">
                        {futureNews.length > 0 ? (
                            futureNews.map(item => <NewsItem {...item} key={item.id} />)
                        ) : (
                            <p className="text-gray-600">今後の予定はありません．</p>
                        )}
                    </div>
                </div>

                {/* Past Section */}
                <div>
                    <h3 className="text-2xl font-bold mb-6 text-left border-b-2 pb-2">Past</h3>
                    <div className="space-y-8">
                        {pastNews.map(item => <NewsItem {...item} key={item.id} />)}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Recent;
