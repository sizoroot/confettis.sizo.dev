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

            <div class="text-[#fff] font-[Inter] w-[100%] text-center mb-[50px]">
                <h2 class="text-[28px] md:text-[40px] font-[Inter] font-bold">
                    Examples
                </h2>
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