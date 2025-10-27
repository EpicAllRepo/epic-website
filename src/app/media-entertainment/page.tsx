import CoreValues from "@/components/common/corevalues";
import CTABox from "@/components/common/cta";
import PageBanner from "@/components/common/pagebanner";
import { Activity, BarChart3, Boxes, Cloud, Cog, Factory, FileText, Heart, Network, Play, Shield, Tv, Users, Video, Zap } from "lucide-react";

export default function MediaEntertainment() {
    return(
        <>
         <PageBanner
                subtitle="Epic Global Solutions"
                title="Media & Entertainment Solutions"
                desc="Content delivery, streaming platforms, and digital media management"
                buttonhide={true}
                imageurl="/photo-1760404699753-1336aafd3d28.jpg"
              />

<section className="py-24 bg-white">
<div className="max-w-[1400px] mx-auto px-6 lg:px-8">
<div className="mb-12 text-center px-4">
<div className="flex items-center justify-center gap-3 mb-6">
<div className="w-12 h-0.5 bg-[#E53935]"> </div>
<span className="text-[#E53935] text-sm font-semibold tracking-widest uppercase">Our Services</span>
<div className="w-12 h-0.5 bg-[#E53935]"></div>
</div>
<h3 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-black mb-6 leading-[1.1] tracking-tight">
What We Offer
</h3>
<p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-normal">
Comprehensive solutions designed to drive innovation and growth
</p>
</div>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 pb-20">
{services?.map((item,index)=>{
return(
<CoreValues
key={index}
boxhoverbar
headinghover
icon={item.icon}
title={item.title}
desc={item.description}
/>
)
})}
</div>
</div>
</section>

   <section className="py-24 bg-gray-50">
  <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
      <div className="mb-12 text-center px-4">
        <div className="flex items-center justify-center gap-3 mb-6"><div className="w-12 h-0.5 bg-[#E53935]"></div>
        <span className="text-[#E53935] text-sm font-semibold tracking-widest uppercase">Why Choose Us</span><div className="w-12 h-0.5 bg-[#E53935]"></div></div>
        <h3 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-black mb-6 leading-[1.1] tracking-tight">
         Key Benefits
        </h3>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-normal">
        Transform your operations with our cutting-edge solutions
        </p>
      </div>

      <div className=" grid md:grid-cols-1 lg:grid-cols-3 gap-6 px-4 pb-20">
       {features?.map((item,index)=>{
return(
<CoreValues
key={index}
// boxhoverbar
headingsize
headinghover
icon={item.icon}
title={item.title}
desc={item.description}
/>
)
})}
      </div>
</div>
</section>
 <CTABox
 title="Revolutionize Your Media Platform"
 description="Let's discuss how our media technology solutions can enhance content delivery and audience engagement"
  backgroundpattern={true}
 />

        </>
    )
}
 

   const services = [
    {
      icon: <Play className="w-7 h-7 text-white"/>,
      title: 'Streaming Platform',
      description: 'Scalable OTT platforms with adaptive bitrate streaming, CDN integration, and multi-device support.',
    },
    {
      icon: <Cloud className="w-7 h-7 text-white"/>,
      title: 'Content Delivery',
      description: 'Global CDN infrastructure for fast, reliable content delivery with edge caching.',
    },
    {
      icon: <Tv className="w-7 h-7 text-white"/>,
      title: 'Digital Asset Management',
      description: 'Centralized media library with metadata management, transcoding, and workflow automation.',
    },
    {
      icon: <Users className="w-7 h-7 text-white"/>,
      title: 'Audience Engagement',
      description: 'Interactive features, social integration, and personalized content recommendations.',
    },
    {
      icon: <BarChart3 className="w-7 h-7 text-white"/>,
      title: 'Analytics & Insights',
      description: 'Viewer analytics, engagement metrics, and content performance tracking.',
    },
    {
      icon: <Zap className="w-7 h-7 text-white"/>,
      title: 'Live Streaming',
      description: 'Real-time live event broadcasting with low latency and interactive features.',
    },
  ];

  const features = [
    {
      icon: <Zap className="w-7 h-7 text-white"/>,
      title: 'Fast Delivery',
      description: 'Deliver content instantly to global audiences with 99.9% uptime and minimal buffering.',
    },
    {
      icon: <Users className="w-7 h-7 text-white"/>,
      title: 'Audience Growth',
      description: 'Grow your subscriber base with personalized experiences and engagement tools.',
    },
    {
      icon: <BarChart3 className="w-7 h-7 text-white"/>,
      title: 'Data Insights',
      description: 'Understand viewer behavior and optimize content strategy with advanced analytics.',
    },
  ];