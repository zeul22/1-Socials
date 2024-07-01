import Image from "next/image";
import Hero from "./_components/Hero";
import Special from "./_components/Special";
import Pricing from "./_components/Pricing";
import Section from "./_components/Section";
import Reviews from "./_components/Reviews";
import Trust from "./_components/Trust";

export default function Home() {
  return (
    <>
     <Hero />
     <Special />
     <Pricing />
     <Reviews />
     <Trust />
     <Section />
    </>
  );
}
