
const Biography = () => {
    const educations = [
        { 
            id: 1, date: "2022/04 - 現在", jp: "電気通信大学大学院 情報理工学研究科 情報学専攻 修士課程", 
            lab:"所属：内海・宮本研究室", desc: "研究テーマ：詩の鑑賞の認知過程の計算モデリング"
        },
        { 
            id: 2, date: "2020/04 - 2022/03", jp: "沖縄工業高等専門学校専攻科 創造システム工学専攻 情報工学コース", 
            lab: "所属：玉城研究室", desc:"研究テーマ：エコーチェンバー現象の計算モデリング"},
        { 
            id: 3, date: "2015/04 - 2020/03", jp: "沖縄工業高等専門学校 メディア情報工学科", lab: "", desc: ""
        },
    ];

    return (
        <div id="biography" className="flex flex-col items-center">
            <h2 className="text-4xl font-semibold mb-14">Educations</h2>
            {educations.map(({ id, date, jp, lab, desc }) => (
                <div key={id} className="w-full max-w-xl">
                    <div className="ps-2 my-2 first:mt-0">
                        <h3 className="text-lg font-medium uppercase text-gray-500">
                            {date}
                        </h3>
                    </div>
    
                    <div className="flex gap-x-3 justify-center">
                        <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200">
                            <div className="size-2 rounded-full bg-gray-400"></div>
                        </div>
    
                        <div className="grow pt-0.5 pb-8">
                            <h3 className="flex gap-x-1.5 font-semibold text-gray-800">
                                {jp}
                            </h3>
                            <p className="mt-1 text-sm text-gray-600">
                                {lab}
                            </p>
                            <p className="mt-1 text-sm text-gray-600">
                                {desc}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Biography