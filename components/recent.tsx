
type NewsItem = {
  id: number;
  date: string;
  desc: string;
  title: string;
  url?: string;
};

const news: NewsItem[] = [
  {
    id: 10,
    date: "2026/09/15",
    desc: "詩の鑑賞過程の計算モデルに関する研究が，和文誌「認知科学」に採録されました．J-STAGEにて全文公開されています．",
    title: "亀谷長太，宮本友樹，内海彰：活性拡散ネットワークに基づく詩の鑑賞過程の計算モデル，認知科学，Vol. 33, No. 3, pp. 564-580, 2026",
    url: "https://doi.org/10.11225/cs.2026.036",
  },
  {
    id: 9,
    date: "2026/02/19",
    desc: "第3回 認知科学・社心若手リーグで発表いたします．口頭発表のセッションです（O22）",
    title: "言語芸術の美的効果はなぜ生まれる？—計算論的アプローチで迫る—",
  },
  {
    id: 8,
    date: "2025/12/15",
    desc: "認知科学会誌にCogSci2025参加報告記が掲載されています．",
    title: "",
    url: "https://doi.org/10.11225/cs.2025.051",
  },
  {
    id: 7,
    date: "2025/09/11",
    desc: "第13回認知科学若手の会ワークショップで発表します．ライトニングトークのセッションです．",
    title: "言語芸術の美的効果はなぜ生まれる？—計算論的アプローチで迫る—，ライトニングトークセッション1, LT3",
  },
  {
    id: 6,
    date: "2025/07/30 - 08/03",
    desc: "CogSci2025@サンフランシスコにて発表しました．",
    title: "",
  },
  {
    id: 5,
    date: "2025/04/10",
    desc: "CogSci2025に採択されました（ポスター，フルペーパー）．",
    title: "Kameya,C., Miyamoto,T. and Utsumi,A: A computational model of poetry appreciation based on a spreading activation network and the incongruity resolution theory, Proceedings of the 47th Annual Conference of the Cognitive Science Society (CogSci2025), pp.4318-4323.",
    url: "https://escholarship.org/uc/item/8h91t1nz",
  },
  {
    id: 4,
    date: "2025/04/04",
    desc: "電気通信大学大学院博士後期課程に入学しました．",
    title: "",
  },
  {
    id: 3,
    date: "2025/03/25",
    desc: "電気通信大学大学院博士前期課程を修了しました．修士（工学）が授与されました．",
    title: "",
  },
  {
    id: 2,
    date: "2024/10/12 - 10/14",
    desc: "日本認知科学会第41回大会にて発表しました．",
    title: "亀谷長太，宮本友樹，内海彰: 活性拡散ネットワークとずれの解消理論に基づく詩の鑑賞過程の計算モデル，O-6-4",
  },
  {
    id: 1,
    date: "2024/08/31",
    desc: "サイトを開設しました．",
    title: "",
  },
];

// YYYY/MM/DD形式をローカル日付として解析
function parseStartDate(dateString: string): Date {
  const [year, month, day] = dateString
    .split(" - ")[0]
    .split("/")
    .map(Number);

  return new Date(year, month - 1, day);
}

function formatDate(dateString: string): string {
  return dateString.replaceAll("/", ".");
}

function NewsEntry({ item }: { item: NewsItem }) {
  return (
    <article className="group grid grid-cols-1 gap-3 border-b border-[#D8D5CE] py-7 first:pt-0 sm:grid-cols-[130px_minmax(0,1fr)] sm:gap-8">

      {/* Date */}
      <div>
        <time
          dateTime={parseStartDate(item.date).toLocaleDateString(
            "sv-SE"
          )}
          className="font-mono text-xs tracking-wide text-[#918A80] sm:text-sm"
        >
          {formatDate(item.date)}
        </time>
      </div>

      {/* Content */}
      <div className="min-w-0 space-y-3">

        <p className="text-sm font-medium leading-7 text-[#33312D] sm:text-base">
          {item.desc}
        </p>

        {item.title && (
          <p className="text-sm leading-7 text-[#777168]">
            {item.title}
          </p>
        )}

        {item.url && (
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-b border-[#A79D90] pb-1 text-xs font-medium tracking-wide text-[#675E52] transition-colors duration-200 hover:border-[#242424] hover:text-[#242424] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
          >
            View publication
            <span aria-hidden="true">↗</span>
          </a>
        )}
      </div>
    </article>
  );
}

export default function Recent() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const sortedNews = [...news].sort(
    (a, b) =>
      parseStartDate(b.date).getTime() -
      parseStartDate(a.date).getTime()
  );

  const futureNews = sortedNews.filter(
    (item) => parseStartDate(item.date) > today
  );

  const pastNews = sortedNews.filter(
    (item) => parseStartDate(item.date) <= today
  );

  return (
    <div id="recent" className="w-full scroll-mt-24">

      {/* Archive metadata */}
      {/* <div className="mb-10 flex items-center justify-between gap-4 text-xs text-[#918A80]">
        <span className="font-mono tracking-wide">
          ARCHIVE / NEWS
        </span>
        <span className="font-mono">
          {String(news.length).padStart(2, "0")} ENTRIES
        </span>
      </div> */}

      {/* Upcoming */}
      {futureNews.length > 0 && (
        <section className="mb-14">
          <h2 className="mb-7 text-lg font-medium text-[#242424]">
            Upcoming
          </h2>

          <div className="border-t border-[#B7B1A7]">
            {futureNews.map((item) => (
              <NewsEntry key={item.id} item={item} />
            ))}
          </div>
        </section>
      )}

      {/* Archive */}
      <section>
        {futureNews.length > 0 && (
          <h2 className="mb-7 text-lg font-medium text-[#242424]">
            Archive
          </h2>
        )}

        <div className="border-t border-[#B7B1A7]">
          {pastNews.map((item) => (
            <NewsEntry key={item.id} item={item} />
          ))}
        </div>
      </section>
    </div>
  );
}
