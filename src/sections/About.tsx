import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import StarIcon from '@/assets/icons/star.svg'
import bookImage from '@/assets/images/book-cover.png'
import Image from "next/image";
import JavascriptIcon from '@/assets/icons/square-js.svg'
import HTMLIcon from '@/assets/icons/html5.svg'
import CSSIcon from '@/assets/icons/css3.svg'
import ReactIcon from '@/assets/icons/react.svg'
import ChromeIcon from '@/assets/icons/chrome.svg'
import GithubIcon from '@/assets/icons/github.svg'
import { TechIcon } from "@/components/TechIcon";
import mapImage from '@/assets/images/map.png'
import smileMemoji from '@/assets/images/memoji-smile.png'
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";

const toolboxItems = [
  {
    title: "Javascript",
    iconType: JavascriptIcon
  },
  {
    title: "HTML5",
    iconType: HTMLIcon
  },
  {
    title: "CSS3",
    iconType: CSSIcon
  },
  {
    title: "React",
    iconType: ReactIcon
  },
  {
    title: "Github",
    iconType: GithubIcon
  },
  {
    title: "Chrome",
    iconType:ChromeIcon
  },
]
const hobbies = [
  {
    title: "Painting",
    emoji: '🎨',
    left: '5%',
    top: '5%',
  },
  {
    title: "Playing a guitar",
    emoji: '🎸',
    left: '50%',
    top: '5%',
  },
  {
    title: "Crochet",
    emoji: '🧶',
    left: '35%',
    top: '40%',
  },
  {
    title: "Drawing",
    emoji: "✏️",
    left: '10%',
    top: '35%',
  },
  {
    title: "Fitness",
    emoji: '🏋️‍♂️',
    left: '70%',
    top: '45%',
  },
  {
    title: "Hiking",
    emoji: '⛰️',
    left: '5%',
    top: '65%',
  },
  {
    title: "Gaming",
    emoji: '🎮',
    left: '45%',
    top: '70%',
  },

]

export const AboutSection = () => {
  return (
// Container
  <div className="py-20">
    <div className="container">
      <SectionHeader eyebrow="About Me" title="A Glimpse Into My World" description="Learn more about who I am, what I do, and what inspires me."/>
      <div className="mt-20 flex flex-col gap-8">
        
    {/* Book */}
        <Card className="h-[320px]">
          <CardHeader title="My Reads" description="Explore the books shaping my perspectives"/>
          <div className="w-40 mx-auto mt-8">
          <Image src={bookImage} alt ="Book cover"/>
          </div>
        </Card>
    
    {/* Toolbox */}
        <Card className="h-[320px] p-0">
        <CardHeader title="My Toolbox" description="Explore the technologies and tools I use to craft digital experiences." className="px-6 pt-6"/>
          <ToolboxItems items={toolboxItems} className="mt-6"/>
          <ToolboxItems items={toolboxItems} className="mt-6 -translate-x-1/2" itemsWrapperClassname="-translate-x-1/2"/>
        </Card>

      {/* Hobbies Card */}
        <Card className="h-[320px] p-0 flex flex-col">
          <CardHeader title="Beyond the Code" description="Explore my interests and hobbies beyond the digital realms." className="px-6 py-6"/>
              <div className="relative flex-1">
                {hobbies.map(hobby => (
                  <div key={hobby.title} className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute" style={{
                    left: hobby.left,
                    top: hobby.top,
                  }}>
                      <span className="font-medium text-gray-950">{hobby.title}</span>
                      <span>{hobby.emoji}</span>
                  </div>
                ))}
              </div>

        </Card>
        {/* Map Card */}
        <Card className="h-[320px] p-0 relative">
              <Image src={mapImage} alt ="map" className="h-full w-full object-cover object-left-top"/>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 after:content-[''] after:absolute after:inset-0 after:rounded-full after:border-2 after:border-gray-950/30">
                <Image src={smileMemoji} alt ="smile memoji"  className="size-20"/>

              </div>
        </Card>
      </div>
     </div>
  </div>
  );
};
