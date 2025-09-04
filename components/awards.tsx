const Awards = () => {
  const awards = [
    { id: 2, date: "2023.3", title: "電気通信大学 学生表彰 高玉研究室"},
    { id: 1, date: "2022.3", title: "沖縄工業高等専門学校専攻科 創造システム工学専攻 優秀賞"},
  ];

  return (
    <div id="awards" className="scroll-mt-20 flex justify-center">
      <div className="w-full max-w-4xl">
        <h2 className="text-4xl font-semibold flex justify-center items-center mb-14">
          Awards
        </h2>
        <div className="mt-15 mb-16 space-y-8">
          {awards.map(({ id, date, title }) => (
            <div key={id} className="flex flex-col"> 
              <div className="w-full bg-white p-6 rounded-xl border border-slate-200 shadow-md">
                <div className="flex items-center justify-between space-x-2 mb-3">
                  <time className="font-semibold text-sm text-slate-500">{date}</time>
                </div>
                <h3 className="font-bold text-slate-800 mb-1">{title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Awards;
