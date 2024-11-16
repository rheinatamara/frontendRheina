import github from '@/assets/icon-github.svg'
import linkedin from '@/assets/icon-linkedin.svg'
import dribbble from '@/assets/icon-dribbble.svg'
import instagram from '@/assets/icon-instagram.svg'
import { NavIcon } from '@/components/NavIcon'
import '../index.css'
export const Navbar = () => {
    const icons = [instagram,github,dribbble,linkedin]
    return (
        <header className="absolute right-0 w-full z-50 my-10 md:px-10">
            {/* max-w-[1420px] flex justify-between mx-auto px-5 */}
            <div className="flex flex-col justify-center items-center md:flex-row md:justify-between md:items-center md:text-center">
                <div>
                    <a href="#" className="font-serif text-xl">frontendRheina</a>
                </div>
                <div className="flex md:justify-center md:items-center md:text-center">
                    {icons.map((icon, index) => (
                        <NavIcon key={index} component={icon} />
                    ))}
                </div>
            </div>
        </header>
    )
}