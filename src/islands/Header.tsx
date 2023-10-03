import Logo from '../components/Logo.tsx'
import Check from '../components/Check.tsx'
import { Link } from '../components/Buttons.tsx'

export default function Header() {

    return (
        <div class="relative z-10 lg:mx-auto lg:max-w-[900px] mb-[20px] lg:mb-[50px]">
            <div class="lg:pt-[100px]">
                <Logo />
            </div>
        </div>
    )

}
