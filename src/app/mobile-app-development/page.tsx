
import CoreValues from "@/components/common/corevalues";
import CTABox from "@/components/common/cta";
import PageBanner from "@/components/common/pagebanner";
import { FiSmartphone, FiZap } from "react-icons/fi";
import { GoDatabase } from "react-icons/go";
import { IoLockClosedOutline } from "react-icons/io5";
import { LuCodeXml } from "react-icons/lu";
import { MdOutlineShoppingCart } from "react-icons/md";

export default function MobileAppDevelopmentpage() {
  return (
    <>
      <PageBanner
        subtitle="Epic Global Solutions"
        title="Mobile App Development"
        desc="Native and cross-platform mobile applications for iOS and Android devices"
        buttonhide={true}
        imageurl="/mobile.jpeg"
      />


<section className="py-24 bg-white">
  <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
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
        headinghover
          icon={<LuCodeXml className="w-7 h-7 text-white" />}
          title="Native iOS Development"
          desc="High-performance iOS applications built with Swift and UIKit for optimal user experience."
        />
        <CoreValues
        headinghover
          icon={<MdOutlineShoppingCart className="w-7 h-7 text-white" />}
          title="Native Android Development"
          desc="Feature-rich Android apps using Kotlin and Jetpack for modern Android devices."
        />
        <CoreValues
        headinghover
          icon={<GoDatabase  className="w-7 h-7 text-white" />}
          title="Cross-Platform Apps"
          desc="Cost-effective solutions using React Native and Flutter for iOS and Android.."
        />
        <CoreValues
        headinghover
          icon={<FiZap className="w-7 h-7 text-white" />}
          title="App Modernization"
          desc="Update legacy mobile apps with modern features, performance improvements, and new designs.."
        />
         <CoreValues
         headinghover
          icon={<FiSmartphone className="w-7 h-7 text-white" />}
          title="UX/UI Design"
          desc="Intuitive, user-centered mobile interfaces that delight users and drive engagement."
        />
        <CoreValues
        headinghover
          icon={<IoLockClosedOutline className="w-7 h-7 text-white" />}
          title="Push Notifications"
          desc="Engage users with targeted push notifications and in-app messaging strategies."
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
          title="Fast Performance"
          desc="Optimized code and efficient architecture for smooth, responsive mobile experiences."
        />
         <CoreValues
         boxhoverbar
            headingsize
          icon={<LuCodeXml className="w-7 h-7 text-white" />}
          title="User Engagement"
          desc="Drive retention with features designed to keep users coming back."
        />
        <CoreValues
        boxhoverbar
           headingsize
          icon={<IoLockClosedOutline className="w-7 h-7 text-white" />}
          title="Platform Expertise"
          desc="Deep knowledge of iOS and Android ecosystems for native and cross-platform development.."
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
