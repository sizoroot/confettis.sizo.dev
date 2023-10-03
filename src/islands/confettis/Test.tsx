import * as confetti from "confettis"
import { TestConfetti } from "../../components/Buttons.tsx"

export default function TestConfettiBlock() {

    return (
        <>
            <TestConfetti onClick={ createConfetti }>
                <i class="ti ti-confetti"></i>
            </TestConfetti>
        </>
    )

}

const createConfetti = () => {

    const x = 0.5
    const y = 0.7

    confetti.create({
        count: 42,
        ticks: -1,
        gravity: 1.5,
        decay: 0.93,
        velocity: 42,
        x: x,
        y: y,
        scales: [ 0.1 ],
        shapes: ['circle']
    })

    confetti.create({
        count: 100,
        ticks: -1,
        gravity: 1,
        decay: 0.93,
        velocity: 32,
        x: x,
        y: y,
        static: false,
        scales: [ 0.7, 0.8 ],
        shapes: [ 'square', 'ellipse' ]
    })

}