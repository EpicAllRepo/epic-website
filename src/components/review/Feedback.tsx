"use client";

import { useState } from "react";

const tabs = [
    {
        id: "conversions",
        label: "Customer reviews to increase conversions.",
        heading: "Customer reviews to increase conversions.",
        description:
            "Customer reviews create a stronger first impression and a more confident buyer outlook. \n \n When customers search for your business on Google, your reviews often shape their decision. Positive feedback on your Google Business profile builds trust, increases foot traffic, and strengthens overall brand credibility. It also opens a direct channel for valuable customer feedback. \n We help you earn more positive reviews while proactively managing your online reputation — so your brand stands out for the right reasons.",
        cta: "Request a Demo",
        image: "/png/review1.png",
        imageAlt: "Conversion rate dashboard",
    },
    {
        id: "google",
        label: "Generate reviews on Google's listings.",
        heading: "Generate reviews on Google's listings.",
        description:
            "Positive reviews can increase sales by up to 290%. \n \n We create strategic plans to encourage satisfied customers to leave authentic feedback, boosting your visibility and credibility. By engaging your audience the right way, we help turn happy customers into powerful advocates for your business.",
        cta: "Request a Demo",
        image: "/png/review2.png",
        imageAlt: "Google listings reviews",
        badges: ["Google", "Trustpilot", "Tripadvisor"],
    },
    {
        id: "reward",
        label: "Reward your Google reviewers.",
        heading: "Reward customers for sharing their positive Google reviews.",
        description:
            "Generate More Reviews Through Positive Reinforcement. \n \n Positive reinforcement helps encourage customers to leave reviews. We highlight positive feedback on social media and personally thank customers for their reviews, strengthening relationships and inspiring others to share their experiences. Our team manages the outreach while keeping all communication aligned with your brand.",
        cta: "Contact our team",
        image: "/png/review3.png",
        imageAlt: "Happy customer with phone",
    },
];

export default function FeedbackSection() {
    const [activeTab, setActiveTab] = useState(tabs[0].id);

    const active = tabs.find((t) => t.id === activeTab)!;

    return (
        <>
            <h2 className="max-w-6xl mx-auto text-center sm:text-4xl text-3xl py-12 font-bold"><span className="text-[#FE0107]"> Simplify your feedback loop.</span> Capture feedback with smart
                automation across every touchpoint</h2>
            <section className="w-full bg-[#FBFBFB] py-16 px-4 font-sans">
                <style>{`
        .tab-btn {
          position: relative;
          transition: color 0.2s;
        }
        .tab-btn::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 4px;
          background: #FE0107;
          transition: width 0.3s ease;
        }
        .tab-btn.active::after { width: 100%; }
        .tab-btn.active { color: #111; }

        .content-panel {
          animation: fadeSlide 0.35s ease forwards;
        }
        @keyframes fadeSlide {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .cta-btn {
          color: white;
          padding: 12px 28px;
          font-size: 14px;
          font-weight: 500;
          border: none;
          cursor: pointer;
          transition: background 0.2s, transform 0.15s;
          letter-spacing: 0.02em;
        }
        .cta-btn:hover {
          background: #b91c1c;
          transform: translateY(-1px);
        }

        .img-card {
          border-radius: 2px;
          overflow: hidden;
          transition: transform 0.3s ease;
        }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          background: #f3f4f6;
          border: 1px solid #e5e7eb;
          border-radius: 4px;
          padding: 4px 10px;
          font-size: 12px;
          font-weight: 500;
          color: #374151;
        }
      `}</style>

                <div className="review-section max-w-6xl mx-auto">

                    {/* Tab Navigation */}
                    <nav className="flex overflow-x-auto scrollbar-none overflow-y-hidden border-b border-gray-200 mb-12 gap-8 justify-between">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`tab-btn pb-3 sm:text-[24px] max-w-[200px] sm:max-w-[320px] text-[18px] font-semibold text-left  shrink-0 leading-snug cursor-pointer ${activeTab === tab.id ? "active text-gray-900" : "text-gray-400"
                                    }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </nav>

                    {/* Content Panel */}
                    <div key={activeTab} className="content-panel grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                        {/* Left: Text */}
                        <div className="flex flex-col gap-6">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                                {active.heading}
                            </h2>

                            <p className="text-[#424242] text-sm leading-relaxed whitespace-pre-line">
                                {active.description}
                            </p>

                            {/* Badges (only for google tab) */}
                            {active.badges && (
                                <div className="flex flex-wrap gap-2">
                                    {active.badges.map((b) => (
                                        <span key={b} className="badge">{b}</span>
                                    ))}
                                </div>
                            )}

                            <div>
                                <button className="py-3 px-6 font-semibold cursor-pointer rounded-sm text-white bg-gradient-to-r from-red-700 to-red-800">{active.cta}</button>
                            </div>
                        </div>

                        {/* Right: Image */}
                        <div className="img-card">
                            <img
                                src={active.image}
                                alt={active.imageAlt}
                                className="w-full h-72 object-cover rounded-[6px]"
                            />
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}