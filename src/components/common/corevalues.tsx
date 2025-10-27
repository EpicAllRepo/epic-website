import { cn } from "@/lib/utils";
import { ReactNode } from "react"; 

interface CoreValuesProp {
 icon?: ReactNode;
title?:string;
desc?:string;
headingsize?:boolean;
boxhoverbar?:boolean;
headinghover?:boolean;
classname?:string;
}
export default function CoreValues({icon, title, desc, headingsize, boxhoverbar, headinghover, classname}:CoreValuesProp) {
    return(
<>
   <div className={cn( classname, "h-full bg-white group border-2 border-black/10 hover:border-[#E53935]/30 p-8 transition-all duration-300 relative overflow-hidden")}>
        {boxhoverbar && <div className="absolute top-0 left-0 w-full h-1 bg-[#E53935] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>}
<div accessKey="svg" className="w-14 h-14 bg-[#E53935] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">{icon}</div>
<h4 className={cn(headingsize ? "text-2xl font-bold text-black mb-4 leading-tight group-hover:text-[#E53935]" : "text-xl font-bold text-black mb-4 leading-tight",
headinghover && "group-hover:text-[#E53935]"

)}>{title}</h4>
<p className="text-gray-600 leading-relaxed font-normal">{desc}</p>
      </div>

</>
    )
}