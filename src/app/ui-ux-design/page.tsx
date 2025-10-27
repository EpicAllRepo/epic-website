import CoreValues from "@/components/common/corevalues";
import CTABox from "@/components/common/cta";
import PageBanner from "@/components/common/pagebanner";
import { Activity, BarChart3, Boxes, Cloud, Cog, Factory, FileText, Heart, Layers, Network, Palette, PenTool, Play, Shield, Smartphone, Tv, Users, Video, Zap } from "lucide-react";

export default function UiUxDesign() {
    return(
        <>
         <PageBanner
                subtitle="Epic Global Solutions"
                title="UI/UX Design"
                desc="User interface design, user experience research, prototyping, and design systems"
                buttonhide={true}
                imageurl="/photo-1586717799252-bd134ad00e26.jpg"
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
 title="Create Exceptional User Experiences"
 description="Let's discuss how our UI/UX design services can elevate your digital products and user satisfaction"
  backgroundpattern={true}
 />

        </>
    )
}
 
const services = [
    {
      icon: <PenTool className="w-7 h-7 text-white" />,
      title: 'UI Design',
      description: 'Beautiful, modern interfaces with pixel-perfect designs and cohesive visual systems.',
    },
    {
      icon: <Users className="w-7 h-7 text-white" />,
      title: 'UX Research',
      description: 'User interviews, usability testing, and data analysis to inform design decisions.',
    },
    {
      icon: <Layers className="w-7 h-7 text-white" />,
      title: 'Prototyping',
      description: 'Interactive prototypes and wireframes for rapid iteration and stakeholder validation.',
    },
    {
      icon: <Palette className="w-7 h-7 text-white" />,
      title: 'Design Systems',
      description: 'Scalable component libraries and style guides for consistent user experiences.',
    },
    {
      icon: <Smartphone className="w-7 h-7 text-white" />,
      title: 'Responsive Design',
      description: 'Adaptive layouts that work seamlessly across desktop, tablet, and mobile devices.',
    },
    {
      icon: <Zap className="w-7 h-7 text-white" />,
      title: 'Interaction Design',
      description: 'Micro-interactions, animations, and transitions that delight users.',
    },
  ];

  const features = [
    {
      icon: <Users className="w-7 h-7 text-white" />,
      title: 'User-Centered',
      description: 'Design experiences based on real user needs and behavior through research and testing.',
    },
    {
      icon: <Zap className="w-7 h-7 text-white" />,
      title: 'Faster Development',
      description: 'Reduce development time with comprehensive design systems and reusable components.',
    },
    {
      icon: <Palette className="w-7 h-7 text-white" />,
      title: 'Brand Consistency',
      description: 'Maintain cohesive brand identity across all touchpoints with design guidelines.',
    },
  ];