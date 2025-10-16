"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Building2, Shield, Factory, Plane, Heart, Tv, 
  Code2, Smartphone, Cloud, ShieldCheck, Brain, Headphones, TrendingUp, Palette 
} from 'lucide-react';

interface CardProps {
  icon: any;
  title: string;
  description: string;
  image: string;
  link: string;
}

const industries: CardProps[] = [
  {
    icon: Building2,
    title: 'Finance',
    description: 'Digital banking, fintech solutions, and secure payment processing systems',
    image: 'https://images.unsplash.com/photo-1553801613-9b225d58f429?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    link: '/finance',
  },
  {
    icon: Shield,
    title: 'Insurance',
    description: 'Claims processing, risk management, and policy administration platforms',
    image: 'https://images.unsplash.com/photo-1747114936280-257b662bfe72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    link: '/insurance',
  },
  {
    icon: Factory,
    title: 'Manufacturing',
    description: 'Smart factories, IoT integration, and supply chain optimization solutions',
    image: 'https://images.unsplash.com/photo-1717386255773-1e3037c81788?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    link: '/manufacturing',
  },
  {
    icon: Plane,
    title: 'Travel & Hospitality',
    description: 'Booking systems, guest management, and personalized travel experiences',
    image: 'https://images.unsplash.com/photo-1678116964296-85135c31fcbc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    link: '/travel-hospitality',
  },
  {
    icon: Heart,
    title: 'Healthcare',
    description: 'Patient care systems, telemedicine, and health data management platforms',
    image: 'https://images.unsplash.com/photo-1668874896975-7f874c90600a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    link: '/healthcare',
  },
  {
    icon: Tv,
    title: 'Media & Entertainment',
    description: 'Content delivery, streaming platforms, and digital media management',
    image: 'https://images.unsplash.com/photo-1760404700115-461c3872e160?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    link: '/media-entertainment',
  },
];

const services: CardProps[] = [
  {
    icon: Code2,
    title: 'Custom Web Development',
    description: 'Scalable web applications, e-commerce platforms, and custom software solutions',
    image: 'https://images.unsplash.com/photo-1593720213681-e9a8778330a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    link: '/web-development',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android devices',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    link: '/mobile-app-development',
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps Solutions',
    description: 'Cloud infrastructure, automation, CI/CD pipelines, and containerization',
    image: 'https://images.unsplash.com/photo-1668854096784-3ce7679fa841?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    link: '/cloud-devops',
  },
  {
    icon: ShieldCheck,
    title: 'Cybersecurity Services',
    description: 'Security audits, threat detection, penetration testing, and compliance solutions',
    image: 'https://images.unsplash.com/photo-1691435828932-911a7801adfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    link: '/cybersecurity',
  },
  {
    icon: Brain,
    title: 'AI & Data Analytics',
    description: 'Machine learning, predictive analytics, business intelligence, and AI integration',
    image: 'https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    link: '/ai-data-analytics',
  },
  {
    icon: Headphones,
    title: 'IT Consulting & Support',
    description: 'Technical consulting, infrastructure planning, and 24/7 IT support services',
    image: 'https://images.unsplash.com/photo-1758273240360-76b908e7582a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    link: '/it-consulting',
  },
  {
    icon: TrendingUp,
    title: 'Digital Marketing & SEO',
    description: 'SEO optimization, content strategy, social media marketing, and PPC campaigns',
    image: 'https://images.unsplash.com/photo-1557838923-2985c318be48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    link: '/digital-marketing',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'User interface design, user experience research, prototyping, and design systems',
    image: 'https://images.unsplash.com/photo-1586717799252-bd134ad00e26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    link: '/ui-ux-design',
  },
];

export default function Industries() {
  return (
    <section id="industries" className="relative py-32 bg-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(229,57,53,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(229,57,53,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative">
        {/* Industries Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-0.5 bg-[#E53935]" />
            <span className="text-[#E53935] text-sm font-semibold tracking-widest uppercase">
              Industries We Serve
            </span>
            <div className="w-12 h-0.5 bg-[#E53935]" />
          </div>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-black mb-6 leading-[1.1] tracking-tight">
            Industries
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-normal">
            Powering business transformation across key industry verticals with tailored technology solutions
          </p>
        </motion.div>

        {/* Industries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-32">
          {industries.map((industry, idx) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group"
            >
              <Link href={industry.link} className="block h-full">
                <div className="relative h-full bg-white border-2 border-black/10 hover:border-[#E53935]/30 transition-all duration-300 overflow-hidden cursor-pointer">
                  <div className="absolute top-0 left-0 w-full h-1 bg-[#E53935] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 z-10" />

                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={industry.image}
                      alt={industry.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                      width={1080}
                      height={720}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    <div className="absolute bottom-4 left-4 w-12 h-12 bg-[#E53935] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <industry.icon className="w-6 h-6 text-white" strokeWidth={2} />
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-black mb-3 tracking-tight group-hover:text-[#E53935] transition-colors duration-300">
                      {industry.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed font-normal">
                      {industry.description}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Services Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-0.5 bg-[#E53935]" />
            <span className="text-[#E53935] text-sm font-semibold tracking-widest uppercase">
              Our Services
            </span>
            <div className="w-12 h-0.5 bg-[#E53935]" />
          </div>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-black mb-6 leading-[1.1] tracking-tight">
            Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-normal">
            Delivering specialized solutions across diverse sectors with deep industry expertise and innovative technology
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group"
            >
              <Link href={service.link} className="block h-full">
                <div className="relative h-full bg-white border-2 border-black/10 hover:border-[#E53935]/30 transition-all duration-300 overflow-hidden cursor-pointer">
                  <div className="absolute top-0 left-0 w-full h-1 bg-[#E53935] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 z-10" />
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                      width={1080}
                      height={720}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    <div className="absolute bottom-4 left-4 w-12 h-12 bg-[#E53935] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-6 h-6 text-white" strokeWidth={2} />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-black mb-3 tracking-tight group-hover:text-[#E53935] transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed font-normal">
                      {service.description}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
