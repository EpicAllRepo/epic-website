
import CoreValues from "@/components/common/corevalues";
import CTABox from "@/components/common/cta";
import PageBanner from "@/components/common/pagebanner";
import { CiMail, CiShare2 } from "react-icons/ci";
import {  FaArrowRight, FaRegHeart } from "react-icons/fa";
import { FiSmartphone, FiTarget, FiZap } from "react-icons/fi";
import { GoDatabase, GoZap } from "react-icons/go";
import { IoIosTrendingUp, IoMdSearch } from "react-icons/io";
import { IoLockClosedOutline } from "react-icons/io5";
import { LuCodeXml, LuUsers } from "react-icons/lu";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaChartBar } from "react-icons/fa6";

export default function DigitalMarketingSEOpage() {
  return (
    <>
      <PageBanner
        subtitle="Epic Global Solutions"
        title="Digital Marketing & SEO"
        desc="SEO optimization, content strategy, social media marketing, and PPC campaigns"
        buttonhide={true}
        imageurl="/digital.jpeg"
      />

      {/* Core Values Section */}
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
           
        boxhoverbar
          icon={<IoMdSearch className="w-7 h-7 text-white" />}
          title="SEO Optimization"
          desc="Improve search rankings with technical SEO, on-page optimization, and link building strategies."
        />
        <CoreValues
          
        boxhoverbar
          icon={<CiMail className="w-7 h-7 text-white" />}
          title="Content Strategy"
          desc="Engaging content creation, blogging, and content marketing to attract and retain customers."
        />
        <CoreValues
           
        boxhoverbar
          icon={<CiShare2  className="w-7 h-7 text-white" />}
          title="Social Media Marketing"
          desc="Build brand presence and engage audiences across Facebook, Instagram, LinkedIn, and Twitter."
        />
        <CoreValues
           
        boxhoverbar
          icon={<FiTarget className="w-7 h-7 text-white" />}
          title="PPC Campaigns"
          desc="Targeted Google Ads and social media advertising for maximum ROI and conversions."
        />
         <CoreValues
           
        boxhoverbar
          icon={<FaChartBar className="w-7 h-7 text-white" />}
          title="Analytics & Reporting"
          desc="Track performance metrics, user behavior, and campaign effectiveness with detailed reports."
        />
        <CoreValues
           
        boxhoverbar
          icon={<IoIosTrendingUp className="w-7 h-7 text-white" />}
          title="Conversion Optimization"
          desc="A/B testing, landing page optimization, and funnel analysis to boost conversions."
        />
        
      </div>
      
      <div className="mb-12 text-center px-4">
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
          icon={< IoIosTrendingUp  className="w-7 h-7 text-white" />}
          title="Increased Traffic"
          desc="Drive qualified traffic to your website with data-driven SEO and marketing strategies."
        />
         <CoreValues
            headingsize
        boxhoverbar
          icon={<FiTarget className="w-7 h-7 text-white" />}
          title="Higher Conversions"
          desc="Convert more visitors into customers with optimized campaigns and user experiences."
        />
        <CoreValues
           headingsize
        boxhoverbar
          icon={<FaChartBar  className="w-7 h-7 text-white" />}
          title="Measurable Results"
          desc="Track ROI and performance with comprehensive analytics and transparent reporting."
        />
      </div>

      
<CTABox
backgroundpattern={true}

/>
    </>
  );
}
