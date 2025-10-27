import CoreValues from "@/components/common/corevalues";
import CTABox from "@/components/common/cta";
import PageBanner from "@/components/common/pagebanner";
import { CheckCircle, FileText, Lock, Shield, TrendingUp, Users } from "lucide-react";

export default function Insurance() {
    return(
        <>
         <PageBanner
                subtitle="Epic Global Solutions"
                title="Insurance Solutions"
                desc="Claims processing, risk management, and policy administration platforms"
                buttonhide={true}
                imageurl="/photo-1748344477811-ec6ec9a60c8b.jpg"
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
 title="Transform Your Insurance Operations"
 description="Let's discuss how our digital marketing services can increase your visibility and drive business growth"
  backgroundpattern={true}
 />

        </>
    )
}




  const services = [
    {
      icon: <FileText className="w-7 h-7 text-white" />,
      title: 'Claims Processing',
      description: 'Automated claims management with intelligent workflows, fraud detection, and faster settlement times.',
    },
    {
      icon: <Shield className="w-7 h-7 text-white" />,
      title: 'Risk Assessment',
      description: 'Advanced risk modeling and analytics to optimize underwriting and pricing strategies.',
    },
    {
      icon: <Users className="w-7 h-7 text-white" />,
      title: 'Policy Administration',
      description: 'Comprehensive policy lifecycle management from quote to renewal with seamless integration.',
    },
    {
      icon: <TrendingUp className="w-7 h-7 text-white" />,
      title: 'Analytics & Reporting',
      description: 'Real-time business intelligence and regulatory reporting for data-driven decision making.',
    },
    {
      icon: <Lock className="w-7 h-7 text-white" />,
      title: 'Compliance Management',
      description: 'Ensure regulatory compliance with automated workflows and audit trails.',
    },
    {
      icon: <CheckCircle className="w-7 h-7 text-white" />,
      title: 'Customer Portal',
      description: 'Self-service portals for policyholders with mobile-first design and 24/7 access.',
    },
  ];

  const features = [
    {
      icon: <TrendingUp className="w-7 h-7 text-white" />,
      title: 'Faster Processing',
      description: 'Reduce claims processing time by up to 70% with intelligent automation and streamlined workflows.',
    },
    {
      icon: <Shield className="w-7 h-7 text-white" />,
      title: 'Enhanced Security',
      description: 'Enterprise-grade security with encryption, access controls, and fraud prevention mechanisms.',
    },
    {
      icon: <Users className="w-7 h-7 text-white" />,
      title: 'Better Experience',
      description: 'Improve customer satisfaction with intuitive interfaces and seamless digital interactions.',
    },
  ];