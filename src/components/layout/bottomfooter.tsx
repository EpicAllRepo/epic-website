import { PiInstagramLogoLight } from "react-icons/pi";
import { SlSocialFacebook } from "react-icons/sl";
import { SlSocialLinkedin } from "react-icons/sl";
import { LiaSmsSolid } from "react-icons/lia";
import { PiWhatsappLogo } from "react-icons/pi";
import Link from "next/link";
export default function BootomFooter() {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-black/10">
        <p className="text-sm text-gray-500 font-normal text-center md:text-left">Copyright, Epic Global {new Date().getFullYear()}. All Right Reserved.</p>
        <div className="flex gap-3 items-center flex-wrap justify-center">
          {socialarry?.map((item, index) => (
            <Link
              href={item.url || "#"}
              key={index}
              aria-label={item.label}
              className="w-10 h-10 bg-black/[0.02] border border-black/10 flex items-center justify-center hover:bg-[#E53935] hover:border-[#E53935] transition-all duration-300 group"
            >
              {item.icon}
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}


const socialarry = [
  { icon: <PiInstagramLogoLight className="w-4 h-4 text-gray-600 group-hover:text-white transition-colors" />, url: "https://www.instagram.com/epicglobalin/", label: "Instagram" },
  { icon: <SlSocialFacebook className="w-4 h-4 text-gray-600 group-hover:text-white transition-colors" />, url: "https://www.facebook.com/profile.php?id=100087144520268", label: "Facebook" },
  { icon: <SlSocialLinkedin className="w-4 h-4 text-gray-600 group-hover:text-white transition-colors" />, url: "https://www.linkedin.com/company/epic-global/posts/?feedView=all", label: "LinkedIn" },
  // { icon: <LiaSmsSolid className="w-4 h-4 text-gray-600 group-hover:text-white transition-colors" />, url: "/", label: "Email" },
  // { icon: <PiWhatsappLogo className="w-4 h-4 text-gray-600 group-hover:text-white transition-colors" />, url: "/", label: "WhatsApp" },
];
