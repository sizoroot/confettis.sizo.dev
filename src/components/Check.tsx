import { JSX } from "preact"

export default function Check(props: JSX.HTMLAttributes<HTMLButtonElement>) {
	return (
        <span
            class="text-[#fff] text-[14px] mr-5 rounded-[4px]"
        >
            <i class="ti ti-circle-check text-[18px] text-[#3aff0b] align-middle inline-block"></i> { props.children }
        </span>
	)
}