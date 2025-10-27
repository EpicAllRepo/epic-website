import CTABox from "@/components/common/cta"; 
import Industries from "@/components/home/industries";

export default function Industriespage() {
    return(
        <>
         
        <Industries/>

         <CTABox
         title="Transform Healthcare Delivery"
         description="Let's discuss how our healthcare technology solutions can improve patient care and operational efficiency"
          backgroundpattern={true}
         />
        </>
    )
}