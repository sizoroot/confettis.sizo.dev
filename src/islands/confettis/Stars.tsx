import * as confetti from "confettis"
import ConfettiBlock from "../../components/ConfettiBlock.tsx"

export default function StarsConfettiBlock() {

    const code = `const minStarCount = 30
const maxStarCount = 50

const minStarSize = 0.6
const maxStarSize = 1

const minDisappear = 50
const maxDisappear = 70

const starColors = [ '#FFFC9A', '#FFD655', '#FFC155', '#FF9D55' ]

// Stars
confetti.create({
    count: randomNumber(minStarCount, maxStarCount),
    ticks: randomNumber(minDisappear, maxDisappear),
    spread: 360,
    gravity: -0.001,
    decay: 0.94,
    velocity: 30,
    x: 0.5,
    y: 0.5,
    scales: [
        randomNumber(minStarSize, maxStarSize),
        randomNumber(minStarSize, maxStarSize),
        randomNumber(minStarSize, maxStarSize)
    ],
    shapes: [ 'star' ],
    colors: starColors
})

// Particles
confetti.create({
    count: randomNumber(minStarCount, maxStarCount),
    ticks: randomNumber(minDisappear, maxDisappear),
    spread: 360,
    gravity: -0.001,
    decay: 0.93,
    velocity: 20,
    x: 0.5,
    y: 0.5,
    scales: [ 0.1 ],
    shapes: [ 'circle' ],
    colors: starColors
})

function randomNumber(min, max) {
    return Math.random() * (max - min) + min
}`

    return (
        <>
            <ConfettiBlock
                title="Stars"
                description="You can also create effects with stars. It's very simple!"
                callback={ createConfetti }
            >

                { code }
                
            </ConfettiBlock>
        </>
    )

}

const createConfetti = () => {

    const minStarCount = 30
    const maxStarCount = 50

    const minStarSize = 0.6
    const maxStarSize = 1

    const minDisappear = 50
    const maxDisappear = 70

    const starColors = [ '#FFFC9A', '#FFD655', '#FFC155', '#FF9D55' ]

    // Stars
    confetti.create({
        count: randomNumber(minStarCount, maxStarCount),
        ticks: randomNumber(minDisappear, maxDisappear),
        spread: 360,
        gravity: -0.001,
        decay: 0.94,
        velocity: 30,
        x: 0.5,
        y: 0.5,
        scales: [
            randomNumber(minStarSize, maxStarSize),
            randomNumber(minStarSize, maxStarSize),
            randomNumber(minStarSize, maxStarSize)
        ],
        shapes: [ 'star' ],
        colors: starColors
    })

    // Particles
    confetti.create({
        count: randomNumber(minStarCount, maxStarCount),
        ticks: randomNumber(minDisappear, maxDisappear),
        spread: 360,
        gravity: -0.001,
        decay: 0.93,
        velocity: 20,
        x: 0.5,
        y: 0.5,
        scales: [ 0.1 ],
        shapes: [ 'circle' ],
        colors: starColors
    })

    function randomNumber(min: number, max: number) {
        return Math.random() * (max - min) + min
    }

}