export default function Property({name, price, rating}) {
    const styles={
        border: "1px solid black",
        boxShadow: "2px 2px 10px black",
        background: "white",
        padding: "15px",
        color: "black"
    }
    return (
        <div className="propertyCard" style={styles}>
            <h2>{name}</h2>
            <h3>${price} a night</h3>
            <h4>{rating} ⭐</h4>
        </div>
    )
}