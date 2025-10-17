
import CoreValues from "@/components/common/corevalues";
import PageBanner from "@/components/common/pagebanner";
import CTABox from "@/components/common/cta";
import {  FaArrowRight, FaRegHeart } from "react-icons/fa";
import { FiSmartphone, FiZap } from "react-icons/fi";
import { GoDatabase, GoZap } from "react-icons/go";
import { IoLockClosedOutline } from "react-icons/io5";
import { LuCodeXml, LuUsers } from "react-icons/lu";
import { MdOutlineShoppingCart } from "react-icons/md";

export default function CloudDevOpsSolutionspage() {
  return (
    <>
      <PageBanner
        subtitle="Epic Global Solutions"
        title="Cloud & DevOps Solutions"
        desc="Cloud infrastructure, automation, CI/CD pipelines, and containerization"
        buttonhide={true}
        imageurl="/cloud.jpeg"
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
          icon={<LuCodeXml className="w-7 h-7 text-white" />}
          title="Cloud Migration"
          desc="Seamless migration to AWS, Azure, or Google Cloud with minimal downtime and optimized costs.."
        />
        <CoreValues
          icon={<MdOutlineShoppingCart className="w-7 h-7 text-white" />}
          title="CI/CD Pipelines"
          desc="Automated build, test, and deployment pipelines for faster releases and better quality.."
        />
        <CoreValues
          icon={<GoDatabase  className="w-7 h-7 text-white" />}
          title="Infrastructure as Code"
          desc="Version-controlled infrastructure using Terraform, CloudFormation, and Ansible."
        />
        <CoreValues
          icon={<FiZap className="w-7 h-7 text-white" />}
          title="Containerization"
          desc="Docker and Kubernetes orchestration for scalable, portable application deployments."
        />
         <CoreValues
          icon={<FiSmartphone className="w-7 h-7 text-white" />}
          title="Monitoring & Logging"
          desc="Comprehensive observability with real-time monitoring, alerts, and log aggregation."
        />
        <CoreValues
          icon={<IoLockClosedOutline className="w-7 h-7 text-white" />}
          title="Security & Compliance"
          desc="Cloud security best practices, compliance automation, and vulnerability management."
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

      <div className=" grid md:grid-cols-1 lg:grid-cols-3 gap-6 px-4 pb-20">
        <CoreValues
          icon={<FiZap className="w-7 h-7 text-white" />}
          title="Faster Deployment"
          desc="Reduce deployment time from weeks to minutes with automated CI/CD workflows."
        />
         <CoreValues
          icon={<LuCodeXml className="w-7 h-7 text-white" />}
          title="Cost Optimization"
          desc="Optimize cloud spending with right-sizing, auto-scaling, and resource management."
        />
        <CoreValues
          icon={<IoLockClosedOutline className="w-7 h-7 text-white" />}
          title="Enhanced Reliability"
          desc="Achieve 99.99% uptime with fault-tolerant architecture and automated recovery."
        />
      </div>

      
 <CTABox
  backgroundpattern={true}
 />
    </>
  );
}

 

