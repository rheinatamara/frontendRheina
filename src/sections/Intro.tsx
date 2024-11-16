import heroImage from '../assets/herobg.png'
import ArrowDown from '@/assets/icons/arrow-down.svg'
import Image from "next/image"
import personalPic from '@/assets/images/personal-picture.jpg'
export const IntroSection = () => {
    return (
        <div className="py-32 md:py-48 lg:py-60 relative">
        {/* Masked background */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: `url(${heroImage.src})`,
                    maskImage: 'linear-gradient(to bottom, transparent, black 10%, black 70%, transparent)', 
                }}
            ></div>
            
            {/* Content container */}
            <div className="flex flex-col justify-center items-center mt-8 relative z-10 md:items-start">
                    <div className="w-60 md:absolute md:w-[25rem] md:-right-10 md:-top-72">
                        <Image src={personalPic} alt="Rheina Image"/>
                    </div>
             <div className='mt-2 mx-12 text-center md:text-left'>
                <div className="max-w-lg">
                    <h1 className="font-serif text-3xl md:text-5xl mt-8 tracking-wide">
                        Nice to meet you! <br /> I'm Rheina Tamara
                    </h1>
                    <p className="mt-4 text-white/60 md:text-lg">
                        Based in Indonesia, I'm a front-end developer passionate about building accessible web apps that users love.
                    </p>
                </div>
        
                {/* Button container */}
                    <div className="flex flex-col md:flex-row justify-center mt-8 gap-4 mx-8 md:mx-0 md:justify-start">
                    <button className='hidden md:inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl'>
                    <span className='font-semibold'>Explore my work</span>
                    <ArrowDown className="size-4"/>
                    </button>
                        <button className="inline-flex items-center justify-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl ">
                            <span className="font-semibold">Download my Resume</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    
    
    )
}