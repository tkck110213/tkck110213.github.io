const Recent = () => {
    const news = [
        // id: 8 を修正: descからHTMLタグを除去し、urlプロパティを追加
        { id: 8, date: "2025/12/15", desc: "認知科学会誌にCogSci2025参加報告記が掲載されています．", title: "", url: "https://doi.org/10.11225/cs.2025.051" },
        { id: 7, date: "2025/09/11", desc: "第13回認知科学若手の会ワークショップで発表します．ライトニングトークのセッションです．", title: "言語芸術の美的効果はなぜ生まれる？—計算論的アプローチで迫る—，ライトニングトークセッション1, LT3" },
        { id: 6, date: "2025/07/30 - 08/03", desc: "CogSci2025@サンフランシスコでポスター発表しました．", title: "Chota Kameya, Tomoki Miyamoto, Akira Utsumi: A computational model of poetry appreciation based on a spreading activation network and the incongruity resolution theory, P2-K-90" },
        { id: 5, date: "2025/04/10", desc: "CogSci2025に採択されました（ポスター，フルペーパー）．", title: "" },
        { id: 4, date: "2025/04/04", desc: "電気通信大学大学院博士後期課程に入学しました．", title: "" },
        { id: 3, date: "2025/03/25", desc: "電気通信大学大学院博士前期課程を修了しました．修士（工学）が授与されました．", title: "" },
        { id: 2, date: "2024/10/12 - 10/14", desc: "日本認知科学会第41回大会にて発表しました．", title: "亀谷長太，宮本友樹，内海彰: 活性拡散ネットワークとずれの解消理論に基づく詩の鑑賞過程の計算モデル，O-6-4" },
        { id: 1, date: "2024/08/31", desc: "サイトを開設しました．", title: "" },
    ];

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const getStartDate = (dateString: string) => new Date(dateString.split(' - ')[0]);

    // 今後の予定と過去のニュースに分類
    // urlプロパティが追加されたため、型定義を更新
    type NewsItemType = { id: number; date: string; desc: string; title: string; url?: string };
    const futureNews: NewsItemType[] = news.filter(item => getStartDate(item.date) >= today);
    const pastNews: NewsItemType[] = news.filter(item => getStartDate(item.date) < today);

    // ニュース項目をレンダリングする共通コンポーネント
    // urlプロパティを追加
    const NewsItem = ({ id, date, desc, title, url }: NewsItemType) => (
        <div key={id} className="space-y-1">
            <div className="ps-2 my-2 first:mt-0">
                <h3 className="text-lg font-medium uppercase text-indigo-900">
                    {date}
                </h3>
            </div>
            <ul className="space-y-1 text-gray-900 list-disc list-inside">
                <li className="list-disc">
                    {desc}
                    {/* urlがあればリンクとして表示 */}
                    {url && (
                        <div className="mt-2 text-sm">
                            <a 
                                href={url} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-blue-600 hover:text-blue-800 underline break-words"
                            >
                                {url}
                            </a>
                        </div>
                    )}
                    {title && (
                        <blockquote className="mt-2 pl-4 py-2 border-l-4 border-gray-300 bg-gray-50">
                            <p className="text-gray-800 italic">{title}</p>
                        </blockquote>
                    )}
                </li>
            </ul>
        </div>
    );

    return (
        <div id="recent" className="scroll-mt-20 flex justify-center mb-16">
            <div className="w-full max-w-4xl">
                <h2 className="text-4xl font-semibold flex justify-center items-center mb-14">NEWS</h2>

                {/* Future Section */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold mb-6 text-left border-b-2 pb-2">今後の予定</h3>
                    <div className="space-y-8">
                        {futureNews.length > 0 ? (
                            futureNews.map(item => <NewsItem {...item} key={item.id} />)
                        ) : (
                            <p className="text-gray-600">今後の予定はありません。</p>
                        )}
                    </div>
                </div>
                {/* Past Section */}
                <div>
                    <h3 className="text-2xl font-bold mb-6 text-left border-b-2 pb-2">アーカイブ</h3>
                    <div className="space-y-8">
                        {pastNews.map(item => <NewsItem {...item} key={item.id} />)}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Recent;
