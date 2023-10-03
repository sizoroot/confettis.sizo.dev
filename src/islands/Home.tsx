import Logo from '../components/Logo.tsx'
import Check from '../components/Check.tsx'
import { Link } from '../components/Buttons.tsx'

export default function Header() {

    return (
        <div class="relative z-10 lg:mx-auto lg:max-w-[900px] mb-[20px] lg:mb-[50px]">

            <div class="lg:pt-[100px]">
                <Logo />
            </div>

            <div class="mx-auto mt-[10px] lg:mt-[20px] md:max-w-[500px] lg:max-w-[700px] text-[16px] p-10 lg:p-0 lg:text-[23px] text-center font-[Inter]">
                Confettis 🎉 is a new library to create confettis on your website. Enjoy a symphin of possibilities from common confettis to fireworks, snow, effects, emojis, and much more.
            </div>

            <div class="lg:max-w-[700px] mx-auto mt-[20px] lg:mt-[50px] text-center">

                <Link href="https://github.com/ovniroto/confettis" alt="GitHub">
                    <i class="ti ti-brand-github text-[18px] align-middle mt-[-2px] inline-block"></i> GitHub
                </Link>

                <Link href="https://npmjs.com/package/confettis" alt="NPM">
                    <i class="ti ti-package text-[18px] align-middle mt-[-2px] inline-block"></i> NPM
                </Link>

            </div>

            <div class="lg:max-w-[700px] p-10 lg:p-0 mx-auto mt-[20px] lg:mt-[50px] text-center">
                <Check>SSR compatibility</Check>
                <Check>Deno compatibility</Check>
                <Check>Fully Typed</Check>
                <Check>Emoji support</Check>
            </div>

        </div>
    )

}
