
type Publication = {
  id: number;
  date: string;
  title: string;
  authors: string;
  venue: string;
  review: boolean;
  international: boolean;
  journal: boolean;
  url: string;
};

const publications: Publication[] = [
  {
    id: 6,
    date: "2026.9",
    title: "活性拡散ネットワークに基づく詩の鑑賞過程の計算モデル",
    authors: "亀谷長太，宮本友樹，内海彰",
    venue: "認知科学, Vol.33, No.3, pp.564-580.",
    review: true,
    international: false,
    journal: true,
    url: "https://doi.org/10.11225/cs.2026.036",
  },
  {
    id: 5,
    date: "2025.7",
    title: "A computational model of poetry appreciation based on a spreading activation network and the incongruity resolution theory",
    authors: "Chota Kameya, Tomoki Miyamoto, Akira Utsumi",
    venue: "Proceedings of the 47th Annual Meeting of the Cognitive Science Society (CogSci2025)",
    review: true,
    international: true,
    journal: false,
    url: "https://escholarship.org/uc/item/8h91t1nz",
  },
  {
    id: 4,
    date: "2024.10",
    title: "活性拡散ネットワークとずれの解消理論に基づく詩の鑑賞過程の計算モデル",
    authors: "亀谷長太，宮本友樹，内海彰",
    venue: "日本認知科学会第41回大会",
    review: false,
    international: false,
    journal: false,
    url: "https://www.jcss.gr.jp/meetings/jcss2024/proceedings/keyword379.html",
  },
  {
    id: 3,
    date: "2022.11",
    title: "二個体協調における自由度に基づくマルチエージェント逆強化学習",
    authors: "植木駿介，亀谷長太，戸板佳祐，中理怡恒，髙玉圭樹，佐藤寛之",
    venue: "計測自動制御学会 システム・情報部門学術講演会（SSI2022）",
    review: false,
    international: false,
    journal: false,
    url: "",
  },
  {
    id: 2,
    date: "2021.9",
    title: "影響力を持つアカウントを考慮したエコーチェンバー現象モデルの検討",
    authors: "亀谷長太, 玉城龍洋",
    venue: "第74回電気関係学会九州支部連合大会",
    review: false,
    international: false,
    journal: false,
    url: "https://www.jstage.jst.go.jp/article/jceeek/2021/0/2021_59/_article/-char/ja/",
  },
  {
    id: 1,
    date: "2020.3",
    title: "利用環境に応じた歌詞に基づく楽曲推薦システムの検討",
    authors: "亀谷長太，金城篤史, 鈴木大作, 山田親稔",
    venue: "第10回電気学会九州支部高専研究講演会",
    review: false,
    international: false,
    journal: false,
    url: "",
  },
];

function formatDate(date: string): string {
  const [year, month] = date.split(".");
  return `${year}.${month.padStart(2, "0")}`;
}

function PublicationList({ items }: { items: Publication[] }) {
  const sortedItems = [...items].sort((a, b) => {
    const [ay, am] = a.date.split(".").map(Number);
    const [by, bm] = b.date.split(".").map(Number);
    return by * 12 + bm - (ay * 12 + am);
  });

  return (
    <div className="border-t border-[#B7B1A7]">
      {sortedItems.map((item) => (
        <article
          key={item.id}
          className="grid grid-cols-1 gap-3 border-b border-[#D8D5CE] py-8 sm:grid-cols-[130px_minmax(0,1fr)] sm:gap-8"
        >
          {/* Date */}
          <div className="pt-1">
            <time className="font-mono text-xs tracking-wide text-[#918A80]">
              {formatDate(item.date)}
            </time>
          </div>

          {/* Publication details */}
          <div className="min-w-0 space-y-3">

            
            {/* Review status */}
            <span
              className={`inline-flex w-fit items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium ${
                item.review
                  ? "border-[#CBD8CB] bg-[#EAF0E8] text-[#526B56]"
                  : "border-[#D8D5CE] bg-[#EEECE7] text-[#777168]"
              }`}
            >
              <span aria-hidden="true">
                {item.review ? "✓" : "−"}
              </span>
              {item.review ? "査読あり" : "査読なし"}
            </span>


            {/* Title */}
            {item.url ? (
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#A79D90]"
              >
                <h3 className="text-base font-medium leading-7 text-[#242424] transition-colors duration-200 group-hover:text-[#8B735B] sm:text-lg">
                  {item.title}
                  <span
                    className="ml-2 inline-block text-sm text-[#A79D90] transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  >
                    ↗
                  </span>
                </h3>
              </a>
            ) : (
              <h3 className="text-base font-medium leading-7 text-[#242424] sm:text-lg">
                {item.title}
              </h3>
            )}

            {/* Authors */}
            <p className="text-sm leading-6 text-[#777168]">
              {item.authors}
            </p>

            {/* Venue */}
            <p className="text-sm italic leading-6 text-[#918A80]">
              {item.venue}
            </p>
          </div>
        </article>
      ))}
    </div>
  );
}

export default function Archivements() {
  const journalPublications = publications.filter(
    (p) => p.journal
  );

  const internationalPublications = publications.filter(
    (p) => !p.journal && p.international
  );

  const domesticPublications = publications.filter(
    (p) => !p.journal && !p.international
  );

  const sections = [
    {
      number: "01",
      title: "学術論文（Journal Articles）",
      items: journalPublications,
    },
    {
      number: "02",
      title: "国際会議（International Conferences）",
      items: internationalPublications,
    },
    {
      number: "03",
      title: "国内会議（Domestic Conferences）",
      items: domesticPublications,
    },
  ];

  return (
    <div id="publications" className="w-full scroll-mt-24">

      {/* Section metadata */}
      <div className="mb-14 flex items-center justify-between gap-4 text-xs text-[#918A80]">
        <span className="font-mono tracking-wide">
          RESEARCH OUTPUT
        </span>
        <span className="font-mono">
          {String(publications.length).padStart(2, "0")} PUBLICATIONS
        </span>
      </div>

      {/* Sections */}
      <div className="space-y-16">
        {sections
          .filter((section) => section.items.length > 0)
          .map((section) => (
            <section key={section.number}>

              {/* Category heading */}
              <div className="mb-7 flex flex-wrap items-end justify-between gap-3">

                <div className="flex items-center gap-4">
                  <span className="font-mono text-xs text-[#918A80]">
                    {section.number}
                  </span>

                  <h2 className="text-xl font-medium tracking-tight text-[#242424] sm:text-2xl">
                    {section.title}
                  </h2>
                </div>

                <span className="font-mono text-xs text-[#918A80]">
                  {String(section.items.length).padStart(2, "0")} ENTRIES
                </span>
              </div>

              <PublicationList items={section.items} />
            </section>
          ))}
      </div>
    </div>
  );
}
