//All JS DOM Events are available in React, but they are camel cased
function handleClick() {
    console.log("CLICKED THE BUTTON!!!");
}

function handleHover() {
    console.log("Hovered!!");
}

export default function Clicker() {
    return (
        <div>
            <p onMouseOver={handleHover}>Hover Over Me</p>
            <button onClick={handleClick}>Click</button>
        </div>
    )
}