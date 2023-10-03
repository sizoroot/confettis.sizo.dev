import * as confetti from "confettis"
import ConfettiBlock from "../../components/ConfettiBlock.tsx"

let snowActive = false

export default function SnowConfettiBlock() {

    const code = `const minPos = 0
const maxPos = 1

const createSnow = () => {
    confetti.create({
        count: 1,
        spread: 0,
        ticks: -1,
        gravity: 0.6,
        decay: 0.90,
        velocity: 0.5,
        x: randomNumber(minPos, maxPos),
        y: 0.0001,
        scales: [ 0.2, 0.3, 0.4, 0.5 ],
        shapes: [ 'circle' ],
        colors: [ '#ffffff' ]
    })
}

const snowInterval = setInterval(() => {
    createSnow()
}, 100)

function randomNumber(min, max) {
    return Math.random() * (max - min) + min
}`

    return (
        <>
            <ConfettiBlock
                title="Snow"
                description="You can create snow effect in a very simple way."
                toggle={ true }
                callback={ createConfetti }
            >

                { code }
                
            </ConfettiBlock>
        </>
    )

}

const createConfetti = () => {

    snowActive = !snowActive

    const minSnowScale = 0.1
    const maxSnowScale = 0.5

    const minSnowGravity = 0.1
    const maxSnowGravity = 0.8

    const minSnowSpeed = 0.2
    const maxSnowSpeed = 0.8

    const createSnow = () => {
        confetti.create({
            count: 1,
            spread: 0,
            ticks: randomNumber(-1, 1000),
            gravity: randomNumber(minSnowGravity, maxSnowGravity),
            decay: 0.90,
            velocity: randomNumber(minSnowSpeed, maxSnowSpeed),
            x: randomNumber(0, 1),
            y: 0.0001,
            scales: [ randomNumber(minSnowScale, maxSnowScale) ],
            shapes: [ 'circle' ],
            colors: [ '#ffffff' ]
        })
    }

    const snowInterval = setInterval(() => {
        if(!snowActive) clearInterval(snowInterval)
        createSnow()
    }, 80)
    
    function randomNumber(min: number, max: number) {
        return Math.random() * (max - min) + min
    }

}