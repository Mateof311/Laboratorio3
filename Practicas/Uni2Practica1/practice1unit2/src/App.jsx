import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import beers from './components/beers/Beers'
import BeerList from './components/changeDollar/ChangeDollar'
import NewBeer from './components/newBeer/NewBeer'
import './App.css'

function App() {
  const [dolarValue, setDolarValue] = useState(1400)
  const [showDolar,setShowDolar] =useState(false)
  const [beersArray,setBeersArray] =useState(beers)

  const dolarHandle =(e)=>{
    if (parseFloat(e.target.value)<0){
      return
    }
    setDolarValue(e.target.value)
  }
  
  const showFormHandle =() =>{
    setShowDolar(!showDolar)
  }

  const saveBeerDataHandler = (beerData)=>{
    setBeersArray=([beerData,...beersArray])
  }


  return (
    <>
      <div>
        <h2>Precio Cervezas</h2> 
        <button onClick={showFormHandle}>Cambiar Precio Dolar</button>
        {showDolar  && <input placeholder='Ingrese el precio' onChange={dolarHandle} value={dolarValue} type='number' min={1}/>}
        <BeerList beers={beers} dolarValue={dolarValue}/>
        <h2>Agregar Nueva Cerveza</h2>
        <NewBeer onBeerDataSaved={saveBeerDataHandler} />
        
      </div>
    </>
  )
}

export default App
