import * as confetti from "confettis"
import ConfettiBlock from "../../components/ConfettiBlock.tsx"

let heartsActive = false

export default function HeartsConfettiBlock() {

    const code = `const minHeartScale = 0.1
const maxHeartScale = 0.5

const minHeartSpeed = 5
const maxHeartSpeed = 10

const createHeart = () => {
    confetti.create({
        count: 3,
        spread: 50,
        ticks: randomNumber(30, 50),
        gravity: -1,
        decay: 0.9,
        velocity: randomNumber(minHeartSpeed, maxHeartSpeed),
        x: 0.5,
        y: 0.5,
        scales: [
            randomNumber(minHeartScale, maxHeartScale),
            randomNumber(minHeartScale, maxHeartScale),
            randomNumber(minHeartScale, maxHeartScale)
        ],
        shapes: [ 'emoji' ],
        emojis: [ '❤️' ]
    })
}

setInterval(() => {
    createHeart()
}, 180)

function randomNumber(min, max) {
    return Math.random() * (max - min) + min
}`

    return (
        <>
            <ConfettiBlock
                title="Hearts"
                description="With the possibility of adding emojis, you can create effects like this that we have created with ❤️ Hearts."
                toggle={ true }
                callback={ createConfetti }
            >

                { code }
                
            </ConfettiBlock>
        </>
    )

}

const createConfetti = () => {

    heartsActive = !heartsActive

    const minHeartScale = 0.1
    const maxHeartScale = 0.5

    const minHeartSpeed = 5
    const maxHeartSpeed = 10

    const createHeart = () => {
        confetti.create({
            count: 3,
            spread: 50,
            ticks: randomNumber(30, 50),
            gravity: -1,
            decay: 0.9,
            velocity: randomNumber(minHeartSpeed, maxHeartSpeed),
            x: 0.5,
            y: 0.5,
            scales: [
                randomNumber(minHeartScale, maxHeartScale),
                randomNumber(minHeartScale, maxHeartScale),
                randomNumber(minHeartScale, maxHeartScale)
            ],
            shapes: [ 'emoji' ],
            emojis: [ '❤️' ]
        })
    }

    const heartsInterval = setInterval(() => {
        if(!heartsActive) clearInterval(heartsInterval)
        createHeart()
    }, 180)
    
    function randomNumber(min: number, max: number) {
        return Math.random() * (max - min) + min
    }

}