interface PageBannerProp {
subtitle?:string;
title?:string;
desc?:string;
buttonhide?:boolean;
imageurl?:string;
}

export default function PageBanner({subtitle, title , desc, buttonhide , imageurl}:PageBannerProp) {
    return(
     
        <section className="relative py-32 bg-white overflow-hidden">
<div className="absolute inset-0 bg-[linear-gradient(rgba(229,57,53,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(229,57,53,0.03)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
<div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative">
<div className="text-center max-w-4xl mx-auto">
  <div className="flex items-center justify-center gap-3 mb-6">
    <div className="w-12 h-0.5 bg-[#E53935]"> </div>
      <span className="text-[#E53935] text-sm font-semibold tracking-widest uppercase">{subtitle}</span>
      <div className="w-12 h-0.5 bg-[#E53935]"></div>
  </div>
  <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-black mb-6 leading-[1.1] tracking-tight">{title}</h1>
  <p className="text-xl text-gray-600 leading-relaxed font-normal max-w-3xl mx-auto">{desc}</p>
{buttonhide ? null : <><button className="inline-flex items-center gap-2 mt-12 px-8 h-14 bg-white border-2 border-black/10 hover:border-[#E53935] text-black font-semibold transition-all duration-300 group">Back to Home</button></> }


</div>
{imageurl ?
<div className="mt-16 relative max-w-5xl mx-auto">
  <div className="relative overflow-hidden border-2 border-black/10">
  <img src={imageurl} alt={title}   className="w-full h-[400px] object-cover" />
  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
  <div className="absolute top-0 left-0 w-full h-1 bg-[#E53935]"></div>
  </div>
  
</div>
: null}

</div>
</section>
        
    )
}