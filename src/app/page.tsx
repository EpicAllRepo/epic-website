"use client"  
import { About } from "@/components/home/about";
import { Clients } from "@/components/home/clients";
import { Hero } from "@/components/home/hero";
import Industries from "@/components/home/industries"; 

export default function Home() {
  return (
  <div className="">
    <Hero/> 
    <About/>
    <Clients/>
    <Industries/>
  </div>
  );
}
