import {Header} from "../sections/Header"

export default function Home() {
  return (
    <div className="relative z-0 bg-primary min-h-screen">
      <div className ="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Header/>
      </div>
    </div>
  );
}
