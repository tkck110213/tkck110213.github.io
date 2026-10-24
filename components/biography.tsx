type Education = {
  id: number;
  date: string;
  jp: string;
  desc: string;
};

const educations: Education[] = [
  {
    id: 1,
    date: "2025/04 - 現在",
    jp: "電気通信大学 大学院情報理工学研究科 情報学専攻 博士後期課程",
    desc: "研究テーマ：言語芸術の鑑賞プロセス解明に向けた計算論アプローチの確立",
  },
  {
    id: 2,
    date: "2022/04 - 2025/03",
    jp: "電気通信大学 大学院情報理工学研究科 情報学専攻 博士前期課程",
    desc: "研究テーマ：活性拡散ネットワークとずれの解消理論に基づく詩の鑑賞過程の計算モデル",
  },
  {
    id: 3,
    date: "2020/04 - 2022/03",
    jp: "沖縄工業高等専門学校 専攻科創造システム工学専攻 情報工学コース",
    desc: "研究テーマ：エコーチェンバー現象の計算モデリング",
  },
  {
    id: 4,
    date: "2015/04 - 2020/03",
    jp: "沖縄工業高等専門学校 メディア情報工学科",
    desc: "研究テーマ：利用環境に応じた歌詞に基づく楽曲推薦システムの提案",
  },
];

function formatPeriod(date: string): string {
  return date
    .replaceAll("/", ".")
    .replace(" - ", " — ")
    .replace("現在", "PRESENT");
}

export default function Biography() {
  return (
    <div
      id="biography"
      className="w-full scroll-mt-24"
    >
      {/* Section metadata */}
      {/* <div className="mb-10 flex items-center justify-between gap-4 text-xs text-[#918A80]">
        <span className="font-mono tracking-wide">
          ACADEMIC BACKGROUND
        </span>

        <span className="font-mono">
          {String(educations.length).padStart(2, "0")} ENTRIES
        </span>
      </div> */}

      {/* Education list */}
      <div className="border-t border-[#B7B1A7]">
        {educations.map((item) => (
          <article
            key={item.id}
            className="grid grid-cols-1 gap-3 border-b border-[#D8D5CE] py-8 first:pt-7 sm:grid-cols-[160px_minmax(0,1fr)] sm:gap-8"
          >
            {/* Period */}
            <div className="pt-1">
              <span className="font-mono text-xs leading-6 tracking-wide text-[#918A80]">
                {formatPeriod(item.date)}
              </span>
            </div>

            {/* Education details */}
            <div className="min-w-0 space-y-3">

              {/* Institution */}
              <h2 className="text-base font-medium leading-7 text-[#242424] sm:text-lg">
                {item.jp}
              </h2>

              {/* Research */}
              <p className="text-sm leading-7 text-[#777168]">
                {item.desc}
              </p>

            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
