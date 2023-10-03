import { JSX } from "preact"

export function Link(props: JSX.HTMLAttributes<HTMLButtonElement>) {
	return (
		<a 
			class="bg-[#272c2f20] hover:bg-[#272c2f96] duration-300 text-[#fff] text-[16px] font-bold mr-2 px-4 py-3 rounded-[4px]"
			href={ props.href }
			alt={ props.alt }
			target="_blank"
		>
			{ props.children }
		</a>
	)
}

export function TestConfetti(props: JSX.HTMLAttributes<HTMLButtonElement>) {
	return (
		<button
			class="hover:bg-[#ffcf69bf] bg-[#ffffff30] text-[#fff] px-[14px] py-[5px] text-[37px] rounded-[100px] duration-300 active:duration-100 active:scale-[95%] scale-[100%]"
			onClick={ props.onClick }
		>
			{ props.children }
		</button>
	)
}

export function Confetti(props: JSX.HTMLAttributes<HTMLButtonElement>) {
	return (
		<button
			class="hover:bg-[#81f58e96] bg-[#b3c4ff1c] text-[#fff] px-[16px] py-[7px] text-[18px] rounded-[5px] duration-300 active:duration-100 active:scale-[95%] scale-[100%]"
			onClick={ props.onClick }
		>
			{ props.children }
		</button>
	)
}