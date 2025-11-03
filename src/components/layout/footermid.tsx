import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function FooterMid() {
  return (
    <>
    <div className=" border-t border-gray-200 py-8">
    <nav className="flex flex-wrap items-center justify-center gap-1">

{footerMid?.map((item, index) => (
  <a
    key={index}
    className="group relative px-4 py-2 text-gray-600 hover:text-[#E53935] transition-colors duration-300 font-normal text-sm"
    href={item.href}
  > 
    <span className="relative z-10">{item.name}</span>
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#E53935] group-hover:w-3/4 transition-all duration-300"></div>
  </a>
))}

 
    </nav>

  </div>
      {/* Red Contact Section */}
      <div className="bg-[#E53935] p-10 mb-0">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-3xl font-bold text-white mb-2 tracking-tight">
              Contact us
            </h3>
            <p className="text-white/90 font-normal">
              Get in touch with our team for any inquiries.
            </p>
          </div>

          <div className="flex gap-3">
            <Input
              placeholder="Enter your email"
              type="email"
              className="flex-1 h-12 px-5 bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-white/40 transition-colors font-normal"
            />
            <Button
              variant="default"
              className="px-8 h-12 bg-white text-[#E53935] font-semibold hover:bg-gray-100 transition-all duration-300 whitespace-nowrap"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>

      </>
  )
}


const footerMid = [
{ name: "About", href: "/about-us" },
  { name: "Contact", href: "/contact-us" },
  { name: "Accreditations and Certifications", href: "#" },
  { name: "Terms of Use", href: "/terms" },
  { name: "Privacy Policy", href: "#" },
  { name: "Blog", href: "#" }
]
  