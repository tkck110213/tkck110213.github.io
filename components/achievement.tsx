// 型定義はそのまま
type Publication = {
  id: number;
  date: string;
  title: string;
  authors: string;
  venue: string;
  review: boolean;
  international: boolean;
  url: string;
};

const Archivements = () => {
  const publications: Publication[] = [
    { id: 5, date: "2025.7", title: "A computational model of poetry appreciation based on a spreading activation network and the incongruity resolution theory", authors: "Chota Kameya, Tomoki Miyamoto, Akira Utsumi", 
     venue: "Proceedings of the 47th Annual Meeting of the Cognitive Science Society (CogSci2025)", review: true, international: true, url:"https://escholarship.org/uc/item/8h91t1nz" },
    { id: 4, date: "2024.10", title: "活性拡散ネットワークとずれの解消理論に基づく詩の鑑賞過程の計算モデル", authors: "亀谷長太，宮本友樹，内海彰", 
     venue: "日本認知科学会第41回大会", review: false, international: false, url: "https://www.jcss.gr.jp/meetings/jcss2024/proceedings/keyword379.html" },
    { id: 3, date: "2022.11", title: "二個体協調における自由度に基づくマルチエージェント逆強化学習", authors: "植木駿介，亀谷長太，戸板佳祐，中理怡恒，髙玉圭樹，佐藤寛之", 
     venue: "計測自動制御学会 システム・情報部門学術講演会（SSI2022）", review: false, international: false, url: "" },
    { id: 2, date: "2021.9", title: "影響力を持つアカウントを考慮したエコーチェンバー現象モデルの検討", authors: "亀谷長太, 玉城龍洋", 
     venue: "第74回電気関係学会九州支部連合大会", review: false, international: false, url: "https://www.jstage.jst.go.jp/article/jceeek/2021/0/2021_59/_article/-char/ja/" },
    { id: 1, date: "2020.3", title: "利用環境に応じた歌詞に基づく楽曲推薦システムの検討", authors: "亀谷長太，金城篤史, 鈴木大作, 山田親稔", 
     venue: "第10回電気学会九州支部高専研究講演会", review: false, international: false, url: "" },
  ];

  const reviewedPublications = publications.filter(p => p.international === true);
  const nonReviewedPublications = publications.filter(p => p.international === false);

  const PublicationList = ({ items }: { items: Publication[] }) => (
    <div className="space-y-8">
      {items.map(({ id, date, title, authors, venue, review, url }) => (
        <div key={id} className="flex flex-col">
          <div className="w-full bg-white p-6 rounded-xl border border-slate-200 shadow-md transition-shadow duration-300 hover:shadow-lg">
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
            {/* urlが有効な文字列の場合のみaタグで囲むように、チェックを厳密化 */}
            {url && url.trim() !== '' ? (
              <a href={url} target="_blank" rel="noopener noreferrer" className="group">
                <h3 className="font-bold text-slate-800 mb-1 group-hover:text-blue-600 transition-colors duration-300">{title}</h3>
              </a>
            ) : (
              <h3 className="font-bold text-slate-800 mb-1">{title}</h3>
            )}
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
        <div>
          <h3 className="text-2xl font-semibold text-center mb-8">国際会議</h3>
          <PublicationList items={reviewedPublications} />
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-center mb-8">国内会議</h3>
          <PublicationList items={nonReviewedPublications} />
        </div>
      </div>
    </div>
  );
}

export default Archivements;
