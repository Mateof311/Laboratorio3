import { useState } from 'react'
import beers from './components/beers/Beers'
import BeerList from './components/changeDollar/ChangeDollar'
import './App.css'

function App() {
  const [dolarValue, setDolarValue] = useState(1400)

  const dolarHandle =(e)=>{
    setDolarValue(e.target.value)
  }
  return (
    <>
      <div>
        <h2>Nuevo Precio Dolar <input placeholder='ARS' onChange={dolarHandle} value={dolarValue} type='number' min={1}/></h2>
        <BeerList beers={beers} dolarValue={dolarValue}></BeerList>
        
        
      </div>
    </>
  )
}

export default App
