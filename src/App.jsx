import './App.css'
import Chicken from './Chicken'
import Greeter from './Greeter'
import Die from './Die'
import ListPicker from './ListPicker'
import DoubleDice from './DoubleDice'

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
      <DoubleDice />
      <DoubleDice />
    </div>
  )
}

export default App
