import Image from "next/image";
import { ReactNode } from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio"


interface ImageHeadingTextProp {
image:string;
 icon?: ReactNode;
heading?:string;
content?:string;
}
export default function ImageHeadingText({image, icon, heading, content}:ImageHeadingTextProp) {
    return(
        <>
        <div className="group">
            <div className="h-full bg-white rounded-2xl border-2 border-gray-200 hover:border-blue-500 hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                      <AspectRatio ratio={16 / 9} className="bg-muted rounded-none">
      <Image
        src={image}
        alt="Photo by Drew Beamer"
        fill
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      />
    </AspectRatio>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg
                     [&_svg]:w-7 [&_svg]:h-7 [&_svg]:text-white
                    
                    ">{icon}</div>
                </div>

                <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{heading}</h3>
                    <p className="text-gray-600 leading-relaxed font-normal">{content}</p>
                </div>
                <div className="h-1 bg-gradient-to-r from-blue-600 to-indigo-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </div>
        </div>
        </>
    )
}