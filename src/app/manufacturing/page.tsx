import CoreValues from "@/components/common/corevalues";
import CTABox from "@/components/common/cta";
import PageBanner from "@/components/common/pagebanner";
import { BarChart3, Boxes, Cog, Factory, Network, Zap } from "lucide-react";

export default function Manufacturing() {
    return(
        <>
         <PageBanner
                subtitle="Epic Global Solutions"
                title="Manufacturing Solutions"
                desc="Smart factories, IoT integration, and supply chain optimization solutions"
                buttonhide={true}
                imageurl="/photo-1720036236694-d0a231c52563.jpg"
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
 title="Ready to Build Your Smart Factory?"
 description="Let's discuss how our manufacturing solutions can drive operational excellence and competitiveness"
  backgroundpattern={true}
 />

        </>
    )
}
 

  const services = [
    {
      icon: <Factory  className="w-7 h-7 text-white" />,
      title: 'Smart Factory Solutions',
      description: 'IoT-enabled manufacturing with real-time monitoring, predictive maintenance, and automated quality control.',
    },
    {
      icon: <Network  className="w-7 h-7 text-white" />,
      title: 'Supply Chain Optimization',
      description: 'End-to-end visibility and optimization of your supply chain with AI-powered forecasting.',
    },
 {
      icon: <Cog  className="w-7 h-7 text-white" />,
      title: 'Production Planning',
      description: 'Advanced planning and scheduling systems for optimized resource utilization and throughput.',
    },
    {
      icon: <BarChart3  className="w-7 h-7 text-white" />,
      title: 'Manufacturing Analytics',
      description: 'Real-time OEE tracking, performance analytics, and actionable insights for continuous improvement.',
    },
    {
      icon: <Boxes  className="w-7 h-7 text-white" />,
      title: 'Inventory Management',
      description: 'Automated inventory tracking with barcode/RFID integration and just-in-time optimization.',
    },
    {
      icon: <Zap  className="w-7 h-7 text-white" />,
      title: 'Process Automation',
      description: 'Robotic process automation and workflow optimization to reduce manual interventions.',
    },
  ];

  const features = [
    {
      icon: <Zap  className="w-7 h-7 text-white" />,
      title: 'Increased Efficiency',
      description: 'Boost production efficiency by 40% with smart automation and optimized workflows.',
    },
    {
      icon: <BarChart3  className="w-7 h-7 text-white" />,
      title: 'Real-Time Insights',
      description: 'Make data-driven decisions with real-time dashboards and predictive analytics.',
    },
    {
      icon: <Cog  className="w-7 h-7 text-white" />,
      title: 'Reduced Downtime',
      description: 'Minimize equipment downtime with predictive maintenance and proactive monitoring.',
    },
  ];