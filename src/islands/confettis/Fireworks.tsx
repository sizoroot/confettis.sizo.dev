import * as confetti from "confettis"
import ConfettiBlock from "../../components/ConfettiBlock.tsx"

let fireworksActive = false

export default function FireworksConfettiBlock() {

    const code = `const minFireworkCount = 30
const maxFireworkCount = 100

const minFireworkSize = 0.1
const maxFireworkSize = 0.4

const minDisappear = 60
const maxDisappear = 180

const minPos = 0.1
const maxPos = 0.9

const fireworkColors = [
    [ '#2466FF', '#24B3FF', '#24D4FF', '#24FFFC', '#78FFF3', '#B2FFF8' ],
    [ '#B218FF', '#BD39FF', '#CD67FF', '#DA8EFF', '#E4ADFF', '#F5E1FF' ],
    [ '#FF2488', '#FF24BD', '#FF59CD', '#FF7AF5', '#FA99FF', '#FDD6FF' ],
    [ '#FF5920', '#FF7141', '#FF8C65', '#FFA587', '#FFC0AB', '#FFE0D6' ],
    [ '#FFB61B', '#FFC13C', '#FFD16D', '#FFE09D', '#FFE7B3', '#FFF2D4' ],
    [ '#6DFF24', '#8DFF54', '#A6FF7A', '#98FF96', '#B2FFB1', '#DEFFDE' ]
]

const createFirework = () => {

    const xPos = randomNumber(minPos, maxPos)
    const yPos = randomNumber(minPos, maxPos)

    const colorStack = parseInt(randomNumber(0, fireworkColors.length - 1).toFixed(0))
    const colors = fireworkColors[colorStack]

    // Firework
    confetti.create({
        count: randomNumber(minFireworkCount, maxFireworkCount),
        ticks: randomNumber(minDisappear, maxDisappear),
        spread: 360,
        gravity: 0.6,
        decay: 0.95,
        velocity: 26,
        x: xPos,
        y: yPos,
        scales: [
            randomNumber(minFireworkSize, maxFireworkSize),
            randomNumber(minFireworkSize, maxFireworkSize),
            randomNumber(minFireworkSize, maxFireworkSize)
        ],
        shapes: [ 'circle' ],
        colors: colors
    })

    // Particles
    confetti.create({
        count: randomNumber(minFireworkCount, maxFireworkCount),
        ticks: randomNumber(minDisappear, maxDisappear),
        spread: 360,
        gravity: 1.1,
        decay: 0.93,
        velocity: 20,
        x: xPos,
        y: yPos,
        scales: [ 0.1 ],
        shapes: [ 'circle' ],
        colors: colors
    })

}

setInterval(() => {
    createFirework()
}, 500)

function randomNumber(min, max) {
    return Math.random() * (max - min) + min
}`

    return (
        <>
            <ConfettiBlock
                title="Fireworks"
                description="You can create fireworks effects in a very simple way."
                toggle={ true }
                callback={ createConfetti }
            >

                { code }
                
            </ConfettiBlock>
        </>
    )

}

const createConfetti = () => {

    fireworksActive = !fireworksActive

    const minFireworkCount = 30
    const maxFireworkCount = 100

    const minFireworkSize = 0.1
    const maxFireworkSize = 0.4

    const minDisappear = 60
    const maxDisappear = 180

    const minPos = 0.1
    const maxPos = 0.9

    const fireworkColors = [

        [ '#2466FF', '#24B3FF', '#24D4FF', '#24FFFC', '#78FFF3', '#B2FFF8' ],
        
        [ '#B218FF', '#BD39FF', '#CD67FF', '#DA8EFF', '#E4ADFF', '#F5E1FF' ],

        [ '#FF2488', '#FF24BD', '#FF59CD', '#FF7AF5', '#FA99FF', '#FDD6FF' ],

        [ '#FF5920', '#FF7141', '#FF8C65', '#FFA587', '#FFC0AB', '#FFE0D6' ],

        [ '#FFB61B', '#FFC13C', '#FFD16D', '#FFE09D', '#FFE7B3', '#FFF2D4' ],

        [ '#6DFF24', '#8DFF54', '#A6FF7A', '#98FF96', '#B2FFB1', '#DEFFDE' ]

    ]

    const createFirework = () => {

        const xPos = randomNumber(minPos, maxPos)
        const yPos = randomNumber(minPos, maxPos)

        const colorStack = parseInt(randomNumber(0, fireworkColors.length - 1).toFixed(0))
        const colors = fireworkColors[colorStack]

        // Firework
        confetti.create({
            count: randomNumber(minFireworkCount, maxFireworkCount),
            ticks: randomNumber(minDisappear, maxDisappear),
            spread: 360,
            gravity: 0.6,
            decay: 0.95,
            velocity: 26,
            x: xPos,
            y: yPos,
            scales: [
                randomNumber(minFireworkSize, maxFireworkSize),
                randomNumber(minFireworkSize, maxFireworkSize),
                randomNumber(minFireworkSize, maxFireworkSize)
            ],
            shapes: [ 'circle' ],
            colors: colors
        })

        // Particles
        confetti.create({
            count: randomNumber(minFireworkCount, maxFireworkCount),
            ticks: randomNumber(minDisappear, maxDisappear),
            spread: 360,
            gravity: 1.1,
            decay: 0.93,
            velocity: 20,
            x: xPos,
            y: yPos,
            scales: [ 0.1 ],
            shapes: [ 'circle' ],
            colors: colors
        })

    }

    const fireworkInterval = setInterval(() => {
        if(!fireworksActive) clearInterval(fireworkInterval)
        createFirework()
    }, 500)
    
    function randomNumber(min: number, max: number) {
        return Math.random() * (max - min) + min
    }

}