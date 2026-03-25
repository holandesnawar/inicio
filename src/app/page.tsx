import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Marquee from "@/components/sections/Marquee";
import PainPoints from "@/components/sections/PainPoints";
import Features from "@/components/sections/Features";
import Steps from "@/components/sections/Steps";
import StickyComparison from "@/components/sections/StickyComparison";
import Courses from "@/components/sections/Courses";
import Testimonials from "@/components/sections/Testimonials";
import About from "@/components/sections/About";
import CallToAction from "@/components/sections/CallToAction";
import Doubt from "@/components/sections/Doubt";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Marquee />
        <PainPoints />
        <Features />
        <Steps />
        <StickyComparison />
        <Courses />
        <Testimonials />
        <About />
        <CallToAction />
        <Doubt />
      </main>
      <Footer />
    </>
  );
}
