import { Random } from "../randomMeal/random";
import { Sec1 } from "./../Sec1/Sec1";
import { Sec2 } from "./../Sec2/Sec2";
export function Home(){
    return(
        <>
         <Sec1/>
         <Sec2/> 
         <Random/> 
        </>
        
    )
}