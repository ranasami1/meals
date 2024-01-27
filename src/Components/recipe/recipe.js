import './recipe.css';
import { Button } from 'react-bootstrap';
import close from "../assets/delete_14025556.png";
export function Recipe({mealN}){
    return(
        <div className="container">
            <div className='recipe'>
            <img className="close" src={close}/>
                <h3>{mealN?.strMeal}</h3>
                <h6>{mealN?.strCategory}</h6>
                <p>{mealN?.strInstructions?.substr(0,220)}</p>
               <a href={mealN?.strYoutube} target='_blank'>
               <Button variant="warning">Show Video</Button>
               </a> 
            </div>
        </div>
    )
}