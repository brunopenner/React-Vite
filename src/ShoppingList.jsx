import ShoppingListItem from "./ShoppingListItem";

export default function ShoppingList ({items}) {
    return (
        <ul>
            {items.map((i) => (
                <ShoppingListItem key={i.id} item={i.item} quantity={i.quantity} completed={i.completed}/>
                // <ShoppingListItem key={i.id} {...i}/>
            ))}
        </ul>
    )
}

// const data = [
//     {item: 'eggs', quantity: 12, completed: false},
//     {item: 'milk', quantity: 1, completed: true},
//     {item: 'chicken breasts', quantity: 4, completed: false},
//     {item: 'carrots', quantity: 6, completed: true},
//   ]