"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Phone,
  ArrowRight,
  CheckCircle,
  Cloud,
  BarChart3,
  Headphones,
  PhoneCall,
  TrendingUp,
  Globe,
  Zap,
} from "lucide-react";
import { IconType } from "react-icons";

interface Feature {
  icon: IconType;
  title: string;
  description: string;
}

export default function CABXPage() {
  const features: Feature[] = [
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      description:
        "Scalable cloud-based platform with 99.9% uptime, automatic updates, and global redundancy for reliable service.",
    },
    {
      icon: PhoneCall,
      title: "Advanced IVR System",
      description:
        "Multi-level interactive voice response with smart routing, custom greetings, and seamless call flow management.",
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description:
        "Comprehensive dashboards with live call metrics, agent performance tracking, and detailed reporting capabilities.",
    },
    {
      icon: Headphones,
      title: "Call Center Management",
      description:
        "Complete agent management, queue handling, call recording, monitoring, and quality assurance tools.",
    },
    {
      icon: Globe,
      title: "Global Connectivity",
      description:
        "International calling, local numbers in 50+ countries, and seamless integration with global networks.",
    },
    {
      icon: Zap,
      title: "CRM Integration",
      description:
        "Native integrations with leading CRM platforms, automated data sync, and unified customer view.",
    },
  ];

  const benefits: string[] = [
    "Reduce call center costs by up to 60%",
    "Improve customer satisfaction scores",
    "Scale instantly without hardware",
    "Real-time call analytics and insights",
    "Enterprise-grade security and compliance",
    "Seamless remote team management",
  ];

  const integrations: string[] = [
    "Salesforce",
    "HubSpot",
    "Zoho CRM",
    "Microsoft Dynamics",
    "Slack",
    "Zendesk",
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
            

              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-1 bg-[#E53935] rounded-full" />
                <span className="text-[#E53935] text-sm font-semibold tracking-wider uppercase">
                  Cloud Telephony Solution
                </span>
              </div>

              <h1 className="text-gray-900 text-5xl font-bold mb-6">CABX</h1>

              <p className="text-gray-600 mb-8">
                Revolutionary cloud-based telephony and call center solution that transforms how businesses
                communicate. Scale effortlessly, reduce costs, and deliver exceptional customer experiences.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link
                  href="/contact"
                  className="bg-[#E53935] text-white hover:bg-[#c62828] px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl"
                >
                  Start Free Trial
                </Link>
                <button className="border-2 border-gray-300 hover:border-[#E53935] bg-white text-gray-900 px-8 py-4 rounded-lg transition-all duration-300">
                  Watch Demo
                </button>
              </div>

              <div className="grid grid-cols-3 gap-6">
                {[
                  { value: "10M+", label: "Calls/Month" },
                  { value: "50+", label: "Countries" },
                  { value: "<50ms", label: "Latency" },
                ].map((stat) => (
                  <div key={stat.label} className="relative">
                    <div className="absolute top-0 left-0 w-full h-1 bg-[#E53935] rounded-full" />
                    <div className="pt-4">
                      <div className="text-gray-900 text-lg font-semibold mb-1">{stat.value}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-[#E53935] to-[#c62828] rounded-3xl p-12 flex items-center justify-center relative shadow-2xl">
                <Phone className="w-48 h-48 text-white" strokeWidth={1} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-1 bg-[#E53935] rounded-full" />
              <span className="text-[#E53935] text-sm font-semibold tracking-wider uppercase">
                Core Capabilities
              </span>
              <div className="w-12 h-1 bg-[#E53935] rounded-full" />
            </div>
            <h2 className="text-gray-900 text-3xl font-bold mb-6">
              Enterprise-Grade Communication Platform
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="bg-white rounded-2xl border border-gray-200 p-8 hover:border-[#E53935] hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="w-14 h-14 bg-[#E53935] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-white" strokeWidth={2} />
                  </div>
                  <h3 className="text-gray-900 text-lg font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-1 bg-[#E53935] rounded-full" />
                <span className="text-[#E53935] text-sm font-semibold tracking-wider uppercase">
                  Business Impact
                </span>
              </div>
              <h2 className="text-gray-900 text-3xl font-bold mb-6">
                Measurable Results from Day One
              </h2>
              <p className="text-gray-600 mb-8">
                CABX delivers immediate value through reduced infrastructure costs, improved customer satisfaction,
                and actionable insights from every interaction.
              </p>

              <ul className="space-y-4">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#E53935] flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <span className="text-gray-600">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-[#E53935] to-[#c62828] rounded-3xl p-12 text-white shadow-2xl"
            >
              <TrendingUp className="w-16 h-16 mb-6" strokeWidth={1.5} />
              <h3 className="text-2xl font-semibold mb-4">Proven Performance</h3>
              <p className="mb-6 text-white/90">
                Join thousands of businesses worldwide using CABX to power their customer communications.
                Experience crystal-clear calls with sub-50ms latency.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-2xl font-semibold mb-1">99.99%</div>
                  <div className="text-white/80 text-sm">Uptime SLA</div>
                </div>
                <div>
                  <div className="text-2xl font-semibold mb-1">4.8/5</div>
                  <div className="text-white/80 text-sm">Customer Rating</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-1 bg-[#E53935] rounded-full" />
              <span className="text-[#E53935] text-sm font-semibold tracking-wider uppercase">
                Integrations
              </span>
              <div className="w-12 h-1 bg-[#E53935] rounded-full" />
            </div>
            <h2 className="text-gray-900 text-3xl font-bold mb-6">
              Works With Your Favorite Tools
            </h2>
            <p className="text-gray-600">
              Seamlessly integrate with your existing tech stack for a unified workflow.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
            {integrations.map((integration, index) => (
              <motion.div
                key={integration}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                className="bg-white rounded-xl border border-gray-200 p-6 flex items-center justify-center hover:border-[#E53935] hover:shadow-lg transition-all duration-300 aspect-square"
              >
                <span className="text-gray-900 text-center">{integration}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-[#E53935] to-[#c62828] rounded-3xl p-12 lg:p-16 text-center text-white shadow-2xl"
          >
            <h2 className="text-3xl font-semibold mb-6">Start Your Free 30-Day Trial</h2>
            <p className="mb-8 text-white/90">
              No credit card required. Get up and running in minutes with full access to all features.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="bg-white text-[#E53935] hover:bg-gray-50 px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center min-w-[200px] shadow-lg hover:shadow-xl"
              >
                Start Free Trial
              </Link>
              <Link
                href="/products"
                className="border-2 border-white hover:bg-white/10 text-white px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center min-w-[200px]"
              >
                View All Products
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
