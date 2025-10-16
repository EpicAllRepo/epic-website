import { ReactNode } from "react";
import { LuLightbulb } from "react-icons/lu";

interface CoreValuesProp {
 icon?: ReactNode;
title?:string;
desc?:string;
}
export default function CoreValues({icon, title, desc}:CoreValuesProp) {
    return(
      <div className="bg-white border border-black/10 p-8 text-center hover:border-[#E53935]/30 transition-all duration-300 group">
<div className="w-14 h-14 bg-[#E53935] flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">{icon}</div>
<h4 className="text-xl font-bold text-black mb-3 tracking-tight">{title}</h4>
<p className="text-sm text-gray-600 leading-relaxed font-normal">{desc}</p>
      </div>
    )
}