export default function ColorList({colors}) {
    return (
        <div>
            <p>Color List</p>
            <ul>
                {colors.map((color) => 
                    <li>{color}</li>
                )}
            </ul>
        </div>
    )
}