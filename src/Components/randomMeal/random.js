import axios from "axios"
import "./random.css"
import { useEffect, useState} from "react"
export  function Random(){
    const [isVisible,setIsVisible] = useState(false)
    const [random,setRandom] = useState([]);
    function generateMeal(){
        axios.get("https://www.themealdb.com/api/json/v1/1/random.php")
        .then((res)=>setRandom(res.data.meals[0]));
        console.log(random)
    }
    function hide(){
        setIsVisible(!isVisible);
    }
    useEffect(()=>{
        generateMeal();

    },[])
    return(
        <div className="rondomDish">
            <h1 className="title tracking-in-expand">Today's dish</h1>
            <div className="dish">
            {isVisible?
            <div className="theMeal scale-up-hor-left">
               <h2 className="text-focus-in">{random.strMeal}</h2>
               <img  style={{width:"200px",borderRadius:"20%"}}src={random.strMealThumb}/>
               <a href={random.strYoutube}>Watch The Recipe</a>
            </div>
                :<div class="wrap">
                {random?<button onClick={()=>hide()} id="random">Guess the meal</button>:""}
            </div>}
            </div>
        </div>
        
    )
}