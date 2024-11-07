import {Header} from "../sections/Header"
<<<<<<< HEAD

export default function Home() {
  return (
    <div className="relative z-0 bg-primary min-h-screen">
      <div className ="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Header/>
      </div>
=======
import {HeroSection} from "../sections/Hero"

export default function Home() {
  return (
    <div>
      <Header/>
      <HeroSection/>
>>>>>>> experiment/new-endpoint
    </div>
  );
}
