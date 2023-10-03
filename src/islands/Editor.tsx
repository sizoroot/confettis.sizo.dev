import * as confetti from "confettis"

const props = {
    count: 10
}

export default function Home() {

    return (
        <>
            <div class="lg:max-w-[1200px] mx-auto">
                <div class="relative p-5 lg:p-0">

                    <div class="bg-[#00000040] rounded-md shadow-xl p-[15px] md:p-[50px] mb-[80px] z-10 relative">
                        <div class="text-[16px] mt-[15px] text-[#fff] font-[Inter] w-[100%] text-left">

                            <input type="range" min="0" max="100" onChange={ changeRangeValue } value="0" class="editor-range" />

                            {  }

                        </div>
                    </div>

                </div>
            </div>
        </>
    )

}

const createCanvas = () => {
    const canvas = document.createElement("canvas")

}

const changeRangeValue = (event: Event) => {

    const value = (event.target as HTMLInputElement).value
   
    return value
    
}