import TestConfettiBlock from "./confettis/Test.tsx"
import DefaultConfettiBlock from "./confettis/Default.tsx"
import AdvancedConfettiBlock from "./confettis/Advanced.tsx"
import RandomConfettiBlock from "./confettis/Random.tsx"
import DropConfettiBlock from "./confettis/Drop.tsx"
import PartyConfettiBlock from "./confettis/Party.tsx"
import FireworksConfettiBlock from "./confettis/Fireworks.tsx"
import SnowConfettiBlock from "./confettis/Snow.tsx"
import StarsConfettiBlock from "./confettis/Stars.tsx"
import EmojisConfettiBlock from "./confettis/Emojis.tsx"
import HeartsConfettiBlock from "./confettis/Hearts.tsx"

export default function Confettis() {
    return (
        <div class="relative z-10 lg:mx-auto lg:max-w-[900px] text-center">

            <div class="pb-[50px] mb-[100px]">

                <TestConfettiBlock />

                <div class="text-[14px] mt-[15px] text-[#fff] font-[Inter] font-black uppercase">
                    Click to test
                </div>

                <div class="mt-[50px] justify-center w-[200px] text-center mx-auto font-[Inter] text-[13px]">
                    <div class="mb-[15px]">
                        More examples below!
                    </div>
                    <svg width="30px" height="30px" class="animate-bounce mx-auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z" fill="#ffffff"/></svg>
                </div>

            </div>

            <DefaultConfettiBlock />
            <AdvancedConfettiBlock />
            <RandomConfettiBlock />
            <DropConfettiBlock />
            <PartyConfettiBlock />
            <FireworksConfettiBlock />
            <SnowConfettiBlock />
            <StarsConfettiBlock />
            <EmojisConfettiBlock />
            <HeartsConfettiBlock />

        </div>
    )

}