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
                <p className="text-sm text-gray-500 font-normal text-center md:text-left">Copyright, Epic Global 2025. All Right Reserved.</p>
                <div className="flex gap-3 items-center flex-wrap justify-center">
                   {socialarry?.map((item, index) => (
  <Link
    href={item.url || "#"}
    key={index}
    aria-label={item.label}
    className="text-xl hover:text-red-500 transition"
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
  { icon: <PiInstagramLogoLight />, url: "/", label: "Instagram" },
  { icon: <SlSocialFacebook />, url: "/", label: "Facebook" },
  { icon: <SlSocialLinkedin />, url: "/", label: "LinkedIn" },
  { icon: <LiaSmsSolid />, url: "/", label: "Email" },
  { icon: <PiWhatsappLogo />, url: "/", label: "WhatsApp" },
];
