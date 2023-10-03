import * as confetti from "confettis"
import ConfettiBlock from "../../components/ConfettiBlock.tsx"

export default function RandomConfettiBlock() {

    const code = `const x = 0.5
const y = 0.7

const countMin = 10
const countMax = 50

const angleMin = 40
const angleMax = 130

const velocityMin = 30
const velocityMax = 50

confetti.create({
    count: randomNumber(countMin, countMax),
    ticks: -1,
    gravity: 1,
    decay: 0.93,
    velocity: randomNumber(velocityMin, velocityMax),
    angle: randomNumber(angleMin, angleMax),
    x: x,
    y: y,
    static: false,
    scales: [ 0.5, 0.7, 0.8 ],
    shapes: [ 'square', 'ellipse' ]
})

function randomNumber(min, max) {
    return Math.random() * (max - min) + min
}`

    return (
        <>
            <ConfettiBlock
                title="Random"
                description="Advanced confetti with some random properties."
                callback={ createConfetti }
            >

                { code }
                
            </ConfettiBlock>
        </>
    )

}

const createConfetti = () => {

    const x = 0.5
    const y = 0.7

    const countMin = 10
    const countMax = 50

    const angleMin = 40
    const angleMax = 130

    const velocityMin = 30
    const velocityMax = 50
    
    confetti.create({
        count: randomNumber(countMin, countMax),
        ticks: -1,
        gravity: 1,
        decay: 0.93,
        velocity: randomNumber(velocityMin, velocityMax),
        angle: randomNumber(angleMin, angleMax),
        x: x,
        y: y,
        static: false,
        scales: [ 0.5, 0.7, 0.8 ],
        shapes: [ 'square', 'ellipse' ]
    })

    function randomNumber(min: number, max: number) {
        return Math.random() * (max - min) + min
    }

}