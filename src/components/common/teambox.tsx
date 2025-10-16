import Image from "next/image";

interface TeamBoxProp {
    image:string;
    name:string;
    role?:string;
}
export default function TeamBox({image, name, role}:TeamBoxProp) {
    return(
        <>
        <div className="group">
            <div className="relative bg-white border border-black/10 overflow-hidden hover:border-[#E53935]/30 transition-all duration-300">
            <div className="absolute top-0 left-0 w-full h-1 bg-[#E53935] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            <div className="aspect-square relative overflow-hidden">
                <Image src={image} alt={name} fill className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" />
            </div>
            
<div className="p-6 text-center">
<h3 className="text-xl font-bold text-black mb-2 tracking-tight">
    {name}
</h3>
<p className="text-sm text-[#E53935] font-semibold uppercase tracking-wider">{role}</p>
</div>


            </div>
        </div>
        
        </>
    )
}