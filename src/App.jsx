import './App.css'
import Chicken from './Chicken'
import Greeter from './Greeter'
import Die from './Die'

function App() {

  return (
    <div>
      <Greeter person="Bill" from="Colt"/>
      <Greeter from="Colt"/>
      <Greeter person="Arthur"/>
      <Die numSides={20}/>
      <Die numSides={6}/>
      <Die numSides={10}/>
    </div>
  )
}

export default App
