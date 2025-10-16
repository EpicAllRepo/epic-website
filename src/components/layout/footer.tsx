import Image from "next/image";
import Link from "next/link";
import { HiOutlineEnvelope } from "react-icons/hi2";
import FooterMid from "./footermid";
import BootomFooter from "./bottomfooter";

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

                                    <p className="text-sm text-gray-500 font-normal">Tel: 01204176500</p>

                                    <div className="text-sm text-gray-500 space-y-1 font-normal">
                                        <p>Epic Global Digital Solutions Private Limited</p>
                                        <p>CIN-U62099UP2023PTC179666</p>
                                    </div>

                                </div>

                            </div>
                        </div>
                        <div>
                            <h4 className="font-bold text-black mb-6 tracking-tight ">Company</h4>
                            <ul className="space-y-3">
                                {companyarry?.map((items, index) => {
                                    return (
                                        
                                            <li key={index}>
                                                <Link href={items.link} className="text-gray-600 hover:text-[#E53935] transition-colors inline-block hover:translate-x-1 duration-200 font-normal text-left">{items.name}</Link>
                                            </li>
                                        
                                    )
                                })}
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-black mb-6 tracking-tight ">Resources</h4>
                            <ul className="space-y-3">
                                {resourcesarry?.map((items, index) => {
                                    return (
                                        
                                            <li key={index}>
                                                <Link href={items.link} className="text-gray-600 hover:text-[#E53935] transition-colors inline-block hover:translate-x-1 duration-200 font-normal text-left">{items.name}</Link>
                                            </li>
                                        
                                    )
                                })}
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-black mb-6 tracking-tight ">Legal</h4>
                            <ul className="space-y-3">
                                {legalarry?.map((items, index) => {
                                    return (
                                         
                                            <li key={index}>
                                                <Link href={items.link} className="text-gray-600 hover:text-[#E53935] transition-colors inline-block hover:translate-x-1 duration-200 font-normal text-left">{items.name}</Link>
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





const companyarry = [
    {
        name: "About",
        link: "#",
    },
    {
        name: "Services",
        link: "#",
    },
    {
        name: "Contact",
        link: "#",
    },
]
const resourcesarry = [
    {
        name: "Case Studies",
        link: "#",
    },
    {
        name: "Blog",
        link: "#",
    },
    {
        name: "Careers",
        link: "#",
    },
    {
        name: "Support",
        link: "#",
    },
]
const legalarry = [
    {
        name: "Terms of Use",
        link: "#",
    },
    {
        name: "Privacy Policy",
        link: "#",
    },
    {
        name: "Security",
        link: "#",
    },
     
]