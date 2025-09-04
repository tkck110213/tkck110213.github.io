const Awards = () => {
  const awards = [
    { id: 1, bib: "沖縄工業高等専門学校専攻科 創造システム工学専攻 優秀賞，2022年3月"},
    { id: 2, bib: "電気通信大学 学生表彰 高玉研究室，2023年3月"},
  ];

  return (
    <div id="recent" className="flex justify-center">
      <div className="w-full max-w-4xl">
        <h2 className="text-4xl font-semibold flex justify-center items-center mb-14">
          Awards
        </h2>
        <div className="mt-15 mb-16 space-y-8">
          {/* classNameに "list-decimal" と "list-inside" を追加 */}
          <ul className="list-decimal list-inside space-y-4">
            {awards.map(({ id, bib }) => (
              <li key={id}>
                {bib}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Awards;
