"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  GraduationCap,
  CheckCircle,
  BookOpen,
  Users,
  Video,
  Award,
  TrendingUp,
  Target,
} from "lucide-react";

export default function CoachAxisPage() {
  const features = [
    {
      icon: BookOpen,
      title: "Course Management",
      description:
        "Create, organize, and deliver comprehensive training programs with structured curriculum and assessments.",
    },
    {
      icon: Video,
      title: "Live Sessions",
      description:
        "Interactive video sessions with HD streaming, screen sharing, breakout rooms, and session recording.",
    },
    {
      icon: Users,
      title: "Student Management",
      description:
        "Track student progress, engagement metrics, and performance with detailed analytics and reporting.",
    },
    {
      icon: Award,
      title: "Certifications",
      description:
        "Issue professional certificates, badges, and track learning achievements and milestones.",
    },
    {
      icon: TrendingUp,
      title: "Progress Tracking",
      description:
        "Monitor learning outcomes with comprehensive dashboards, reports, and performance insights.",
    },
    {
      icon: Target,
      title: "Goal Setting",
      description:
        "Define and track learning objectives with milestone-based assessments and competency mapping.",
    },
  ];

  const benefits = [
    "Engage students with interactive content",
    "Track progress with detailed analytics",
    "Automate administrative tasks",
    "Scale your coaching business",
    "Issue professional certifications",
    "Mobile learning on the go",
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
                  Learning Management System
                </span>
              </div>

              <h1 className="text-gray-900 mb-6 text-4xl font-bold">
                Coach Axis
              </h1>

              <p className="text-gray-600 mb-8">
                Professional coaching and training platform that empowers
                educators and trainers to deliver exceptional learning
                experiences with comprehensive tools, analytics, and engagement
                features.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link
                  href="/contact"
                  className="bg-[#E53935] text-white hover:bg-[#c62828] px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl"
                >
                  Start Teaching
                </Link>
                <button className="border-2 border-gray-300 hover:border-[#E53935] bg-white text-gray-900 px-8 py-4 rounded-lg transition-all duration-300">
                  View Platform
                </button>
              </div>

              <div className="grid grid-cols-3 gap-6">
                {[
                  { value: "10K+", label: "Courses" },
                  { value: "50K+", label: "Students" },
                  { value: "95%", label: "Completion" },
                ].map((stat) => (
                  <div key={stat.label} className="relative">
                    <div className="absolute top-0 left-0 w-full h-1 bg-[#E53935] rounded-full" />
                    <div className="pt-4">
                      <div className="text-gray-900 mb-1 text-xl font-semibold">
                        {stat.value}
                      </div>
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
                <GraduationCap className="w-48 h-48 text-white" strokeWidth={1} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
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
                Platform Features
              </span>
              <div className="w-12 h-1 bg-[#E53935] rounded-full" />
            </div>
            <h2 className="text-gray-900 mb-6 text-3xl font-bold">
              Everything You Need to Teach and Train
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
                  <h3 className="text-gray-900 mb-3 text-xl font-semibold">
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
                  Platform Benefits
                </span>
              </div>

              <h2 className="text-gray-900 mb-6 text-3xl font-bold">
                Empower Your Teaching Journey
              </h2>

              <p className="text-gray-600 mb-8">
                Coach Axis provides everything you need to create, deliver, and
                manage impactful learning experiences that engage students and
                drive results.
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
              <TrendingUp className="w-16 h-16 mb-6" strokeWidth={1.5} />
              <h3 className="mb-4 text-2xl font-semibold">Proven Results</h3>
              <p className="mb-6 text-white/90">
                Join thousands of educators and trainers using Coach Axis to
                deliver world-class learning experiences with measurable
                outcomes.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="mb-1 text-lg font-semibold">4.7/5</div>
                  <div className="text-white/80 text-sm">Instructor Rating</div>
                </div>
                <div>
                  <div className="mb-1 text-lg font-semibold">95%</div>
                  <div className="text-white/80 text-sm">Completion Rate</div>
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
            <h2 className="mb-6 text-3xl font-bold">
              Start Your Teaching Journey
            </h2>
            <p className="mb-8 text-white/90">
              Join thousands of educators using Coach Axis to deliver impactful
              learning experiences. Get started today.
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
