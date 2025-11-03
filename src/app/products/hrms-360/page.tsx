"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Users,
  ArrowRight,
  CheckCircle,
  Calendar,
  DollarSign,
  BarChart3,
  FileText,
  Clock,
  Award,
  Shield,
} from "lucide-react";

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
}

interface Module {
  name: string;
  included: boolean;
}

export default function HRMS360Page() {
  const features: Feature[] = [
    {
      icon: Users,
      title: "Employee Management",
      description:
        "Centralized employee database with complete profile management, organizational hierarchy, and role-based access control.",
    },
    {
      icon: DollarSign,
      title: "Payroll Processing",
      description:
        "Automated salary calculations, tax deductions, compliance management, and seamless integration with banking systems.",
    },
    {
      icon: Calendar,
      title: "Leave & Attendance",
      description:
        "Real-time attendance tracking, leave management, shift scheduling, and comprehensive reporting.",
    },
    {
      icon: BarChart3,
      title: "Performance Tracking",
      description:
        "Goal setting, performance reviews, 360-degree feedback, and data-driven insights for employee development.",
    },
    {
      icon: FileText,
      title: "Document Management",
      description:
        "Secure storage for employee documents, contracts, policies, and automated document workflows.",
    },
    {
      icon: Clock,
      title: "Time Tracking",
      description:
        "Accurate time and project tracking, overtime management, and integration with payroll systems.",
    },
  ];

  const benefits: string[] = [
    "Reduce HR administrative time by 70%",
    "Improve payroll accuracy to 99.9%",
    "Enhance employee satisfaction scores",
    "Ensure compliance with labor laws",
    "Real-time analytics and reporting",
    "Mobile-first employee self-service",
  ];

  const modules: Module[] = [
    { name: "Core HR", included: true },
    { name: "Payroll Management", included: true },
    { name: "Recruitment & Onboarding", included: true },
    { name: "Performance Management", included: true },
    { name: "Learning Management", included: true },
    { name: "Analytics & Reporting", included: true },
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
                  HR Management System
                </span>
              </div>

              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                HRMS 360
              </h1>

              <p className="text-gray-600 mb-8">
                Complete HR management and payroll system designed to streamline
                your workforce operations, from hire to retire. Automate
                processes, ensure compliance, and empower your employees.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link
                  href="/contact"
                  className="bg-[#E53935] text-white hover:bg-[#c62828] px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl"
                >
                  Request Demo
                </Link>
                <button className="border-2 border-gray-300 hover:border-[#E53935] bg-white text-gray-900 px-8 py-4 rounded-lg transition-all duration-300">
                  Download Brochure
                </button>
              </div>

              <div className="grid grid-cols-3 gap-6">
                {[
                  { value: "50K+", label: "Active Users" },
                  { value: "99.9%", label: "Uptime" },
                  { value: "24/7", label: "Support" },
                ].map((stat) => (
                  <div key={stat.label} className="relative">
                    <div className="absolute top-0 left-0 w-full h-1 bg-[#E53935] rounded-full" />
                    <div className="pt-4">
                      <div className="text-gray-900 mb-1">{stat.value}</div>
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
                <Users className="w-48 h-48 text-white" strokeWidth={1} />
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
                Key Features
              </span>
              <div className="w-12 h-1 bg-[#E53935] rounded-full" />
            </div>
            <h2 className="text-gray-900 mb-6 text-3xl font-semibold">
              Everything You Need to Manage Your Workforce
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
                  <h3 className="text-gray-900 mb-3 text-lg font-semibold">
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
                  Benefits
                </span>
              </div>

              <h2 className="text-gray-900 mb-6 text-3xl font-semibold">
                Transform Your HR Operations
              </h2>

              <p className="text-gray-600 mb-8">
                HRMS 360 delivers measurable business outcomes by automating
                manual processes, reducing errors, and providing actionable
                insights.
              </p>

              <ul className="space-y-4">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <CheckCircle
                      className="w-6 h-6 text-[#E53935] flex-shrink-0 mt-0.5"
                      strokeWidth={2}
                    />
                    <span className="text-gray-600">{benefit}</span>
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
              <Award className="w-16 h-16 mb-6" strokeWidth={1.5} />
              <h3 className="mb-4 text-2xl font-semibold">
                Industry-Leading Solution
              </h3>
              <p className="mb-6 text-white/90">
                Trusted by Fortune 500 companies and growing businesses
                worldwide. ISO 9001:2015 certified with enterprise-grade
                security.
              </p>
              <div className="flex items-center gap-3">
                <Shield className="w-6 h-6" strokeWidth={2} />
                <span>SOC 2 Type II Compliant</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
