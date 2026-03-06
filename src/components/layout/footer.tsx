"use client";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineEnvelope } from "react-icons/hi2";
import FooterMid from "./footermid";
import BootomFooter from "./bottomfooter";
import { PhoneCall } from "lucide-react";

// 🎯 RENAMED AND UPDATED ARRAY FOR PRODUCTS
const products = [
    {
        name: "HRMS 360",
        description: "Complete HR management and payroll system",
        href: "/products/hrms-360",
        image:
            "https://images.unsplash.com/photo-1668511237388-404cc7e56e9d?crop=entropy&cs=tinysrgb&fit=max&w=1080&q=80",

    },
    {
        name: "CABX",
        description: "Cloud-based telephony and call center solution",
        href: "/products/cabx",
        image:
            "https://images.unsplash.com/photo-1616711248662-666c8aa10308?crop=entropy&cs=tinysrgb&fit=max&w=1080&q=80",
    },
    {
        name: "Troxi AI",
        description: "AI-powered automation and intelligent assistant",
        href: "/products/Troxi-AI",
        image:
            "https://images.unsplash.com/photo-1625314887424-9f190599bd56?crop=entropy&cs=tinysrgb&fit=max&w=1080&q=80",
    },
    {
        name: "Astrojyotish",
        description: "Vedic astrology and horoscope platform",
        href: "/products/Astrojyotish",
        image:
            "https://images.unsplash.com/photo-1614089254151-676cc373b01e?crop=entropy&cs=tinysrgb&fit=max&w=1080&q=80",
    },
    {
        name: "Coach Axis",
        description: "Professional coaching and training platform",
        href: "/products/Coach-Axis",
        image:
            "https://images.unsplash.com/photo-1554686177-87b3c0e1a575?crop=entropy&cs=tinysrgb&fit=max&w=1080&q=80",
    },
];

const services = [
    { name: 'Custom Web Development', href: '/web-development' },
    { name: 'Mobile App Development', href: '/mobile-app-development' },
    { name: 'Cloud & DevOps Solutions', href: '/cloud-devops' },
    { name: 'Cybersecurity Services', href: '/cybersecurity' },
    { name: 'AI & Data Analytics', href: '/ai-data-analytics' },
    { name: 'IT Consulting & Support', href: '/it-consulting' },
    { name: 'Digital Marketing & SEO', href: '/digital-marketing' },
];

const industries = [
    { name: 'Finance', href: '/finance' },
    { name: 'Insurance', href: '/insurance' },
    { name: 'Manufacturing', href: '/manufacturing' },
    { name: 'Travel & Hospitality', href: '/travel-hospitality' },
    { name: 'Healthcare', href: '/healthcare' },
    { name: 'Media & Entertainment', href: '/media-entertainment' },
    { name: 'UI/UX Design', href: '/ui-ux-design' },
];

export default function Footer() {
    return (
        <>
            <footer className="relative bg-white border-t border-black/10 overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(229,57,53,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(229,57,53,0.02)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
                <div className="max-w-[1400px] mx-auto px-6 lg:px-8 pt-20 pb-10 relative">
                    <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
                        <div className="lg:col-span-2">
                            <div>
                                <div className="mb-6">
                                    <Image src={"/logo.png"} alt={"logo"} width={167} height={40} />
                                </div>

                                <p className="text-gray-600 leading-relaxed mb-6 max-w-sm font-normal">Epic Global Digital Solutions Pvt Ltd delivers innovative cloud, AI, and digital solutions since 2015.</p>
                                <div className="space-y-3 mb-6">
                                    <Link href="mailto:info@epicglobal.co.in" className="inline-flex items-center gap-2 text-gray-600 hover:text-[#E53935] transition-colors group font-normal">
                                        <HiOutlineEnvelope />
                                        <span>info@epicglobal.co.in</span>
                                    </Link>
                                    <div className="flex gap-1 items-center group w-fit">
                                        <PhoneCall size={14} className="group-hover:text-[#E53935]" />
                                        <a href="tel:+911204176500" className="text-sm text-gray-600 font-normal hover:text-[#E53935] font-normal">+91 120 417 6500</a>
                                    </div>
                                    <div className="text-sm text-gray-500 space-y-1 font-normal">
                                        <p>Epic Global Digital Solutions Private Limited</p>
                                        <p>CIN-U62099UP2023PTC179666</p>
                                    </div>

                                </div>

                            </div>
                        </div>

                        {/* 🎯 REPLACED COMPANY SECTION WITH PRODUCTS */}
                        <div>
                            <h4 className="font-bold text-black mb-6 tracking-tight ">Products</h4>
                            <ul className="space-y-3">
                                {products?.map((items, index) => {
                                    return (
                                        <li key={index}>
                                            <Link href={items.href} className="text-gray-600 hover:text-[#E53935] transition-colors inline-block hover:translate-x-1 duration-200 font-normal text-left">{items.name}</Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                        {/* END OF PRODUCTS SECTION */}

                        <div>
                            <h4 className="font-bold text-black mb-6 tracking-tight ">Services</h4>
                            <ul className="space-y-3">
                                {services?.map((items, index) => {
                                    return (
                                        <li key={index}>
                                            <Link href={items.href} className="text-gray-600 hover:text-[#E53935] transition-colors inline-block hover:translate-x-1 duration-200 font-normal text-left">{items.name}</Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-black mb-6 tracking-tight ">Industries</h4>
                            <ul className="space-y-3">
                                {industries?.map((items, index) => {
                                    return (
                                        <li key={index}>
                                            <Link href={items.href} className="text-gray-600 hover:text-[#E53935] transition-colors inline-block hover:translate-x-1 duration-200 font-normal text-left">{items.name}</Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>


                    </div>

                    <FooterMid />

                    <BootomFooter />

                </div>


            </footer>
        </>
    )
}

