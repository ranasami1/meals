import { Button } from "react-bootstrap"
import "./random.css"
export  function Random(){
    return(
        <div className="rondomDish">
            <h1 className="title tracking-in-expand">Today's dish</h1>
            <div className="dish">
            <div class="wrap">
                <button id="random">Guess the meal</button>
            </div>
            </div>
        </div>
        
    )
}