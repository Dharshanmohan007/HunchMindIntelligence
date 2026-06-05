import Hero from "@/components/Hero";
import Ecosystem from "@/components/Ecosystem";
import WhatWeDo from "@/components/WhatWeDo";
import TrustedBy from "@/components/TrustedBy"

export default function Home() {
  return (
    <main className="bg-[#F8F7F3]">
      <section className="relative ">
        <Hero />
        <Ecosystem />
      </section>
        <WhatWeDo/>
        <TrustedBy />
    </main>
  );
}