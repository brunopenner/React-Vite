import './App.css'
import Chicken from './Chicken'
import Greeter from './Greeter'
import Die from './Die'
import ListPicker from './ListPicker'
import DoubleDice from './DoubleDice'
import Heading from './assets/Heading'
import ColorList from './ColorList'
import Slots from './Slots'
import ShoppingList from "./ShoppingList";
import PropertyList from './PropertyList'
import Clicker from './Clicker'
import Form from './Form'
import ClickerExercise from './ClickerExercise'
import Counter from './Counter'
import Toggler from './Toggler'

const data = [
  {id: 1, item: 'eggs', quantity: 12, completed: false},
  {id: 2, item: 'milk', quantity: 1, completed: true},
  {id: 3, item: 'chicken breasts', quantity: 4, completed: false},
  {id: 4, item: 'carrots', quantity: 6, completed: true},
]

const properties = [
  { id: 129031, name: "Desert Yurt", rating: 4.9, price: 150 },
  { id: 129331, name: "Lone Mountain Cabin", rating: 4.8, price: 250 },
  { id: 129032, name: "Cactus Retreat", rating: 4.75, price: 300 },
  { id: 129033, name: "Redwood Treehouse Escape", rating: 4.9, price: 120 },
  { id: 129034, name: "Oceanview Condo", rating: 4.7, price: 140 },
  { id: 129035, name: "Gold Miner Campground", rating: 4.69, price: 96 },
];

function App() {

  return (
    <div>
      <Toggler />
      {/* <Counter /> */}
      {/* <ClickerExercise message={"HI!!!!"} buttonText={"Click Me"}/> */}
      {/* <Form />
      <Clicker /> */}
      {/* <PropertyList  properties={properties}/> */}
      {/* <ShoppingList items={data} /> */}
      {/* <Greeter person="Bill" from="Colt"/>
      <Greeter from="Colt"/>
      <Greeter person="Arthur"/>
      <Die numSides={20}/>
      <Die numSides={6}/>
      <Die numSides={10}/>
      <ListPicker values={[1,2,3]} />
      <ListPicker values={["a","b","c"]} />
      <Heading color="magenta" text="Welcome" fontSize="20px"/>
      <Heading color="teal" text="blah" fontSize="48px"/>
      <DoubleDice />
      <DoubleDice />

      <ColorList colors={["red", "pink", "purple", "teal"]} />
      <Slots val1={2} val2={2} val3={1}/> */}
    </div>
  )
}

export default App
