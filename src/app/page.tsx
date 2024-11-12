import { AboutSection } from "@/sections/About";
import {Header} from "@/sections/Header"
import {IntroSection} from "@/sections/Intro"
import {ProjectsSection} from "@/sections/Projects"
import { TestimonialsSection } from "@/sections/Testimonials";

export default function Home() {
  return (
    <div>
      <Header/>
      <IntroSection/>
      {/* <HeroSection/> */}
      <ProjectsSection/>
      <TestimonialsSection/>
      <AboutSection/>
    </div>
  );
}
