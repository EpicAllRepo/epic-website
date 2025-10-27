
import CoreValues from "@/components/common/corevalues";
import CTABox from "@/components/common/cta";
import PageBanner from "@/components/common/pagebanner";
import {  FaRegClock, FaWrench } from "react-icons/fa";
import { FiHeadphones, FiServer } from "react-icons/fi";
import { LuUsersRound } from "react-icons/lu";
import { MdOutlineLightbulb } from "react-icons/md";

export default function ItConsultingSupportpage() {
  return (
    <>
      <PageBanner
        subtitle="Epic Global Solutions"
        title="IT Consulting & Support"
        desc="Technical consulting, infrastructure planning, and 24/7 IT support services"
        buttonhide={true}
        imageurl="/it.jpeg"
      />

      {/* Core Values Section */}
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
        <CoreValues
       headinghover
          icon={<MdOutlineLightbulb className="w-7 h-7 text-white" />}
          title="Strategic IT Consulting"
          desc="Technology roadmap planning, digital transformation strategy, and IT governance."
        />
        <CoreValues
   headinghover
          icon={<FaRegClock className="w-7 h-7 text-white" />}
          title="Infrastructure Planning"
          desc="Design and optimize IT infrastructure for performance, scalability, and cost-efficiency."
        />
        <CoreValues
headinghover
          icon={<FiHeadphones  className="w-7 h-7 text-white" />}
          title="24/7 IT Support"
          desc="Round-the-clock helpdesk support, incident management, and problem resolution."
        />
        <CoreValues
headinghover
          icon={<FaWrench className="w-7 h-7 text-white" />}
          title="Managed Services"
          desc="Complete IT operations management including monitoring, maintenance, and updates."
        />
         <CoreValues
headinghover
          icon={<LuUsersRound className="w-7 h-7 text-white" />}
          title="Training & Enablement"
          desc="User training programs, documentation, and knowledge transfer services."
        />
        <CoreValues
 headinghover
          icon={<FaRegClock className="w-7 h-7 text-white" />}
          title="Disaster Recovery"
          desc="Business continuity planning, backup solutions, and disaster recovery services."
        />
      </div>
      </div>
      </section>
      


<section className="py-24 bg-gray-50">
  <div className="max-w-[1400px] mx-auto px-6 lg:px-8">

      <div className="mb-12 text-center px-4">
         <div className="flex items-center justify-center gap-3 mb-6"><div className="w-12 h-0.5 bg-[#E53935]"></div><span className="text-[#E53935] text-sm font-semibold tracking-widest uppercase">Why Choose Us</span><div className="w-12 h-0.5 bg-[#E53935]"></div></div>
        <h3 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-black mb-6 leading-[1.1] tracking-tight">
         Key Benefits
        </h3>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-normal">
         Transform your operations with our cutting-edge solutions
        </p>
      </div>

      <div className=" grid md:grid-cols-1 lg:grid-cols-3 gap-6 px-4 pb-20 ">
        <CoreValues
        headingsize
        boxhoverbar
          icon={<MdOutlineLightbulb className="w-7 h-7 text-white" />}
          title="Expert Guidance"
          desc="Leverage decades of experience and industry best practices for optimal IT decisions."
        />
         <CoreValues
            headingsize
        boxhoverbar
          icon={<FaRegClock className="w-7 h-7 text-white" />}
          title="Always Available"
          desc="Get support whenever you need it with our 24/7 helpdesk and rapid response."
        />
        <CoreValues
           headingsize
        boxhoverbar
          icon={<FiServer  className="w-7 h-7 text-white" />}
          title="Optimized Operations"
          desc="Improve IT efficiency and reduce costs with proactive management and monitoring."
        />
      </div>
</div>
</section>
      
<CTABox
backgroundpattern={true}

/>
    </>
  );
}
