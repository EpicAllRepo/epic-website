 
"use client";
import PageBanner from "@/components/common/pagebanner" ;
import { cn } from "@/lib/utils"; 
import { LuMapPin } from "react-icons/lu"; 
import AddressCard from "@/components/common/addresscard";
import { useState } from "react";
import IconText from "@/components/icontext";
import { FiMail, FiPhone } from "react-icons/fi";
import { HiOutlineClock } from "react-icons/hi2";
import Image from "next/image"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import ContactForm from "@/components/common/contactform";
import Link from "next/link";

export default function ContactPage() {

     const [activeId, setActiveId] = useState(1); // default first tab
  
      const activeOffice = addrearry.find((item) => item.id === activeId);
  return (
    <div className="min-h-screen bg-white">
<PageBanner
          subtitle="Get In Touch"
          title="Contact Us"
          desc="We&apos;d love to hear from you! Whether you have a question about our services, need technical support, or want to discuss a potential project, our team is ready to answer all your questions."
        />

<section className="relative py-32 bg-black/[0.02]">
<div className="max-w-[1400px] mx-auto px-6 lg:px-8">
  <div className="grid lg:grid-cols-2 gap-12">
<div>
<div className="mb-8">
  <h2 className="text-4xl font-bold text-black mb-4 tracking-tight">Send Us a Message</h2>
  <p className="text-lg text-gray-600 font-normal">Fill out the form below and we&apos;ll get back to you within 24 hours.</p>
</div>


<ContactForm />

<div className="mt-16 pt-12 border-t-2 border-black/10">
<div className="mb-8">
  <h3 className="text-4xl font-bold text-black mb-4 tracking-tight">Select Office Location</h3>
  <p className="text-lg text-gray-600 font-normal">Choose your nearest office to view contact details</p>
</div>

 {/* OfficeTabs  */}
  <div className="grid lg:grid-cols-5 gap-8">
             {/* LEFT SIDE - Tabs */}
             <div className="lg:col-span-2 space-y-4">
                 {addrearry.map((item) => (
                     <button
                         key={item.id}
                         onClick={() => setActiveId(item.id)}
                         className={`relative w-full px-6 py-5 border-2 text-left transition-all duration-300 group
               ${activeId === item.id
                                 ? "group bg-[#E53935] border-[#E53935] text-white"
                                 : "bg-white border-black/10 text-black hover:border-[#E53935]/50"
                             }`}
                     >
 
                         <div className="absolute left-0 top-0 bottom-0 w-1 bg-white"></div>
                         <div className="flex items-center gap-4">
                             <div
                                 className={cn(
                                     "w-10 h-10 flex items-center justify-center border-2 transition-all duration-300",
                                     activeId === item.id
                                         ? "bg-white border-white [&_svg]:text-[#E53935]"
                                         : "bg-[#E53935] border-[#E53935] [&_svg]:text-[#fff]"
                                 )}
                             >
                                 <LuMapPin className="w-5 h-5" />
                             </div>
                             <div className={
                                 activeId === item.id
                                     ? " text-white [&_p]:text-white/80"
                                     : " text-black hover:border-[#E53935]/50"
                             }>
                                 <h4 className="font-semibold text-base mb-0.5">{item.name}</h4>
                                 <p className="text-sm font-normal text-gray-500">{item.location}</p>
                             </div>
                         </div>
                     </button>
                 ))}
             </div>
 
             {/* RIGHT SIDE - Details */}
             <div className="lg:col-span-3">
                 {activeOffice ? (
                     <>
 
 <AddressCard
 bg={activeOffice.bg}
 name={activeOffice.name}
 location={activeOffice.location}
 Address={activeOffice.Address}
 BusinessHours={activeOffice.BusinessHours}
 Email={activeOffice.Email}
 Phone={activeOffice.Phone}
 
 />
       
                     </>
                 ) : (
                     <p>Select an office to view details</p>
                 )}
             </div>
         </div>
 {/* OfficeTabs  */}
</div>
</div>




<div>
  <div className="space-y-8">
  <div className="mb-8">
  <h2 className="text-4xl font-bold text-black mb-4 tracking-tight">Contact Information</h2>
  <p className="text-lg text-gray-600 font-normal">Reach out to us through any of these channels. We&apos;re here to help!</p>
</div>


<div className="space-y-4">
<IconText
name="info@epicglobal.co.in"
icon={<FiMail />}
titlename="Email"
url="mailto:info@epicglobal.co.in"
/>
<IconText
name="+1 416 123 4567"
icon={<FiPhone />}
titlename="Phone"
url="tel:+14161234567"
/>
<IconText
name="Ontario, L3R 3B3, Canada"
icon={<LuMapPin />}
titlename="Office Address" 
/>
<IconText
name="Monday - Friday, 9:00 AM – 5:00 PM EST"
icon={<HiOutlineClock />}
titlename="Business Hours" 
/>


</div>

<div className="relative bg-white border border-black/10 overflow-hidden group hover:border-[#E53935]/30 transition-all duration-300 mt-8">
<div className="absolute top-0 left-0 w-full h-1 bg-[#E53935] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />

 <AspectRatio ratio={16 / 10} className="bg-muted rounded-none">
      <Image
        src={activeOffice ? activeOffice.bg : "" }
        alt="Photo by Drew Beamer"
        fill
        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
      />

<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-end justify-center p-6">
<div className="bg-white px-6 py-3 flex items-center gap-3">
  <LuMapPin className="w-5 h-5 text-[#E53935]" />
  <div>
    <p className="text-sm font-semibold text-black tracking-tight">{activeOffice ? activeOffice.name : ""} </p>
    <p className="text-xs text-gray-600 font-normal">{activeOffice ? activeOffice.location : ""}</p>
  </div>
</div>
</div>

    </AspectRatio>
</div>

</div>
</div>
  </div>
</div>
</section>



 <section className="relative py-20 bg-[#E53935]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <div className="text-center">
                <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 tracking-tight">Have a Project in Mind?</h2>
                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto font-normal">Let&apos;s discuss how we can help transform your business with our innovative solutions</p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <Link href="#contact" className="inline-flex items-center gap-2 px-8 h-14 bg-white text-black font-semibold hover:bg-black hover:text-white transition-all duration-300">Send a Message</Link>
                <Link href="#contact" className="inline-flex items-center gap-2 px-8 h-14 bg-transparent border-2 border-white text-white font-semibold hover:bg-white hover:text-black transition-all duration-300">Explore Our Services</Link>
                </div>
            </div>
        </div>
    </section>




    </div>
  );
}





const addrearry = [
    {
        id: 1,
        name: "India Office",
        location: "Noida, Uttar Pradesh",
        Address: "H-143 (b-03), H Block, Sector 63, Noida, Uttar Pradesh 201301",
        Phone: "+91 9876543210",
        Email: "contact@epicglobal.com",
        BusinessHours: "Monday - Friday, 9:00 AM – 6:00 PM IST",
        bg: "/noida.jpg"
    },
    {
        id: 2,
        name: "UK Office",
        location: "Bilston, England",
        Address: "Unit 8A Stag Industrial Estate Oxford Street Bilston WV14 7HZ",
        Phone: "+44 1902 123456",
        Email: "contact@epicglobal.com",
        BusinessHours: "Monday - Friday, 9:00 AM – 5:00 PM GMT",
        bg: "/uk.jpg"
    },
    {
        id: 3,
        name: "Canada Office",
        location: "Ontario, Canada",
        Address: "Ontario, L3R 3B3, Canada",
        Phone: "+1 416 123 4567",
        Email: "contact@epicglobal.com",
        BusinessHours: "Monday - Friday, 9:00 AM – 5:00 PM GMT",
        bg: "/icon.jpg"
    },
];