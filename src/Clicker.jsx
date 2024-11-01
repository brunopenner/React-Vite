function handleClick() {
    console.log("CLICKED THE BUTTON!!!");
}

export default function Clicker() {
    return (
        <div>
            <p>CLick The Button</p>
            <button onClick={handleClick}>Click</button>
        </div>
    )
}