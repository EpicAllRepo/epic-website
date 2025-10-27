
import CoreValues from "@/components/common/corevalues";
import CTABox from "@/components/common/cta";
import PageBanner from "@/components/common/pagebanner";
import { CiCircleCheck } from "react-icons/ci";
import { FaLock } from "react-icons/fa";
import { FiZap } from "react-icons/fi";
import { GoShieldCheck } from "react-icons/go";
import { LuFileSearch } from "react-icons/lu";
import { MdOutlineShoppingCart } from "react-icons/md";

export default function CybersecurityServicespage() {
  return (
    <>
      <PageBanner
        subtitle="Epic Global Solutions"
        title="Cybersecurity Services"
        desc="Security audits, threat detection, penetration testing, and compliance solutions"
        buttonhide={true}
        imageurl="/cyber.jpeg"
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
        
          icon={<GoShieldCheck className="w-7 h-7 text-white" />}
          title="Security Audits"
          desc="Comprehensive security assessments, vulnerability scans, and compliance audits."
        />
        <CoreValues
headinghover
          icon={<MdOutlineShoppingCart className="w-7 h-7 text-white" />}
          title="Native Android Development"
          desc="Feature-rich Android apps using Kotlin and Jetpack for modern Android devices."
        />
        <CoreValues
headinghover
          icon={<LuFileSearch   className="w-7 h-7 text-white" />}
          title="Penetration Testing"
          desc="Ethical hacking and penetration tests to identify and fix security vulnerabilities."
        />
        <CoreValues
headinghover
          icon={<FaLock className="w-7 h-7 text-white" />}
          title="Data Protection"
          desc="Encryption, data loss prevention (DLP), and secure backup solutions."
        />
         <CoreValues
headinghover
          icon={<CiCircleCheck className="w-7 h-7 text-white" />}
          title="Compliance Solutions"
          desc="GDPR, HIPAA, SOC 2, ISO 27001 compliance management and certification support."
        />
        <CoreValues
headinghover
          icon={< GoShieldCheck className="w-7 h-7 text-white" />}
          title="Security Training"
          desc="Employee awareness programs and phishing simulation exercises."
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
          icon={<FiZap className="w-7 h-7 text-white" />}
          title="Proactive Protection"
          desc="Optimized code and efficient architecture for smooth, responsive mobile experiences."
        />
         <CoreValues
            headingsize
        boxhoverbar
          icon={<CiCircleCheck className="w-7 h-7 text-white" />}
          title="Compliance Ready"
          desc="Meet regulatory requirements with comprehensive compliance frameworks."
        />
        <CoreValues
           headingsize
        boxhoverbar
          icon={<FaLock  className="w-7 h-7 text-white" />}
          title="Data Security"
          desc="Protect sensitive data with enterprise-grade encryption and access controls."
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
