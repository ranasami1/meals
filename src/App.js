import './App.css';
import Header from './Components/Header/Header';
import { BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import { Home } from './Components/Home/Home';
import { Menue } from './Components/Menue/Menue';
import { useState } from 'react';
import axios from 'axios';
function App() {
  const [cat,setCat] = useState("Beef")
  const [filterm , setFilterm] = useState([])
  const [loading , setLoading] = useState(true);
  const [mealN,setMealN] = useState([]);
  const [name,setName] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  function filterFunction(i){
    setCat(i);
    axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${cat}`)
    .then((res)=>setFilterm(res.data.meals));
    console.log(filterm);
    setLoading(false);      
} 
  function mealName(i){
  setName(i);
  console.log(name);
  axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
  .then((res)=>setMealN(res.data.meals[0]));
  console.log(name);
  if(isVisible != true){
    setIsVisible(!isVisible);
  }
}
const handleButtonClick = () => {
  if(isVisible==true){
    setIsVisible(!isVisible);
  }
  
};

  return (
    <div className="App">
    <Header/>
    <Router>
      <Routes>
        <Route path='/' element={<Home filterFunction={filterFunction} loading={loading} setLoading={setLoading}/>}/>
        <Route path='/menue' element={<Menue filterFunction={filterFunction} cat={cat}  loading={loading} setLoading={setLoading} mealName={mealName} mealN={mealN} isVisible={isVisible} setIsVisible={setIsVisible} handleButtonClick={handleButtonClick}/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
