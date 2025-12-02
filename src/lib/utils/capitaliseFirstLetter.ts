export default function capitaliseFirstLetter(input: string){
    const firstLetter = input[0]
    const capitalFirstLetter = firstLetter.toUpperCase()

    const rest = input.substring(1)
    return `${capitalFirstLetter}${rest}`
}