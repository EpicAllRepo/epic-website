
import CoreValues from "@/components/common/corevalues";
import PageBanner from "@/components/common/pagebanner";
import Link from "next/link";
import {  FaArrowRight } from "react-icons/fa";
import { FiSmartphone, FiZap } from "react-icons/fi";
import { GoDatabase } from "react-icons/go";
import { IoLockClosedOutline } from "react-icons/io5";
import { LuCodeXml } from "react-icons/lu";
import { MdOutlineShoppingCart } from "react-icons/md";

export default function CustomWebDevelopmentPage() {
  return (
    <>
      <PageBanner
        subtitle="Epic Global Solutions"
        title="Custom Web Development"
        desc="Scalable web applications, e-commerce platforms, and custom software solutions"
        buttonhide={true}
        imageurl="/Custom-Web-Development.jpeg"
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
          icon={<LuCodeXml className="w-7 h-7 text-white" />}
          title="Custom Web Applications"
          desc="Scalable, high-performance web applications built with modern frameworks and best practices."
        />
        <CoreValues
        headinghover
          icon={<MdOutlineShoppingCart className="w-7 h-7 text-white" />}
          title="E-Commerce Platforms"
          desc="Full-featured online stores with payment integration, inventory management, and analytics."
        />
        <CoreValues
        headinghover
          icon={<GoDatabase  className="w-7 h-7 text-white" />}
          title="Enterprise Portals"
          desc="Complex business portals with role-based access, workflow automation, and integrations."
        />
        <CoreValues
        headinghover
          icon={<FiZap className="w-7 h-7 text-white" />}
          title="Progressive Web Apps"
          desc="Fast, reliable, and engaging web apps that work offline and feel like native applications."
        />
         <CoreValues
         headinghover
          icon={<FiSmartphone className="w-7 h-7 text-white" />}
          title="Responsive Design"
          desc="Mobile-first responsive websites that deliver exceptional experiences across all devices."
        />
        <CoreValues
        headinghover
          icon={<IoLockClosedOutline className="w-7 h-7 text-white" />}
          title="Secure Development"
          desc="Security-first approach with encryption, authentication, and compliance standards."
        />
        
      </div>
      </div>
      </section>
      




<section className="py-24 bg-gray-50">
  <div className="max-w-[1400px] mx-auto px-6 lg:px-8">

      <div className="mb-12 text-center px-4">
         <div className="flex items-center justify-center gap-3 mb-6">
        <div className="w-12 h-0.5 bg-[#E53935]"> </div>
      <span className="text-[#E53935] text-sm font-semibold tracking-widest uppercase">Why Choose Us</span>
      <div className="w-12 h-0.5 bg-[#E53935]"></div>
      </div>
        <h3 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-black mb-6 leading-[1.1] tracking-tight">
         Key Benefits
        </h3>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-normal">
         Transform your operations with our cutting-edge solutions
        </p>
      </div>

      <div className=" grid md:grid-cols-1 lg:grid-cols-3 gap-6 px-4 pb-20">
        <CoreValues
        headingsize
        boxhoverbar
          icon={<FiZap className="w-7 h-7 text-white" />}
          title="High Performance"
          desc="Lightning-fast load times and optimized code for superior user experience and SEO."
        />
         <CoreValues
          headingsize
        boxhoverbar
          icon={<LuCodeXml className="w-7 h-7 text-white" />}
          title="Scalable Architecture"
          desc="Built to grow with your business using cloud-native technologies and microservices."
        />
        <CoreValues
         headingsize
        boxhoverbar
          icon={<IoLockClosedOutline className="w-7 h-7 text-white" />}
          title="Enterprise Security"
          desc="Industry-standard security practices to protect your data and users."
        />
      </div>
      </div>
      </section>

      
 <section className="relative py-20 bg-[#E53935]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative">
            <div className="text-center">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.1] tracking-tight">Ready to Build Your Web Application?</h2>
                <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed font-normal">Let's discuss how our custom web development services can bring your vision to life</p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <Link href="/contact" className="inline-flex items-center gap-2 px-10 py-5 bg-white text-[#E53935] font-bold hover:bg-gray-100 transition-all duration-300 group text-lg">Contact Us Today <p><FaArrowRight /></p></Link>
                
                </div>
            </div>
        </div>
    </section>
    </>
  );
}
