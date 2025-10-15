import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function FooterMid()  {
return(
<>
<div className="bg-[#E53935] p-10 mb-16">
    <div className="grid md:grid-cols-2 gap-8 items-center">
<div>
    <h3 className="text-3xl font-bold text-white mb-2 tracking-tight">Contact us</h3>
    <p className="text-white/90 font-normal">Get in touch with our team for any inquiries.</p>
</div>


<div className="flex gap-3">
    <Input placeholder="Enter your email" type="email" className="flex-1 h-12 px-5 bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-white/40 transition-colors font-normal" /> 
    <Button variant="default" className="px-8 h-12 bg-white text-[#E53935] font-semibold hover:bg-gray-100 transition-all duration-300 whitespace-nowrap" >Contact Us</Button>
</div>

    </div>
</div>
</>
)
}