// import { MessageSquare, Smile, BarChart3, ShieldCheck } from "lucide-react";

import Image from "next/image";

const features = [
  {
    icon: '/svg/monitoring.svg',
    alt:"monitoring",
    title: "Review Monitoring & Analysis",
    desc: "We continuously track your Google reviews to understand customer sentiment and identify feedback trends. This allows you to see what’s working — and what needs improvement.",
  },
  {
    icon: '/svg/customer.svg',
    alt:"customer",
    title: "Customer Engagement & Response",
    desc: "We craft thoughtful, professional replies to every review—building trust, strengthening your brand image, and showing customers you truly value their feedback and experience.",
  },
  {
    icon: '/svg/smile.svg',
    alt:"smile",
    title: "Positive Review Generation",
    desc: "We help you earn more authentic, positive reviews through smart outreach and strategic messaging.",
  },
  {
    icon: '/svg/thumb.svg',
    alt:"thumb",
    title: "Reputation Reinforcement",
    desc: "We highlight positive reviews across your channels to build trust and turn great feedback into powerful brand proof.",
  },
];

export default function ReviewFeatures() {
  return (
    <section className="bg-[#FFF8F8] sm:py-16 py-8 sm:mt-36 mt-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Transform Your Google Business Reviews into a
            <span className="text-[#FE0107] block">
              Revenue-Driving Asset.
            </span>
          </h2>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 justify-center gap-6 max-w-5xl mx-auto">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="bg-white rounded-lg p-6 flex gap-4 hover:shadow-md transition"
              >
                {/* Icon */}
                <div className="bg-[#AF0E0E] text-white p-2 w-fit h-fit rounded-md h-fit w-24 h-24 flex-none">
                  {/* <Icon size={22} /> */}
                  <Image src={item?.icon} alt={item.alt} width={32} height={32} className="w-8 h-8" />
                </div>

                {/* Text */}
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}