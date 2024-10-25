import './App.css'
import Chicken from './Chicken'
import Greeter from './Greeter'
import Die from './Die'
import ListPicker from './ListPicker'
import DoubleDice from './DoubleDice'
import Heading from './assets/Heading'
import ColorList from './ColorList'

function App() {

  return (
    <div>
      {/* <Greeter person="Bill" from="Colt"/>
      <Greeter from="Colt"/>
      <Greeter person="Arthur"/>
      <Die numSides={20}/>
      <Die numSides={6}/>
      <Die numSides={10}/> */}
      {/* <ListPicker values={[1,2,3]} />
      <ListPicker values={["a","b","c"]} /> */}
      <Heading color="magenta" text="Welcome" fontSize="20px"/>
      <Heading color="teal" text="blah" fontSize="48px"/>
      <DoubleDice />
      <DoubleDice />

      <ColorList colors={["red", "pink", "purple", "teal"]} />
    </div>
  )
}

export default App
