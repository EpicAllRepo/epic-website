"use client";

import Image from "next/image";

export default function ReducedNegativeImpact() {
  return (
    <section className="w-full bg-[#FFF9E5] py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">

        {/* Left: Text */}
        <div className="flex-1 flex flex-col gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 uppercase leading-tight tracking-tight">
              Reduced Negative Impact
            </h2>
            <p className="text-[#FE0107] font-bold text-lg uppercase tracking-wide mt-1">
              Remove Bad Reviews
            </p>
          </div>

          <p className="text-[#424242] text-md max-w-xl leading-relaxed">
            Negative reviews don&apos;t have to harm your business. We investigate the
            issue, connect with customers to resolve their concerns, and take
            action by reporting false or abusive reviews to Google when necessary.
          </p>

          <div>
            <button className="bg-gradient-to-r from-red-700 to-red-800 rounded-sm text-white text-sm font-semibold px-6 py-3 transition-colors duration-200 cursor-pointer">
              Start now
            </button>
          </div>
        </div>

        {/* Right: Image */}
        <div className="flex-1 flex items-center justify-center">
          <Image
            src="/png/analytic.png"
            alt="Analytics Dashboard"
            width={500}
            height={300}
            className="w-full max-w-md object-contain drop-shadow-xl"
          />
        </div>

      </div>
    </section>
  );
}