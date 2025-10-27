
import { ReactNode } from "react";


interface OurMissionProp {
 icon?: ReactNode;
title?:string;
desc?:string;
}
export default function OurMission({title, icon, desc}:OurMissionProp) {
    return (
        <>
        <div className="relative bg-white border border-black/10 p-12 group hover:border-[#E53935]/30 transition-all duration-300">
        <div className="absolute top-0 left-0 w-full h-1 bg-[#E53935] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
        <div className="w-16 h-16 bg-[#E53935] flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">{icon}</div>
        <h3 className="text-3xl font-bold text-black mb-6 tracking-tight">{title}</h3>
        <p className="text-lg text-gray-600 leading-relaxed font-normal">{desc}</p>

        </div>
        </>
    )
}
