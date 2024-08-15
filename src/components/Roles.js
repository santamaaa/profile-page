import { useState, useEffect } from "react"

const texts = ['Web Development', 'Geographic IS']
const typingSpeed = 100
const pauseDuration = 2000

const Roles = () => {
    const [displayedText, setDisplayedText] = useState('')
    const [textIndex, setTextIndex] = useState(0)
    const [charIndex, setCharIndex] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)

    useEffect(() => {
        const handleTyping = () => {
            if (isDeleting) {
                if (charIndex > 0) {
                    setTimeout(() => setCharIndex(charIndex - 1), typingSpeed / 2)
                } else {
                    setIsDeleting(false)
                    setTextIndex((textIndex + 1) % texts.length)
                }
            } else {
                if (charIndex < texts[textIndex].length) {
                    setTimeout(() => setCharIndex(charIndex + 1), typingSpeed)
                } else {
                    setTimeout(() => setIsDeleting(true), pauseDuration)
                }
            }
        }

        handleTyping()
    }, [charIndex, isDeleting, textIndex])

    useEffect(() => {
        setDisplayedText(texts[textIndex].substring(0, charIndex))
    }, [charIndex, textIndex])

    return (
        <span className="font-semibold text-myblue">{ displayedText }</span>
    )
}

export default Roles