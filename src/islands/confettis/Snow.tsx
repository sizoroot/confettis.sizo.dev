import * as confetti from "confettis"
import ConfettiBlock from "../../components/ConfettiBlock.tsx"

let snowActive = false

export default function SnowConfettiBlock() {

    const code = `const minSnowScale = 0.1
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

setInterval(() => {
    createSnow()
}, 80)

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