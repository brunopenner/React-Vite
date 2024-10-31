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

const data = [
  {id: 1, item: 'eggs', quantity: 12, completed: false},
  {id: 2, item: 'milk', quantity: 1, completed: true},
  {id: 3, item: 'chicken breasts', quantity: 4, completed: false},
  {id: 4, item: 'carrots', quantity: 6, completed: true},
]

function App() {

  return (
    <div>
      <ShoppingList items={data} />
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
