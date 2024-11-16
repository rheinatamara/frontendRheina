import { AboutSection } from "@/sections/About";
import {IntroSection} from "@/sections/Intro"
import {ProjectsSection} from "@/sections/Projects"
import { TestimonialsSection } from "@/sections/Testimonials";
import { Navbar } from "@/sections/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar/>
      {/* <Header/> */}
      <IntroSection/>
      {/* <HeroSection/> */}
      <ProjectsSection/>
      <TestimonialsSection/>
      <AboutSection/>
    </div>
  );
}
