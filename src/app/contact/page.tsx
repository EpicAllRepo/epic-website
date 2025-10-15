import Link from "next/link";
// Uncomment and fix the import path if the component exists
// import OfficeLocations from "../../components/OfficeLocations";

import { FaRegEnvelope } from "react-icons/fa";
import { MdOutlineLocalPhone } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";

function ContactInfo({
  icon,
  title,
  value,
}: {
  icon:  React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="relative bg-white border border-black/10 p-6 hover:border-[#E53935]/30 transition-all duration-300 group">
      <div className="text-2xl w-12 h-12 bg-[#E53935] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">{icon}</div>
      <div className="flex-1">
        <div className="font-semibold">{title}</div>
        <div className="text-gray-700">{value}</div>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center px-4 py-32">
        <p className="text-red-600 text-sm uppercase mb-2 tracking-widest">
          Get In Touch
        </p>
        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-black mb-8 leading-[1.1] tracking-tight">
          Contact Us
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed font-normal max-w-3xl mx-auto text-center">
          We'd love to hear from you! Whether you have a question about our
          services, need technical support, or want to discuss a potential
          project, our team is ready to answer all your questions.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 mt-12 px-8 h-14 bg-white border-2 border-black/10 hover:border-[#E53935] text-black font-semibold transition-all duration-300 group"
        >
          <div className="lucide lucide-arrow-left w-5 h-5 group-hover:-translate-x-1 -translate-y-0.5 transition-transform duration-300">
            ←
          </div>
          Back to Home
        </Link>
      </div>

      {/* Contact Form & Info Section */}
      <div className="max-w-[1400px] py-32 mx-auto px-6 lg:px-8 bg-[#fafafa]">
        <div className="grid lg:grid-cols-2 gap-12 ">
          {/* Contact Form */}
          <div>
            <h2 className="text-4xl font-bold text-black mb-4 tracking-tight">Send Us a Message</h2>
            <p className="text-lg text-gray-600 font-normal ">
              Fill out the form below and we'll get back to you within 24 hours.
            </p>
            <form className="space-y-6 mt-8">
              <div>
                <label className="block text-sm font-semibold text-black mb-2 uppercase tracking-wider">Name *</label>
                <input
                  type="text"
                  placeholder="Your full name"
                  className="w-full h-14 px-4 !bg-white border-2 border-black/10 focus:border-[#E53935] focus:outline-none transition-colors duration-300 text-black"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-black mb-2 uppercase tracking-wider">Email *</label>
                <input
                  type="email"
                  placeholder="your.email@example.com"
                  className="w-full h-14 px-4 bg-white border-2 border-black/10 focus:border-[#E53935] focus:outline-none transition-colors duration-300 text-black"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-black mb-2 uppercase tracking-wider">Subject *</label>
                <input
                  type="text"
                  placeholder="How can we help you?"
                  className="w-full h-14 px-4 bg-white border-2 border-black/10 focus:border-[#E53935] focus:outline-none transition-colors duration-300 text-black"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-black mb-2 uppercase tracking-wider">Message *</label>
                <textarea
                  rows={5}
                  placeholder="Tell us more about your project or inquiry..."
                  className="w-full px-4 py-4 bg-white border-2 border-black/10 focus:border-[#E53935] focus:outline-none transition-colors duration-300 text-black resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full h-14 bg-[#E53935] text-white font-semibold hover:bg-[#d32f2f] transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                Send Message
                <span className="text-lg">{<IoIosSend />}</span>
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6 ">
            <h2 className="text-4xl font-bold text-black mb-4 tracking-tight">Contact Information</h2>
            <p className="text-lg text-gray-600 font-normal mb-8">
              Reach out to us through any of these channels. We're here to help!
            </p>
            <div className="space-y-4">
              <ContactInfo
                icon={<FaRegEnvelope />}
                title="Email"
                value="info@epicglobal.co.in"
              />
              <ContactInfo icon={<MdOutlineLocalPhone/>} title="Phone" value="+91 9876543210" />
              <ContactInfo
                icon={<IoLocationOutline />}

                title="Office Address"
                value="H-143 (b-03), H Block, Sector 63, Noida, Uttar Pradesh 201301"
              />
              <ContactInfo
                icon={<FaRegClock />}

                title="Business Hours"
                value="Monday - Friday, 9:00 AM – 6:00 PM IST"
              />
            </div>
          </div>
          
        </div>
      </div>
      <div className="relative py-20 bg-[#E53935] mt-20">

  <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 tracking-tight text-center">Have a Project in Mind?</h2>
  <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto font-normal align-center text-center"
>Let's discuss how we can help transform your business with our innovative solutions</p>
<div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
  <Link
    href="/contact"
    className="inline-flex items-center justify-center gap-2 px-8 h-14 bg-white text-black font-semibold hover:bg-black hover:text-white transition-all duration-300"
  >
    Send a Message
  </Link>

  <Link
    href="/contact"
    className="inline-flex items-center justify-center gap-2 px-8 h-14 bg-transparent border-2 border-white text-white font-semibold hover:bg-white hover:text-black transition-all duration-300"
  >
    Explore Our Services
  </Link>
</div>


</div>


      {/* Office Locations Section */}
      {/* Uncomment if needed */}
      {/* <OfficeLocations /> */}
    </div>
  );
}
