import * as confetti from "confettis"
import ConfettiBlock from "../../components/ConfettiBlock.tsx"

let partyActive = false

export default function PartyConfettiBlock() {

    const code = `const minConfettiScale = 0.5
const maxConfettiScale = 1

const minConfettiSpeed = 20
const maxConfettiSpeed = 30

const colors = [ '#307BFF', '#FFFFFF' ]

const createParty = () => {

    confetti.create({
        count: 3,
        spread: 50,
        ticks: 200,
        gravity: 1,
        decay: 0.95,
        angle: 50,
        velocity: randomNumber(minConfettiSpeed, maxConfettiSpeed),
        x: 0.001,
        y: 0.5,
        scales: [
            randomNumber(minConfettiScale, maxConfettiScale),
            randomNumber(minConfettiScale, maxConfettiScale),
            randomNumber(minConfettiScale, maxConfettiScale)
        ],
        shapes: [ 'square', 'ellipse' ],
        colors: colors
    })

    confetti.create({
        count: 3,
        spread: 50,
        ticks: 200,
        gravity: 1,
        decay: 0.95,
        angle: 130,
        velocity: randomNumber(minConfettiSpeed, maxConfettiSpeed),
        x: 1.999,
        y: 0.5,
        scales: [
            randomNumber(minConfettiScale, maxConfettiScale),
            randomNumber(minConfettiScale, maxConfettiScale),
            randomNumber(minConfettiScale, maxConfettiScale)
        ],
        shapes: [ 'square', 'ellipse' ],
        colors: colors
    })

}

setInterval(() => {
    createParty()
}, 50)

function randomNumber(min, max) {
    return Math.random() * (max - min) + min
}`

    return (
        <>
            <ConfettiBlock
                title="Party"
                description="You can create any type of effect, for example confetti for parties."
                toggle={ true }
                callback={ createConfetti }
            >

                { code }
                
            </ConfettiBlock>
        </>
    )

}

const createConfetti = () => {

    partyActive = !partyActive

    const minConfettiScale = 0.5
    const maxConfettiScale = 1

    const minConfettiSpeed = 20
    const maxConfettiSpeed = 30

    const colors = [ '#307BFF', '#FFFFFF' ]

    const createParty = () => {

        confetti.create({
            count: 3,
            spread: 50,
            ticks: 200,
            gravity: 1,
            decay: 0.95,
            angle: 50,
            velocity: randomNumber(minConfettiSpeed, maxConfettiSpeed),
            x: 0.001,
            y: 0.5,
            scales: [
                randomNumber(minConfettiScale, maxConfettiScale),
                randomNumber(minConfettiScale, maxConfettiScale),
                randomNumber(minConfettiScale, maxConfettiScale)
            ],
            shapes: [ 'square', 'ellipse' ],
            colors: colors
        })

        confetti.create({
            count: 3,
            spread: 50,
            ticks: 200,
            gravity: 1,
            decay: 0.95,
            angle: 130,
            velocity: randomNumber(minConfettiSpeed, maxConfettiSpeed),
            x: 1.999,
            y: 0.5,
            scales: [
                randomNumber(minConfettiScale, maxConfettiScale),
                randomNumber(minConfettiScale, maxConfettiScale),
                randomNumber(minConfettiScale, maxConfettiScale)
            ],
            shapes: [ 'square', 'ellipse' ],
            colors: colors
        })

    }

    const partyInterval = setInterval(() => {
        if(!partyActive) clearInterval(partyInterval)
        createParty()
    }, 50)
    
    function randomNumber(min: number, max: number) {
        return Math.random() * (max - min) + min
    }

}