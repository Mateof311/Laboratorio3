import './App.css'
import {Beers,beers} from './components/beers/Beers';
import AvailableBeers from "./components/available/available";
import CountRedAndIpa from "./components/redAIpa/RedAipa";
import BeerStyle from './components/beerStyles/BeersStyles';
function App() {
  //<Beers />;
  //<AvailableBeers/>;
  //<CountRedAndIpa list={beers}/>;
  return <BeerStyle list={beers}/>;
}

export default App;
