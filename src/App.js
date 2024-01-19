import './App.css';
import Header from './Components/Header/Header';
import { BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import { Home } from './Components/Home/Home';
import { Menue } from './Components/Menue/Menue';
function App() {
  return (
    <div className="App">
    <Header/>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/menue' element={<Menue/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
