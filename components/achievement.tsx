const Archivements = () => {
  // ステップ1で提案した、新しい構造のデータ
  const publications = [
    { id: 5, date: "2025.7", title: "A computational model of poetry appreciation based on a spreading activation network and the incongruity resolution theory", authors: "Chota Kameya, Tomoki Miyamoto, Akira Utsumi", venue: "Proceedings of the 47th Annual Meeting of the Cognitive Science Society (CogSci2025)", review: true },
    { id: 4, date: "2024.10", title: "活性拡散ネットワークとずれの解消理論に基づく詩の鑑賞過程の計算モデル", authors: "亀谷長太，宮本友樹，内海彰", venue: "日本認知科学会第41回大会", review: false },
    { id: 3, date: "2022.11", title: "二個体協調における自由度に基づくマルチエージェント逆強化学習", authors: "植木駿介，亀谷長太，戸板佳祐，中理怡恒，髙玉圭樹，佐藤寛之", venue: "計測自動制御学会 システム・情報部門学術講演会（SSI2022）", review: false },
    { id: 2, date: "2021.9", title: "影響力を持つアカウントを考慮したエコーチェンバー現象モデルの検討", authors: "亀谷長太, 玉城龍洋", venue: "第74回電気関係学会九州支部連合大会", review: false },
    { id: 1, date: "2020.3", title: "利用環境に応じた歌詞に基づく楽曲推薦システムの検討", authors: "亀谷長太，金城篤史, 鈴木大作, 山田親稔", venue: "第10回電気学会九州支部高専研究講演会", review: false },
  ];

  const reviewedPublications = publications.filter(p => p.review === true);
  const nonReviewedPublications = publications.filter(p => p.review === false);

  // 論文リストをレンダリングする共通コンポーネント
  const PublicationList = ({ items }) => (
    <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-px before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
      {items.map(({ id, date, title, authors, venue, review }) => (
        <div key={id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
          {/* タイムラインの点 */}
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-hover:bg-slate-400 text-slate-500 group-hover:text-slate-600 transition shadow-lg shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="12" height="12"><path d="M12 6L2 0l2 6-2 6z" /></svg>
          </div>
          
          {/* 論文カード */}
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl border border-slate-200 shadow-md">
            <div className="flex items-center justify-between space-x-2 mb-3">
              <time className="font-semibold text-sm text-slate-500">{date}</time>
              {review ? (
                <span className="text-xs font-semibold inline-flex items-center px-2.5 py-1 rounded-full bg-blue-100 text-blue-800">
                  査読あり
                </span>
              ) : (
                <span className="text-xs font-semibold inline-flex items-center px-2.5 py-1 rounded-full bg-slate-100 text-slate-800">
                  査読なし
                </span>
              )}
            </div>
            <h3 className="font-bold text-slate-800 mb-1">{title}</h3>
            <p className="text-sm leading-relaxed text-slate-600 mb-2">{authors}</p>
            <p className="text-xs italic text-slate-500">{venue}</p>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div id="publications" className="scroll-mt-20 w-full max-w-4xl mx-auto px-4">
      <h2 className="text-4xl font-semibold text-center mb-14">Publications</h2>
      
      <div className="space-y-16">
        {/* 国際会議（査読あり）のセクション */}
        <div>
          <h3 className="text-2xl font-semibold text-center mb-8">国際会議（査読あり）</h3>
          <PublicationList items={reviewedPublications} />
        </div>

        {/* 国内会議（査読なし）のセクション */}
        <div>
          <h3 className="text-2xl font-semibold text-center mb-8">国内会議（査読なし）</h3>
          <PublicationList items={nonReviewedPublications} />
        </div>
      </div>
    </div>
  );
}

export default Archivements;
