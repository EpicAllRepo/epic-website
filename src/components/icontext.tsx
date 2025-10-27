import { ReactNode } from "react";

interface IconTextProp {
titlename?:string;
name?:string;
 icon?: ReactNode;
url?:string;
}

 export default function IconText({icon, name, titlename, url}:IconTextProp) {
    return (
        <>
        <div className="relative bg-white border border-black/10 p-6 hover:border-[#E53935]/30 transition-all duration-300 group">
        <div className="absolute top-0 left-0 w-full h-1 bg-[#E53935] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
        <div className="flex items-start gap-4">
            <div className="[&_svg]:size-6 [&_svg]:text-white  w-12 h-12 bg-[#E53935] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                {icon}
            </div>

            <div className="flex-1">
<h3 className="text-sm font-semibold text-black mb-2 uppercase tracking-wider">{titlename}</h3>
{url ? <a href={`${url}`} className="text-base text-gray-600 hover:text-[#E53935] transition-colors duration-300 font-normal">{name}</a> : <p className="text-base text-gray-600 hover:text-[#E53935] transition-colors duration-300 font-normal">{name}</p> }


            </div>

        </div>
        </div>
        
        </>
    )
 }