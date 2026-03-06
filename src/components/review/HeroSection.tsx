import Image from "next/image";
import ReviewForm from "@/components/review/ReviewForm";

export default function ReputationSection() {
  return (
    <section className="relative top-20 overflow- bg-gray-100 pb-30 pt-16 bg-transparent mb-24">
      
      {/* Background Curve */}
      <Image
        src="/svg/bg-curve.svg"
        alt="background"
        fill
        className="object-cover -z-10"
      />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        {/* Left Content */}
        <div className="text-white">
          <h1 className="text-4xl md:text-[58px] font-normal leading-tight">
           <span> Take Control of Your</span> <br />
            <span className="font-extrabold">
              Google Reputation
            </span>
          </h1>

          <p className="mt-6 text-lg max-w-xl">
            When customers look you up online, what story do your reviews tell?
            We make sure it&apos;s the right one — positive, powerful, and
            professional.
          </p>
        </div>

        {/* Right Form */}
        <div className="flex justify-center md:justify-end">
          <ReviewForm />
        </div>

      </div>
    </section>
  );
}