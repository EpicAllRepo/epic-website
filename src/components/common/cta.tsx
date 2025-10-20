import { FaArrowRight } from "react-icons/fa";

interface CTABoxProps {
   backgroundpattern?:boolean;  // You can define props here if needed in the future
   title?:string;
   description?:string;
   buttonurl?:string;

}

export default function CTABox({backgroundpattern , description, title , buttonurl}:CTABoxProps) {
    


return(
    <>
    <section className="relative py-20 bg-[#E53935]">
        {backgroundpattern &&
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:80px_80px]" />
        }
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <div className="text-center">
                <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 tracking-tight">{title ? title : "Grow Your Online Presence?"   }</h2>
                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto font-normal">
                {description ?  description : " Let's discuss how our digital marketing services can increase your visibility and drive business growth" }
               </p>
               
                <a href={buttonurl ? buttonurl : "#contact"} className="inline-flex items-center gap-2 px-10 py-5 bg-white text-[#E53935] font-bold hover:bg-gray-100 transition-all duration-300 group text-lg">Contact Us Today<p><FaArrowRight /></p></a>
            </div>
        </div>
    </section>
    
    </>
)
}