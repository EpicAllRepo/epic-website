import CoreValues from "@/components/common/corevalues";
import CTABox from "@/components/common/cta";
import PageBanner from "@/components/common/pagebanner";
import { BarChart3, Boxes, Calendar, Cog, CreditCard, Factory, Globe, Network, Plane, Star, Users, Zap } from "lucide-react";

export default function TravelHospitality() {
    return(
        <>
         <PageBanner
                subtitle="Epic Global Solutions"
                title="Travel & Hospitality Solutions"
                desc="Booking systems, guest management, and personalized travel experiences"
                buttonhide={true}
                imageurl="/photo-1759178389699-14e2a2e932b0.jpg"
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
 title="Elevate Your Travel Business"
 description="Let's discuss how our travel technology solutions can enhance guest experiences and drive bookings"
  backgroundpattern={true}
 />

        </>
    )
}
  
   const services = [
    {
      icon: <Calendar className="w-7 h-7 text-white" />,
      title: 'Booking Engine',
      description: 'Advanced reservation systems with real-time availability, dynamic pricing, and multi-channel distribution.',
    },
    {
      icon: <Users className="w-7 h-7 text-white" />,
      title: 'Guest Management',
      description: 'Comprehensive CRM for personalized guest experiences and loyalty program management.',
    },
    {
      icon: <Globe className="w-7 h-7 text-white" />,
      title: 'Channel Manager',
      description: 'Centralized management of OTAs, GDS, and direct booking channels with automated updates.',
    },
    {
      icon: <Star className="w-7 h-7 text-white" />,
      title: 'Experience Personalization',
      description: 'AI-powered recommendations and personalized travel itineraries based on guest preferences.',
    },
    {
      icon: <CreditCard className="w-7 h-7 text-white" />,
      title: 'Payment Processing',
      description: 'Secure multi-currency payment gateway with support for various payment methods.',
    },
    {
      icon: <Plane className="w-7 h-7 text-white" />,
      title: 'Travel Operations',
      description: 'End-to-end operations management from booking to post-travel services.',
    },
  ];

  const features = [
    {
      icon: <Star className="w-7 h-7 text-white" />,
      title: 'Enhanced Experience',
      description: 'Deliver personalized travel experiences that increase customer satisfaction and loyalty.',
    },
    {
      icon: <Globe className="w-7 h-7 text-white" />,
      title: 'Global Reach',
      description: 'Expand your reach with multi-channel distribution and international payment support.',
    },
    {
      icon: <Calendar className="w-7 h-7 text-white" />,
      title: 'Efficient Operations',
      description: 'Streamline operations with automated workflows and real-time synchronization.',
    },
  ];