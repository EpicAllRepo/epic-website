"use client";

import Image from "next/image";

export default function EngageReviews() {
    return (
        <section className="w-full bg-white py-12">
            <div className="mx-auto flex flex-col md:flex-row items-stretch gap-0">

                {/* Left: Text */}
                <div className="flex-1 flex flex-col justify-center gap-4 py-10 sm:px-16 px-8">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-black text-gray-900 uppercase leading-tight tracking-tight">
                            Engage Reviews
                        </h2>
                        <p className="text-red-600 font-bold text-lg uppercase tracking-wide mt-1">
                            Tell the Right Story
                        </p>
                    </div>

                    <p className="text-[#424242] text-sm leading-relaxed max-w-lg">
                        When a negative experience occurs, it&apos;s vital that your business
                        reaches out to the client as quickly as possible. We monitor your
                        reviews, identify negative or neutral reviews, and work with your
                        team to ensure we have the right response to help rectify the issue
                        and turn it into a positive.
                    </p>

                    <div>
                        <button className="bg-gradient-to-r from-red-700 to-red-800 rounded-md text-white text-sm font-semibold px-6 py-3 transition-colors duration-200 cursor-pointer">
                            Learn More
                        </button>
                    </div>
                </div>

                {/* Right: Red background + image */}
                <div className="flex-1 sm:py-16 py-8 relative bg-gradient-to-b from-[#AF0E0E] to-[#8E0D0D] rounded-tl-2xl rounded-bl-2xl overflow-visible overflow-hidden flex items-end justify-center ">
                    <Image
                        src="/png/review.png"
                        alt="Review Dashboard"
                        width={500}
                        height={400}
                        className="w-full object-contain relative sm:left-[-60px]"
                    />
                </div>

            </div>
        </section>
    );
}