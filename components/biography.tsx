import React from "react"

const Biography = () => {
    const educations = [
        { id: 1, date: "2022/04 -", jp: "電気通信大学情報理工学研究科情報学専攻 修士課程", desc:"内海・宮本研究室にて詩の鑑賞の認知過程の計算モデリングの研究に従事"},
        { id: 2, date: "2020/04 - 2022/03", jp: "沖縄工業高等専門学校専攻科 創造システム工学専攻 情報工学コース", desc: "玉城研究室にてエコーチェンバー現象の計算モデリングの研究に従事"},
        { id: 3, date: "2015/04 - 2020/03", jp: "沖縄工業高等専門学校 メディア情報工学科", desc: ""},
    ];

    return (
        <ol className="relative border-s border-gray-200 dark:border-gray-700"> 
        {educations.map(({id, date, jp, desc}) => (                 
            <li key={id} className="ms-6">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                    <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                    </svg>
                </span>
                <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white"> {jp} </h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"> {date} </time>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400"> {desc} </p>
            </li>
        ))}
        </ol>
    )
}

export default Biography