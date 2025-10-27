import CoreValues from "@/components/common/corevalues";
import CTABox from "@/components/common/cta";
import PageBanner from "@/components/common/pagebanner";
import { Activity, BarChart3, Boxes, Cog, Factory, FileText, Heart, Network, Shield, Users, Video, Zap } from "lucide-react";

export default function HealthCare() {
    return(
        <>
         <PageBanner
                subtitle="Epic Global Solutions"
                title="Healthcare Solutions"
                desc="Patient care systems, telemedicine, and health data management platforms"
                buttonhide={true}
                imageurl="/photo-1758691461957-13aff0c37c6f.jpg"
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
 title="Transform Healthcare Delivery"
 description="Let's discuss how our healthcare technology solutions can improve patient care and operational efficiency"
  backgroundpattern={true}
 />

        </>
    )
}
 

  const services = [
    {
      icon: <Heart className="w-7 h-7 text-white" />,
      title: 'Patient Care Systems',
      description: 'Integrated electronic health records (EHR) and patient management systems for comprehensive care.',
    },
    {
      icon: <Video className="w-7 h-7 text-white" />,
      title: 'Telemedicine Platform',
      description: 'Secure virtual consultations with video conferencing, e-prescriptions, and remote monitoring.',
    },
    {
      icon: <FileText className="w-7 h-7 text-white" />,
      title: 'Health Data Management',
      description: 'Centralized data repository with HIPAA compliance and interoperability standards.',
    },
    {
      icon: <Users className="w-7 h-7 text-white" />,
      title: 'Practice Management',
      description: 'Appointment scheduling, billing, and administrative workflows for medical practices.',
    },
    {
      icon: <Activity className="w-7 h-7 text-white" />,
      title: 'Remote Patient Monitoring',
      description: 'IoT-enabled devices and wearables for continuous health monitoring and alerts.',
    },
    {
      icon: <Shield className="w-7 h-7 text-white" />,
      title: 'Compliance & Security',
      description: 'HIPAA-compliant infrastructure with encryption, access controls, and audit trails.',
    },
  ];

  const features = [
    {
      icon: <Heart className="w-7 h-7 text-white" />,
      title: 'Better Patient Outcomes',
      description: 'Improve clinical outcomes with coordinated care and data-driven treatment decisions.',
    },
    {
      icon: <Shield className="w-7 h-7 text-white" />,
      title: 'Data Security',
      description: 'Protect sensitive health information with enterprise-grade security and compliance.',
    },
    {
      icon: <Activity className="w-7 h-7 text-white" />,
      title: 'Operational Efficiency',
      description: 'Reduce administrative burden and optimize workflows for healthcare providers.',
    },
  ];