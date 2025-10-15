
import Link from "next/link";
import { FaRegHeart } from "react-icons/fa";
import { LuLightbulb } from "react-icons/lu";
import { LuAward } from "react-icons/lu";
import { LuUsers } from "react-icons/lu";
import { FiTarget } from "react-icons/fi";
import { IoEyeOutline } from "react-icons/io5";

export default function AboutPage() {
  return (
    <div className=" max-w-[1400px] min-h-screen flex flex-col items-center justify-center px-4 py-20 bg-white">
      <p className="text-red-600 text-sm uppercase mb-2 tracking-widest">
        About Epic Global
      </p>

      <h1 className=" text-6xl sm:text-7xl lg:text-8xl font-bold text-black mb-8 leading-[1.1] tracking-tight">
        About Us
      </h1>

      <p className="text-xl text-gray-600 leading-relaxed font-normal max-w-3xl mx-auto text-center">
        Epic Global Digital Solutions Pvt Ltd is a leading technology company delivering
        innovative cloud, AI, and digital transformation solutions. Since 2015, we've been
        empowering businesses worldwide with cutting-edge technology and exceptional service quality.
      </p>

      <Link
        href="/"
        className="inline-flex items-center gap-2 mt-12 px-8 h-14 bg-white border-2 border-black/10 hover:border-[#E53935] text-black font-semibold transition-all duration-300 group"
      >
       <div className="lucide lucide-arrow-left w-5 h-5 group-hover:-translate-x-1  -translate-y-0.5 transition-transform duration-300 ">←</div>  Back to Home
      </Link>

      <div className=" min-h-screen px-6 py-16 bg-[#fafafa] max-w-[1400px] ">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <p className="text-[#E53935] text-sm font-semibold tracking-widest uppercase mb-6">Our Purpose</p>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-20 text-black leading-[1.1] tracking-tight">Mission & Vision</h2>

          <div className="grid lg:grid-cols-2 gap-8 mb-20">
            
            <div className="relative bg-white border border-black/10 p-12 group hover:border-[#E53935]/30 transition-all duration-300">
              <div className="w-16 h-16 bg-[#E53935] flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                {<FiTarget />}

              </div>
              <h3 className="text-3xl text-left font-bold text-black mb-6 tracking-tight">Our Mission</h3>
              <p className="text-lg text-left text-gray-600 leading-relaxed font-normal">
                To empower businesses worldwide with innovative technology solutions
                that drive digital transformation, enhance operational efficiency,
                and create sustainable growth. We are committed to delivering
                exceptional value through cutting-edge cloud computing, AI, and
                enterprise solutions.
              </p>
            </div>

            <div className="relative bg-white border border-black/10 p-12 group hover:border-[#E53935]/30 transition-all duration-300">
              <div className="w-16 h-16 bg-[#E53935] flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
               <IoEyeOutline />

              </div>
              <h3 className="text-3xl text-left font-bold text-black mb-6 tracking-tight">Our Vision</h3>
              <p className="text-lg text-gray-600 text-left leading-relaxed font-normal">
                To be a global leader in cloud computing, AI, and digital transformation.
                We aspire to reshape the world by championing technologies that drive innovation,
                promote inclusivity, and seamlessly connect digital and physical realms,
                creating a more efficient and connected future.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto text-center">
          <p className="text-3xl font-bold text-black mb-4 tracking-tight">Our Core Values</p>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-normal mb-12">The principles that guide everything we do</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Innovation", desc: "Pioneering cutting-edge solutions that drive digital transformation.", icon: <LuLightbulb/>  },   
              { title: "Excellence", desc: "Delivering superior quality in every project we undertake.", icon:<LuAward /> },
              { title: "Collaboration", desc: "Building strong partnerships with our clients and teams.", icon: <LuUsers/> },
              { title: "Integrity", desc: "Maintaining transparency and ethical practices in all we do.", icon: <FaRegHeart /> },
            ].map((value) => (
              <div key={value.title} className="bg-white border border-black/10 p-8 text-center hover:border-[#E53935]/30 transition-all duration-300 group">
                <div className="w-14 h-14 bg-[#E53935] flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold text-black mb-3 tracking-tight">{value.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed font-normal">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership Team Section */}
        <div className="max-w-[1400px] max-w-6xl mx-auto  text-center mt-16">
          <p className="text-[#E53935] text-sm font-semibold tracking-widest uppercase mb-6">Leadership</p>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-black mb-6 leading-[1.1] tracking-tight">Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-normal">Meet the visionaries driving Epic Global's success and innovation</p>
          

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
            <div className="relative bg-white border border-black/10 overflow-hidden hover:border-[#E53935]/30 transition-all duration-300">
            <div className="aspect-square relative overflow-hidden">
             <div className=""> <img src="/photo-1581065178047-8ee15951ede6.jpeg" alt="Rajesh Kumar" className="w-full h-48 object-cover  mb-4" />
              <h3 className="font-semibold text-lg mb-2">Rajesh Kumar</h3>
              <p className="text-sm text-[#E53935] font-semibold uppercase tracking-wider">Chief Executive Officer</p>
            </div>
            </div>
            </div>
            <div className="relative bg-white border border-black/10 overflow-hidden hover:border-[#E53935]/30 transition-all duration-300">
              <img src="/photo-1629507313712-f21468afdf2e.jpeg" alt="Priya Sharma" className="w-full h-48 object-cover  mb-4" />
              <h3 className="font-semibold text-lg mb-2">Priya Sharma</h3>
              <p className="text-sm text-[#E53935] font-semibold uppercase tracking-wider">Chief Technology Officer</p>
            </div>
            <div className="relative bg-white border border-black/10 overflow-hidden hover:border-[#E53935]/30 transition-all duration-300">
              <img src="/photo-1688828792910-ca9567d15054.jpeg" alt="Amit Patel" className="w-full h-48 object-cover  mb-4" />
              <h3 className="font-semibold text-lg mb-2">Amit Patel</h3>
              <p className="text-sm text-[#E53935] font-semibold uppercase tracking-wider">Chief Operating Officer</p>
            </div>
            <div className="relative bg-white border border-black/10 overflow-hidden hover:border-[#E53935]/30 transition-all duration-300">
              <img src="/photo-1737574821698-862e77f044c1.jpeg" alt="Sneha Reddy" className="w-full h-48 object-cover mb-4" />
              <h3 className="font-semibold text-lg mb-2">Sneha Reddy</h3>
              <p className="text-sm text-[#E53935] font-semibold uppercase tracking-wider">Head of Digital Solutions</p>
            </div>
          </div>
        </div>
        <div className="relative py-20 bg-[#E53935] mt-20">

  <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 tracking-tight text-center">Ready to Transform Your Business?</h2>
  <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto font-normal px-4 "
>Let’s discuss how our solutions can accelerate your digital journey.</p>
<div className="justify-self-center">
  <Link
    href="/contact"
    className="inline-flex items-center gap-2 px-8 h-14 bg-white text-black font-semibold hover:bg-black hover:text-white transition-all duration-300"
  >
    Get In Touch
  </Link>
</div>
</div>

      </div>
    </div>
  );
}
