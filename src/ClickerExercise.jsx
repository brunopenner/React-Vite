

export default function ClickerExercise({message, buttonText}) {
     const clickHandle = () => {
        alert(message)
    }

    return (
        <button onClick={clickHandle}>{buttonText}</button>
    )
}