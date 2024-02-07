import axios from "axios"
import "./random.css"
import { useEffect, useState } from "react"
export  function Random(){
    const [random,setRandom] = useState([])
    const [isVisible,setIsVisible] = useState(true)
    function generateMeal(){
        axios.get("https://www.themealdb.com/api/json/v1/1/random.php")
        .then((res)=>setRandom(res.data.meals));
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
            <div class="wrap" >
                {random?<button  onClick={()=>hide()} id="random">Guess the meal</button>:""}
            </div>
            </div>
        </div>
        
    )
}