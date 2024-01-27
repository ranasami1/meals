import './recipe.css';
import { Button } from 'react-bootstrap';
import close from "../assets/delete_14025556.png";
export function Recipe({mealN,isVisible,handleButtonClick}){
  
    return(
        <div className="container">
            {isVisible?
                 <div className='recipe'>
                 <img onClick={()=>handleButtonClick()} className="close" src={close}/>
                     <h3>{mealN?.strMeal}</h3>
                     <h6 style={{color:"red"}}>{mealN?.strCategory}</h6>
                     <p>{mealN?.strInstructions?.substr(0,220)}</p>
                    <a href={mealN?.strYoutube} target='_blank'>
                    <Button variant="warning">Show Video</Button>
                    </a> 
                 </div>:""}
           
        </div>
    )
}