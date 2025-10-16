"use client";

import { motion } from "framer-motion"; // ✅ Correct import for Next.js + motion
import Image from "next/image";

export function About() {
  return (
    <section id="about" className="relative py-32 bg-white overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(229,57,53,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(229,57,53,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-0.5 bg-[#E53935]" />
            <span className="text-[#E53935] text-sm font-semibold tracking-widest uppercase">
              About Epic Global
            </span>
          </div>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-black mb-6 leading-[1.1] tracking-tight max-w-4xl">
            Innovating Solutions, Endless Possibilities
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl leading-relaxed font-normal">
            Epic Global Digital Solutions Pvt Ltd delivers innovative cloud, AI,
            and digital solutions. With a focus on excellence and sustainability,
            we empower businesses to grow, connect, and thrive in a rapidly
            evolving digital world.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start mb-24">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-black mb-6 leading-tight">
              We are Epic Global
            </h3>

            <div className="space-y-5 text-lg text-gray-600 leading-relaxed font-normal">
              <p>
                Since 2015, Epic Global Digital Solutions Pvt Ltd has been
                empowering businesses of all sizes with cutting-edge solutions
                that enhance performance and elevate brand presence. Renowned for
                our exceptional service quality, expertise in IT infrastructure
                management, and trusted corporate reputation, we proudly serve
                diverse industries including e-commerce, retail, IT, software,
                education, banking, finance, and government sectors.
              </p>

              <p>
                At Epic Global, we prioritize a client-centric approach, ensuring
                seamless integration of technical expertise with your business
                goals to deliver outstanding results within committed timelines.
                Our vision is to provide an unparalleled customer experience,
                which drives us to maintain rigorous performance standards and
                continuously monitor key metrics. Free from geographical
                constraints and outdated processes, we embrace innovative
                technologies to future-proof your business.
              </p>

              <p>
                Our robust portfolio of next-generation services includes cloud
                solutions, big data analytics, enterprise applications, business
                process services, AI, and consulting. Delivered by skilled
                professionals, these services are meticulously crafted to meet
                the unique needs of your business with ease. With a strong
                presence across multiple locations in India, the USA, UAE, and
                the UK, we are committed to global excellence. Epic Global
                Digital Solutions Pvt Ltd is proud to be ISO 9001:2015 certified,
                reflecting our commitment to delivering quality, security, and
                innovation.
              </p>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-[#E53935] opacity-10 blur-2xl group-hover:opacity-20 transition-opacity" />
              <div className="relative aspect-[4/3] overflow-hidden border border-gray-200">
                <Image
                  src="https://images.unsplash.com/flagged/photo-1579274216947-86eaa4b00475?auto=format&fit=crop&w=1080&q=80"
                  alt="Technology Infrastructure"
                  fill
                  className="object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 border-t-2 border-r-2 border-[#E53935]" />
              <div className="absolute -bottom-4 -left-4 w-20 h-20 border-b-2 border-l-2 border-[#E53935]" />
            </div>
          </motion.div>
        </div>

        {/* Our Dream */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            {/* Left Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative group">
                <div className="absolute -inset-4 bg-[#E53935] opacity-10 blur-2xl group-hover:opacity-20 transition-opacity" />
                <div className="relative aspect-[4/3] overflow-hidden border border-gray-200">
                  <Image
                    src="https://images.unsplash.com/photo-1758691736804-4e88c52ad58b?auto=format&fit=crop&w=1080&q=80"
                    alt="Team Innovation"
                    fill
                    className="object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                </div>
                <div className="absolute -top-4 -right-4 w-20 h-20 border-t-2 border-r-2 border-[#E53935]" />
                <div className="absolute -bottom-4 -left-4 w-20 h-20 border-b-2 border-l-2 border-[#E53935]" />
              </div>
            </motion.div>

            {/* Right Text */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="space-y-8 order-1 lg:order-2"
            >
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-0.5 bg-[#E53935]" />
                  <span className="text-[#E53935] text-sm font-semibold tracking-widest uppercase">
                    Our Dream
                  </span>
                </div>

                <h3 className="text-4xl sm:text-5xl font-bold text-black mb-8 leading-tight tracking-tight">
                  Our Dream is
                </h3>

                <p className="text-lg text-gray-600 leading-relaxed font-normal mb-10">
                  Epic Global Digital Solutions Pvt. Ltd. is driven by a passion
                  for innovation and excellence, delivering cutting-edge digital
                  solutions that empower businesses and individuals. We specialize
                  in creating user-focused platforms and providing comprehensive
                  IT services to help our clients thrive in an ever-evolving
                  digital world.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { value: "500+", label: "Global Customers" },
                    { value: "9+", label: "Years of Experience" },
                    { value: "100+", label: "Partnered Enterprises" },
                    { value: "95%", label: "Client Retention" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="border-l-2 border-[#E53935] pl-4"
                    >
                      <div className="text-4xl font-bold text-black mb-1 font-mono tracking-tight">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-500 uppercase tracking-wide font-semibold">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Vision & Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-12">
            <div className="w-12 h-0.5 bg-[#E53935]" />
            <h3 className="text-3xl font-bold text-black tracking-tight">
              Vision & Core Values
            </h3>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative group"
            >
              <div className="relative bg-[#E53935] p-10 h-full text-white">
                <div className="space-y-6">
                  <div>
                    <div className="text-white/80 uppercase tracking-widest text-sm font-semibold mb-2">
                      Our Vision
                    </div>
                    <h4 className="text-3xl font-bold tracking-tight">
                      Purpose
                    </h4>
                  </div>
                  <p className="text-white/95 text-lg leading-relaxed">
                    We aspire to be a global leader in cloud computing, AI, and
                    digital transformation. Our vision is to reshape the world by
                    championing technologies that drive innovation, promote
                    inclusivity, and seamlessly connect digital and physical
                    realms.
                  </p>
                </div>
                <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-2 border-r-2 border-white/30" />
              </div>
            </motion.div>

            {/* Core Values */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative group"
            >
              <div className="relative bg-black/[0.02] border border-black/10 p-10 h-full hover:bg-black/[0.04] transition-all duration-300">
                <div className="absolute top-0 left-0 w-full h-1 bg-[#E53935] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                <div className="space-y-6">
                  <div>
                    <div className="text-[#E53935] uppercase tracking-widest text-sm font-semibold mb-2">
                      What Drives Us
                    </div>
                    <h4 className="text-3xl font-bold text-black tracking-tight">
                      Core Values
                    </h4>
                  </div>
                  <div className="space-y-4">
                    {[
                      "Innovation",
                      "Excellence",
                      "Sustainability",
                      "Inclusivity",
                      "Client Success",
                      "Global Impact",
                    ].map((value, i) => (
                      <motion.div
                        key={value}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, duration: 0.3 }}
                        className="flex items-center gap-3 group/item"
                      >
                        <div className="w-1.5 h-1.5 bg-[#E53935] flex-shrink-0 group-hover/item:w-8 transition-all duration-300" />
                        <span className="text-gray-700 group-hover/item:text-black transition-colors font-medium">
                          {value}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-20 h-20 border-t-2 border-r-2 border-[#E53935]/30" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
