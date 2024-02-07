import axios from "axios"
import "./random.css"
import { useEffect, useState} from "react"
import { Recipe } from "../recipe/recipe";
export  function Random(){
    const [isVisible,setIsVisible] = useState(false)
    const [random,setRandom] = useState([]);
    function generateMeal(){
        axios.get("https://www.themealdb.com/api/json/v1/1/random.php")
        .then((res)=>setRandom(res.data.meals));
    }
    function hide(){
        setIsVisible(true);
    }
    useEffect(()=>{
        generateMeal();
    },[])
    return(
        <div className="rondomDish">
            <h1 className="title tracking-in-expand">Today's dish</h1>
            <div className="dish">
            {isVisible?<Recipe />: <div class="wrap" >
                {random?<button onClick={()=>hide()} id="random">Guess the meal</button>:""}
            </div>}
            </div>
        </div>
        
    )
}