import './App.css'
import {Beers,beers} from './components/beers/Beers';
import AvailableBeers from "./components/available/available";
import CountRedAndIpa from "./components/redAIpa/RedAipa";
import BeerStyle from './components/beerStyles/BeersStyles';
import Products from "./components/products/Products";
import Persons from './components/persons/Persons';
import Family from './components/family/Family';
const products = ["table","couch","chair1","chair2"];
const names = ["Parker","Simmons","Lewis","Poe"];
const persons = [{ name: "Juan", age: 26 },{ name: "Gabriel", age: 27 }, { name:
  "Valentina", age: 22 }, { name: "Paula", age: 25 }, { name: "Andrés", age: 20 } ];
  
function App() {
  //1<Beers />;
  //2<AvailableBeers/>;
  //3<CountRedAndIpa list={beers}/>;
  //4<BeerStyle list={beers}/>;
  //extra1<Products products={products}/>;
  //extra2<Persons names={names}/>;

  return <Family persons={persons.sort((a,b) => b.age - a.age)}/> ;
}

export default App;
