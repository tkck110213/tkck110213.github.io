
type Award = {
  id: number;
  date: string;
  title: string;
  desc: string;
};

const awards: Award[] = [
  {
    id: 2,
    date: "2023.3",
    title: "電気通信大学 学生表彰 高玉研究室",
    desc: "ARLISSに関する一連の活動",
  },
  {
    id: 1,
    date: "2022.3",
    title: "沖縄工業高等専門学校専攻科 優秀賞",
    desc: "学業優秀者として表彰",
  },
];

function formatDate(date: string): string {
  const [year, month] = date.split(".");
  return `${year}.${month.padStart(2, "0")}`;
}

export default function Awards() {
  const sortedAwards = [...awards].sort(
    (a, b) =>
      Number(b.date.split(".")[0]) * 12 +
      Number(b.date.split(".")[1]) -
      (Number(a.date.split(".")[0]) * 12 +
        Number(a.date.split(".")[1]))
  );

  return (
    <div
      id="awards"
      className="w-full scroll-mt-24"
    >
      {/* Section metadata */}
      {/* <div className="mb-10 flex items-center justify-between gap-4 text-xs text-[#918A80]">
        /* {/* <span className="font-mono tracking-wide">
          HONORS & RECOGNITION
        </span> */} */

        <span className="font-mono">
          {String(awards.length).padStart(2, "0")} ENTRIES
        </span>
      </div> */}

      {/* Awards list */}
      <div className="border-t border-[#B7B1A7]">
        {sortedAwards.map((award) => (
          <article
            key={award.id}
            className="grid grid-cols-1 gap-3 border-b border-[#D8D5CE] py-8 first:pt-7 sm:grid-cols-[160px_minmax(0,1fr)] sm:gap-8"
          >
            {/* Date */}
            <div className="pt-1">
              <time className="font-mono text-xs leading-6 tracking-wide text-[#918A80]">
                {formatDate(award.date)}
              </time>
            </div>

            {/* Award details */}
            <div className="min-w-0 space-y-3">

              <h2 className="text-base font-medium leading-7 text-[#242424] sm:text-lg">
                {award.title}
              </h2>

              <p className="text-sm leading-7 text-[#777168]">
                {award.desc}
              </p>

            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
