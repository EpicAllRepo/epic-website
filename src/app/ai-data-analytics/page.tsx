
import CoreValues from "@/components/common/corevalues";
import CTABox from "@/components/common/cta";
import PageBanner from "@/components/common/pagebanner";
import {  FaArrowRight, FaRegChartBar, FaRegHeart } from "react-icons/fa";
import { FiCpu, FiDatabase, FiSmartphone, FiTrendingUp, FiZap } from "react-icons/fi";
import { GoDatabase, GoZap } from "react-icons/go";
import { IoLockClosedOutline } from "react-icons/io5";
import { LuBrain, LuCodeXml, LuUsers } from "react-icons/lu";
import { MdOutlineShoppingCart } from "react-icons/md";

export default function AIDataAnalyticspage() {
  return (
    <>
      <PageBanner
        subtitle="Epic Global Solutions"
        title="AI & Data Analytics"
        desc="Machine learning, predictive analytics, business intelligence, and AI integration"
        buttonhide={true}
        imageurl="/ai.jpeg"
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
          icon={<LuBrain className="w-7 h-7 text-white" />}
          title="Machine Learning"
          desc="Custom ML models for prediction, classification, and pattern recognition tailored to your needs."
        />
        <CoreValues
          
        boxhoverbar
          icon={<FiTrendingUp  className="w-7 h-7 text-white" />}
          title="Predictive Analytics"
          desc="Forecast trends, customer behavior, and business outcomes with advanced statistical models."
        />
        <CoreValues
           
        boxhoverbar
          icon={<FaRegChartBar  className="w-7 h-7 text-white" />}
          title="Business Intelligence"
          desc="Interactive dashboards, data visualization, and self-service analytics platforms."
        />
        <CoreValues
           
        boxhoverbar
          icon={<FiCpu className="w-7 h-7 text-white" />}
          title="AI Integration"
          desc="Integrate AI capabilities into existing applications with APIs and microservices."
        />
         <CoreValues
            
        boxhoverbar
          icon={<FiDatabase className="w-7 h-7 text-white" />}
          title="Data Engineering"
          desc="Build robust data pipelines, warehouses, and lakes for scalable analytics."
        />
        <CoreValues
           
        boxhoverbar
          icon={<FiZap className="w-7 h-7 text-white" />}
          title="Real-Time Analytics"
          desc="Stream processing and real-time data analysis for instant insights."
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
          icon={<LuBrain className="w-7 h-7 text-white" />}
          title="Intelligent Automation"
          desc="Automate complex tasks and decision-making with AI-powered solutions."
        />
         <CoreValues
            headingsize
        boxhoverbar
          icon={<FiTrendingUp  className="w-7 h-7 text-white" />}
          title="Data-Driven Decisions"
          desc="Make confident business decisions backed by comprehensive data analysis."
        />
        <CoreValues
           headingsize
        boxhoverbar
          icon={<FiZap className="w-7 h-7 text-white" />}
          title="Competitive Advantage"
          desc="Stay ahead of competition with cutting-edge AI and analytics capabilities."
        />
      </div>

      
<CTABox
backgroundpattern={true}

/>
    </>
  );
}
