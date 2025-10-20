"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import epicLogo from 'figma:asset/430758e90aef2906bebcc4fbb30b4921d5e5d98e.png';


export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white"
    >
      {/* Background */}
      <div className="absolute inset-0">
        {/* Grid Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(229,57,53,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(229,57,53,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />

        {/* Diagonal Lines */}
        <svg
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="diagonal-lines"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M0 40L40 0"
                stroke="rgba(229,57,53,0.05)"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diagonal-lines)" />
        </svg>

        {/* Logo background (replace /epic-logo.png with your actual file path) */}
        <div className="absolute top-1/2 right-[10%] -translate-y-1/2 w-[600px] h-[600px] opacity-[0.06] pointer-events-none">
          <Image
            src="/430758e90aef2906bebcc4fbb30b4921d5e5d98e.png"
            alt="Epic Logo"
            width={600}
            height={600}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Red gradient glows */}
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-[#E53935] rounded-full opacity-10 blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-[#E53935] rounded-full opacity-5 blur-[100px]" />
      </div>

      {/* Animated Shapes */}
      <motion.div
        className="absolute top-20 right-20 w-32 h-32 border border-[#E53935]/20"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-40 left-20 w-24 h-24 border-2 border-[#E53935]/10"
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />

      <motion.div
        style={{ y, opacity }}
        className="max-w-[1400px] mx-auto px-6 lg:px-8 py-32 relative z-10"
      >
        <div className="max-w-5xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-black/5 border border-black/10 text-black text-sm font-medium mb-8"
          >
            <div className="w-2 h-2 bg-[#E53935] rounded-full animate-pulse" />
            <span>Powering the Future of Enterprise Technology</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-6xl sm:text-7xl lg:text-8xl font-bold text-black mb-6 leading-[1.05] tracking-tight"
          >
            Accelerate Your
            <br />
            <span className="text-[#E53935]">Digital Future</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl sm:text-2xl text-gray-600 mb-12 max-w-3xl leading-relaxed font-normal"
          >
            Epic Global delivers enterprise-grade technology solutions that
            transform businesses, drive innovation, and unlock unprecedented
            growth opportunities.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 mb-20"
          >
            <Button
              size="lg"
              onClick={() => scrollToSection("#contact")}
              className="bg-[#E53935] text-white hover:bg-[#C62828] font-semibold px-8 h-14 text-lg group"
            >
              <span className="flex items-center gap-2">
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("#about")}
              className="border-2 border-black/20 hover:border-[#E53935] bg-transparent hover:bg-black/5 text-black h-14 px-8 text-lg font-semibold transition-all duration-300"
            >
              Learn More
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-black/10"
          >
            {[
              { value: "500+", label: "Global Clients" },
              { value: "15+", label: "Years of Excellence" },
              { value: "98%", label: "Client Satisfaction" },
              { value: "50+", label: "Countries Served" },
            ].map((stat) => (
              <div key={stat.label} className="group">
                <div className="text-4xl sm:text-5xl font-bold text-black mb-2 font-mono tracking-tight">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500 font-medium tracking-wide uppercase">
                  {stat.label}
                </div>
                <div className="w-12 h-0.5 bg-[#E53935] mt-3 group-hover:w-full transition-all duration-500" />
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        onClick={() => scrollToSection("#about")}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 hover:text-[#E53935] transition-colors group"
      >
        <span className="text-xs uppercase tracking-widest font-semibold">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.button>
    </section>
  );
}
