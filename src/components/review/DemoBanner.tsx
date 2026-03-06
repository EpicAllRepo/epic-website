"use client";

export default function DemoBanner() {
  return (
    <section className="w-full bg-white py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 bg-gray-50 border border-gray-200 rounded-2xl sm:px-24 sm:py-10 px-8 py-8">
          
          {/* Left: Text */}
          <div>
            <p className="text-gray-900 font-bold text-base">
              Try the <span className="bg-gradient-to-r from-red-800 via-red-600 to-red-600 bg-clip-text text-transparent">one-minute demo</span>.
            </p>
            <p className="text-gray-500 text-sm mt-1">
              We&apos;ll record your session so you can watch the replay (no signup needed)
            </p>
          </div>

          {/* Right: Button */}
          <button className="bg-gradient-to-r from-red-700 to-red-800 text-white text-sm font-bold px-6 py-3 rounded-md whitespace-nowrap transition-colors duration-200 cursor-pointer">
            Try a Demo &gt;&gt;
          </button>

        </div>
      </div>
    </section>
  );
}