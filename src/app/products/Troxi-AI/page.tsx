"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Bot,
  ArrowRight,
  CheckCircle,
  Brain,
  Zap,
  Target,
  MessageSquare,
  Workflow,
  Code,
  TrendingUp,
} from "lucide-react";

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
}

export default function TroxiAIPage() {
  const features: Feature[] = [
    {
      icon: Brain,
      title: "Advanced AI Engine",
      description:
        "State-of-the-art machine learning models with natural language understanding and contextual awareness.",
    },
    {
      icon: Workflow,
      title: "Workflow Automation",
      description:
        "Intelligent automation of repetitive tasks with smart decision-making and adaptive learning capabilities.",
    },
    {
      icon: MessageSquare,
      title: "Conversational AI",
      description:
        "Natural language processing for seamless human-like interactions across multiple channels and languages.",
    },
    {
      icon: Code,
      title: "API Integration",
      description:
        "Robust APIs and webhooks for easy integration with your existing tools and custom applications.",
    },
    {
      icon: Target,
      title: "Predictive Analytics",
      description:
        "Data-driven insights and forecasting to make informed decisions and anticipate future trends.",
    },
    {
      icon: Zap,
      title: "Real-time Processing",
      description:
        "Lightning-fast response times with distributed computing and edge processing capabilities.",
    },
  ];

  const benefits: string[] = [
    "Increase productivity by 300%",
    "Reduce operational costs by 50%",
    "Automate 80% of routine tasks",
    "24/7 intelligent assistance",
    "Real-time insights and analytics",
    "Scale without adding headcount",
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >

              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-1 bg-[#E53935] rounded-full" />
                <span className="text-[#E53935] text-sm font-semibold tracking-wider uppercase">
                  AI-Powered Platform
                </span>
              </div>

              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Troxi AI
              </h1>

              <p className="text-gray-600 mb-8">
                AI-powered automation and intelligent assistant that transforms
                your business operations. Leverage cutting-edge machine learning
                to automate workflows and gain actionable insights.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link
                  href="/contact"
                  className="bg-[#E53935] text-white hover:bg-[#c62828] px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl"
                >
                  Get Started
                </Link>
                <button className="border-2 border-gray-300 hover:border-[#E53935] bg-white text-gray-900 px-8 py-4 rounded-lg transition-all duration-300">
                  View Demo
                </button>
              </div>

              <div className="grid grid-cols-3 gap-6">
                {[
                  { value: "98%", label: "Accuracy" },
                  { value: "<100ms", label: "Response" },
                  { value: "50+", label: "Languages" },
                ].map((stat) => (
                  <div key={stat.label} className="relative">
                    <div className="absolute top-0 left-0 w-full h-1 bg-[#E53935] rounded-full" />
                    <div className="pt-4">
                      <div className="text-gray-900 mb-1 font-semibold">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Illustration */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-[#E53935] to-[#c62828] rounded-3xl p-12 flex items-center justify-center shadow-2xl">
                <Bot className="w-48 h-48 text-white" strokeWidth={1} />
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
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-1 bg-[#E53935] rounded-full" />
              <span className="text-[#E53935] text-sm font-semibold tracking-wider uppercase">
                AI Capabilities
              </span>
              <div className="w-12 h-1 bg-[#E53935] rounded-full" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Intelligent Automation at Scale
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
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
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
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-1 bg-[#E53935] rounded-full" />
                <span className="text-[#E53935] text-sm font-semibold tracking-wider uppercase">
                  Business Impact
                </span>
              </div>

              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Transform Operations with AI
              </h2>

              <p className="text-gray-600 mb-8">
                Troxi AI delivers measurable results by automating complex
                workflows, providing intelligent insights, and scaling with your
                business needs.
              </p>

              <ul className="space-y-4">
                {benefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex items-start gap-3 text-gray-600"
                  >
                    <CheckCircle
                      className="w-6 h-6 text-[#E53935] flex-shrink-0 mt-0.5"
                      strokeWidth={2}
                    />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-[#E53935] to-[#c62828] rounded-3xl p-12 text-white shadow-2xl"
            >
              <TrendingUp className="w-16 h-16 mb-6" strokeWidth={1.5} />
              <h3 className="text-2xl font-semibold mb-4">
                Next-Generation AI
              </h3>
              <p className="mb-6 text-white/90">
                Built on cutting-edge machine learning technology with continuous
                learning and adaptation. Enterprise-ready with SOC 2 compliance
                and data privacy protection.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold mb-1">5M+</div>
                  <div className="text-white/80 text-sm">Tasks Automated</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-1">99.2%</div>
                  <div className="text-white/80 text-sm">Accuracy Rate</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-[#E53935] to-[#c62828] rounded-3xl p-12 lg:p-16 text-center text-white shadow-2xl"
          >
            <h2 className="text-4xl font-bold mb-6">
              Experience the Power of AI
            </h2>
            <p className="mb-8 text-white/90 max-w-2xl mx-auto">
              Transform your business with intelligent automation. Get started
              today with a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="bg-white text-[#E53935] hover:bg-gray-50 px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center min-w-[200px] shadow-lg hover:shadow-xl"
              >
                Get Started
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
