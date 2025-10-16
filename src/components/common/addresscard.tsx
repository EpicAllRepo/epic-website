"use client";
import Image from "next/image";
import { FiMail, FiPhone } from "react-icons/fi";
import { HiOutlineClock } from "react-icons/hi2";
import { LuMapPin } from "react-icons/lu";

interface AddressCardProp {
    name:string;
    location?:string;
    Address?:string;
    Phone?:string;
    Email?:string;
BusinessHours?:string;
bg:string;
}

export default function AddressCard({name, location, Phone, Email, BusinessHours, Address, bg }:AddressCardProp) {
    return (
       <div className="bg-white border-2 border-black/10 overflow-hidden font-[inter]">
        <div className="relative h-64 overflow-hidden group">
            <Image src={bg} alt={name} fill className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

        <div className="absolute bottom-6 left-6 bg-white px-5 py-3 flex items-center gap-3 shadow-lg">
            <div className="w-2 h-2 bg-[#E53935] rounded-full animate-pulse"></div>
           <div>
             <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Now Viewing</p>
            <p className="text-base font-bold text-black font-[inter]">{name}</p>
           </div>
        </div>
        </div>

<div className="p-8 space-y-6">
<div>
    <h4 className="text-2xl font-bold text-black tracking-tight mb-1">{name}</h4>
<p className="text-base text-gray-500 font-normal">{location}</p>
</div>

<div className="space-y-4 pt-4 border-t border-black/10">

<div className="flex items-start gap-4">
    <div className="w-10 h-10 bg-[#E53935]/10 flex items-center justify-center flex-shrink-0">
    <LuMapPin className=" w-5 h-5 text-[#E53935]" /></div>
    <div className="flex-1">
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Address</p>
        <p className="text-base text-black font-normal leading-relaxed">{Address}</p>
    </div>
</div>
<div className="flex items-start gap-4">
    <div className="w-10 h-10 bg-[#E53935]/10 flex items-center justify-center flex-shrink-0">
    <FiPhone  className=" w-5 h-5 text-[#E53935]" /></div>
    <div className="flex-1">
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Phone</p>
       <a href={`tel:${Phone}`} className="text-base text-black font-normal leading-relaxed">{Phone}</a>
    </div>
</div>
<div className="flex items-start gap-4">
    <div className="w-10 h-10 bg-[#E53935]/10 flex items-center justify-center flex-shrink-0">
    <FiMail  className=" w-5 h-5 text-[#E53935]" /></div>
    <div className="flex-1">
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Email</p>
        <a href={`mailto:${Email}`} className="text-base text-black font-normal leading-relaxed">{Email}</a>
    </div>
</div>
<div className="flex items-start gap-4">
    <div className="w-10 h-10 bg-[#E53935]/10 flex items-center justify-center flex-shrink-0">
    <HiOutlineClock  className=" w-5 h-5 text-[#E53935]" /></div>
    <div className="flex-1">
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Business Hours</p>
        <p className="text-base text-black font-normal leading-relaxed">{BusinessHours}</p>
    </div>
</div>

</div>
</div>
        
       </div>
    )
}