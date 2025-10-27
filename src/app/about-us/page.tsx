

import OurMission from "@/components/about/our-mission";
import CoreValues from "@/components/common/corevalues";
import CTABox from "@/components/common/cta";
import PageBanner from "@/components/common/pagebanner";
import TeamBox from "@/components/common/teambox";
import { FaRegHeart } from "react-icons/fa";
import { FiAward, FiTarget } from "react-icons/fi";
import { LuLightbulb, LuUsers } from "react-icons/lu";

export default function AboutPage() {
  return (
    <>
      <div className="">
        <PageBanner
          subtitle="About Epic Global"
          title="About Us"
          desc="Epic Global Digital Solutions Pvt Ltd is a leading technology company delivering innovative cloud, AI, and digital transformation solutions. Since 2015, we've been empowering businesses worldwide with cutting-edge technology and exceptional service quality."
        />


        <section className="relative py-32 bg-black/[0.02]">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <div className="mb-20 text-center">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-12 h-0.5 bg-[#E53935]"></div>
                <span className="text-[#E53935] text-sm font-semibold tracking-widest uppercase">Our Purpose</span>
                <div className="w-12 h-0.5 bg-[#E53935]"></div>
              </div>
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-black mb-6 leading-[1.1] tracking-tight">Mission & Vision</h2>
            </div>


            <div className="grid lg:grid-cols-2 gap-8 mb-20">
              <OurMission
                icon={<FiTarget className=" w-8 h-8 text-white" />}
                title="Our Mission"
                desc="To empower businesses worldwide with innovative technology solutions that drive digital transformation, enhance operational efficiency, and create sustainable growth. We are committed to delivering exceptional value through cutting-edge cloud computing, AI, and enterprise solutions."
              />
              <OurMission
                icon={<FiTarget className=" w-8 h-8 text-white" />}
                title="Our Vision"
                desc="To be a global leader in cloud computing, AI, and digital transformation. We aspire to reshape the world by championing technologies that drive innovation, promote inclusivity, and seamlessly connect digital and physical realms, creating a more efficient and connected future."
              />

            </div>

<div className="mb-12 text-center">
  <h3 className="text-3xl font-bold text-black mb-4 tracking-tight">Our Core Values</h3>
  <p className="text-lg text-gray-600 max-w-2xl mx-auto font-normal">The principles that guide everything we do</p>
</div>



<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
<CoreValues
icon={<LuLightbulb className="w-7 h-7 text-white" />}
title="Innovation"
desc="Pioneering cutting-edge solutions that drive digital transformation"
/>
<CoreValues
icon={<FiAward  className="w-7 h-7 text-white" />}
title="Excellence"
desc="Delivering superior quality in every project we undertake"
/>
<CoreValues
icon={<LuUsers  className="w-7 h-7 text-white" />}
title="Collaboration"
desc="Building strong partnerships with our clients and teams"
/>
<CoreValues
icon={<FaRegHeart  className="w-7 h-7 text-white" />}
title="Integrity"
desc="Maintaining transparency and ethical practices in all we do"
/>



</div>

          </div>
        </section>




        <section className="relative py-32 bg-white">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(229,57,53,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(229,57,53,0.02)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative">
            <div className="mb-20 text-center">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-12 h-0.5 bg-[#E53935]"></div>
                <span className="text-[#E53935] text-sm font-semibold tracking-widest uppercase">Leadership</span>
                <div className="w-12 h-0.5 bg-[#E53935]"></div>
              </div>
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-black mb-6 leading-[1.1] tracking-tight">Our Team</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-normal">Meet the visionaries driving Epic Global&apos;s success and innovation</p>
            </div>


<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
<TeamBox image={"/1.jpeg"} name={"Rajesh Kumar"} role="Chief Executive Officer" />
<TeamBox image={"/2.jpeg"} name={"Priya Sharma"} role="Chief Technology Officer" />
<TeamBox image={"/3.jpeg"} name={"Amit Patel"} role="Chief Operating Officer" />
<TeamBox image={"/4.jpeg"} name={"Sneha Reddy"} role="Head of Digital Solutions" />
</div>

          </div>
        </section>





<CTABox />


      </div>
    </>

  );
}
