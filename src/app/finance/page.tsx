import CoreValues from "@/components/common/corevalues";
import CTABox from "@/components/common/cta";
import ImageHeadingText from "@/components/common/imagetextconent";
import PageBanner from "@/components/common/pagebanner";
import { Database, Target, TrendingUp } from "lucide-react";
import { FaCalculator, FaChartBar } from "react-icons/fa";
import { IoLayersOutline } from "react-icons/io5";
import { LuCreditCard } from "react-icons/lu";
import { PiUsers } from "react-icons/pi";
import { TfiPieChart } from "react-icons/tfi";

export default function Finance() {
    return (
        <>
            <PageBanner
            subtitle="Epic Global Solutions"
                title="Finance Solutions"
                desc="Empowering your business with smart, secure financial technology."
                buttonhide={true}
                imageurl="/photo-1642115958430-305a514a040b.jpg"
            />

            <section className="py-24 bg-white">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-8">

                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-6">
                            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                            <div className="text-blue-600 text-sm font-semibold uppercase tracking-wider">Our Services</div>
                        </div>
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">Our Financial Services</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-normal">Comprehensive financial technology solutions designed to streamline your operations and drive growth</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {financialServices?.map((items, index) => {
                            return (
                                <ImageHeadingText
                                    key={index}
                                    image={items.image}
                                    icon={items.icon}
                                    heading={items.title}
                                    content={items.description}
                                />
                            )
                        })}
                    </div>
                </div>
            </section>
            <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-6">
                            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                            <div className="text-blue-600 text-sm font-semibold uppercase tracking-wider">Why Choose Us</div>
                        </div>
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">Why Choose Us for Finance</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-normal">Transform your financial operations with our cutting-edge solutions</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8  [&_[class=h-full]]:">
                        {whyChooseUs?.map((items, index) => {
                            return (
                                <CoreValues
                                    key={index}
                                    headingsize
                                    icon={items.icon}
                                    title={items.title}
                                    desc={items.description}
                                    classname="rounded-2xl border-2 border-gray-200 hover:!border-blue-500 p-8 hover:shadow-xl transition-all duration-300,
    [&_h4]:group-hover:!text-blue-600 [&_h4]:transition-colors, 
    [&_svg]:w-8 [&_svg]:h-8 [&_svg]:text-white
    [&_[accesskey=svg]]:w-16 [&_[accesskey=svg]]:h-16 [&_[accesskey=svg]]:bg-gradient-to-br [&_[accesskey=svg]]:from-blue-500 [&_[accesskey=svg]]:to-indigo-600 [&_[accesskey=svg]]:rounded-2xl  [&_[accesskey=svg]]:mb-6 [&_[accesskey=svg]]:group-hover:scale-110 [&_[accesskey=svg]]:transition-transform [&_[accesskey=svg]]:duration-300 [&_[accesskey=svg]]:shadow-lg
          "
                                />
                            )
                        })}
                    </div>
                </div>
            </section>

            <div>
                <CTABox
                patternblue
                title="Ready to Transform Your Finance Operations?"
                description="Let's discuss how our financial technology solutions can drive efficiency and growth for your business"
                backgroundpattern
                />
            </div>

        </>
    )
}








const financialServices = [
    {
        icon: <FaCalculator />,
        title: 'Accounting Software Solutions',
        description: 'Streamline your accounting processes with automated workflows, real-time reporting, and compliance management.',
        image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY2NvdW50aW5nJTIwc29mdHdhcmV8ZW58MXx8fHwxNzYwMzc5NjI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
        icon: <FaChartBar />,
        title: 'Financial Data Analytics',
        description: 'Transform financial data into actionable insights with advanced analytics, forecasting, and performance tracking.',
        image: 'https://images.unsplash.com/photo-1731068305209-168e99ed4722?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBhbmFseXRpY3MlMjBkYXRhfGVufDF8fHx8MTc2MDQyNzI5NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
        icon: <PiUsers />,
        title: 'Payroll Management Systems',
        description: 'Automate payroll processing, tax calculations, and employee benefits management with cloud-based solutions.',
        image: 'https://images.unsplash.com/photo-1596248675029-bd9b0c7dc479?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXlyb2xsJTIwbWFuYWdlbWVudHxlbnwxfHx8fDE3NjA0MzA5Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
        icon: <IoLayersOutline />,
        title: 'ERP Finance Integration',
        description: 'Seamlessly integrate financial modules with your ERP system for unified business operations and data flow.',
        image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnRlcnByaXNlJTIwcmVzb3VyY2UlMjBwbGFubmluZ3xlbnwxfHx8fDE3NjA0MzA5MzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
        icon: <LuCreditCard />,
        title: 'Secure Payment Gateway Solutions',
        description: 'Process payments securely with PCI-compliant gateways, fraud detection, and multi-currency support.',
        image: 'https://images.unsplash.com/photo-1647097282684-e78be105ba5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXltZW50JTIwZ2F0ZXdheSUyMHNlY3VyZXxlbnwxfHx8fDE3NjA0MzA5Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
        icon: <TfiPieChart />,
        title: 'Budget Tracking & Automation',
        description: 'Monitor budgets in real-time, automate expense tracking, and optimize financial planning with AI-powered tools.',
        image: 'https://images.unsplash.com/photo-1660970781103-ba6749cb9ce3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidWRnZXQlMjB0cmFja2luZyUyMGF1dG9tYXRpb258ZW58MXx8fHwxNzYwNDMwOTI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
];


const whyChooseUs = [
    {
        icon: <Database />,
        title: 'Data-Driven Insights',
        description: 'Leverage advanced analytics and real-time dashboards to make informed financial decisions backed by comprehensive data.',
    },
    {
        icon: <Target />,
        title: 'Automated Processes',
        description: 'Streamline operations with intelligent automation that reduces manual work and eliminates human errors.',
    },
    {
        icon: <TrendingUp />,
        title: 'Real-Time Reporting',
        description: 'Access up-to-the-minute financial reports and metrics to stay ahead with instant visibility into your finances.',
    },
];