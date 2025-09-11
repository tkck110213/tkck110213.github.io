import { FaGithub, FaEnvelope } from 'react-icons/fa';
import { SiZenn, SiGooglescholar } from 'react-icons/si';
import Image from "next/image";

const Biography = () => {
    const educations = [
        {
            id: 1, date: "2025/04 - 現在", jp: "電気通信大学大学院 情報理工学研究科 情報学専攻 博士後期課程",
            lab:"所属：内海・宮本研究室", desc: "研究テーマ：言語芸術の鑑賞プロセス解明に向けた計算論アプローチの確立"
        },
        {
            id: 2, date: "2022/04 - 2025/03", jp: "電気通信大学大学院 情報理工学研究科 情報学専攻 博士前期課程",
            lab:"所属：内海・宮本研究室", desc: "研究テーマ：活性拡散ネットワークとずれの解消理論に基づく詩の鑑賞過程の計算モデル"
        },
        {
            id: 3, date: "2020/04 - 2022/03", jp: "沖縄工業高等専門学校専攻科 創造システム工学専攻 情報工学コース",
            lab: "所属：玉城研究室", desc:"研究テーマ：エコーチェンバー現象の計算モデリング"
        },
        {
            id: 4, date: "2015/04 - 2020/03", jp: "沖縄工業高等専門学校 メディア情報工学科",
            lab: "所属：鈴木研究室", desc: "研究テーマ：利用環境に応じた歌詞に基づく楽曲推薦システムの提案"
        },
    ];

    return (
        <div id="biography" className="scroll-mt-20 flex flex-col items-center p-4">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-slate-800">Educations</h2>
            
            <div className="w-full max-w-3xl">
                {educations.map(({ id, date, jp, lab, desc }) => (
                    // ↓↓↓ タイムラインの各項目。左の線と右のカードで構成
                    <div key={id} className="flex gap-x-5">
                        
                        {/* 左側：タイムラインの線とドット */}
                        <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-indigo-800">
                            <div className="relative z-10">
                                <div className="size-3 rounded-full bg-indigo-900 ring-4 ring-white dark:ring-indigo-900"></div>
                            </div>
                        </div>

                        {/* 右側：日付と詳細カード */}
                        <div className="grow pt-0.5 pb-8">
                            <h3 className="flex gap-x-1.5 font-semibold text-indigo-900">
                                {date}
                            </h3>
                            <div className="mt-4 w-full bg-white p-5 rounded-xl border border-slate-200 shadow-md hover:shadow-lg transition-shadow duration-300">
                                <h4 className="font-bold text-lg text-slate-800">
                                    {jp}
                                </h4>
                                <p className="mt-2 text-base text-slate-600">
                                    {lab}
                                </p>
                                <p className="mt-1 text-sm text-slate-500">
                                    {desc}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Biography;
