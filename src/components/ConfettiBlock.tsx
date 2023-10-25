import type { ComponentChildren } from "preact"
import { Confetti } from "./Buttons.tsx"
import Code from './Code.tsx'

type Props = {
    children: ComponentChildren
    title: string
    description: string
    toggle?: boolean
    callback: () => void
}

export default function ConfettiBlock(props: Props) {
	return (
        <div class="relative">
            <div class="absolute top-0 h-full w-full z-[-10]">
                <img class="w-full h-full opacity-[0.7]" src="/images/example.webp" />
            </div>
            <div class="relative p-5 lg:p-0">
                <div class="bg-[#00000040] rounded-md shadow-xl p-[15px] md:p-[50px] mb-[80px] z-10 relative">

                    <div class="text-[16px] mt-[15px] text-[#fff] font-[Inter] w-[100%] text-left">

                        <div class="text-[16px] mt-[-5px] text-[#fff] font-[Inter] float-right">
                            <Confetti onClick={ props.callback }>
                                { props.toggle && (
                                    <>
                                        <i class="ti ti-confetti"></i> Toggle!
                                    </>
                                ) }
                                { !props.toggle && (
                                    <>
                                        <i class="ti ti-confetti"></i> Test!
                                    </>
                                ) }
                            </Confetti>
                        </div>

                        <h2 class="text-[28px] font-[Inter] font-bold">
                            { props.title }
                            <span class="text-[14px] font-normal block mt-[10px]">
                                { props.description }
                            </span>
                        </h2>

                        <Code class="language-javascript">
                            { props.children }
                        </Code>

                    </div>

                </div>
            </div>
        </div>
	)

}