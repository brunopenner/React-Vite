import Property from "./Property";

export default function PropertyList({properties}) {
    // const styles= {display: "flex"}
    return (
        <div style={{display: "flex"}}>
            {properties.map((i) => (
                <Property key={i.id} name={i.name} price={i.price} rating={i.rating}/>
                // <Property key={i.id} {...i}/>
            ))}
        </div>
    )
}