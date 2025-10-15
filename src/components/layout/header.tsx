import Image from "next/image";
import Link from "next/link"; 
import { HeaderNavigation } from "./nav";

export default function Header() {
    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        <Link href={"/"}>
                            <Image src={"/logo.png"} alt={"logo"} width={167} height={40} />
                        </Link>


<HeaderNavigation />
                        
                    </div>
                </div>
            </header>
        </>
    )
}