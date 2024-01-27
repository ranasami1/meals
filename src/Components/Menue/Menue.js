import { useEffect, useState } from 'react';
import './Menue.css';
import Card from 'react-bootstrap/Card';
import {Spiner} from '../spinner/spinner';
export function Menue({cat,loading,setLoading}){
    const [menu,setMenu] = useState([]);
    function menue(){
            fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${cat}`)
            .then((res)=>res.json())
            .then((data)=>{
                setMenu(data.meals)
                setLoading(false)
            })
        } 
    useEffect(()=>{
        menue();
    },[])
    return(
        <div className="menue">
            <h1 className='title tracking-in-expand' style={{
                backgroundColor: "#ffc008",
                padding:"10px"}}>Our Meals</h1>
            <div className="container">
                {loading?<Spiner/>:menu.map((item,key)=>{
                    return(
                        <Card key={key} style={{ width: '15rem',margin: "10px"}}>
                            <Card.Img variant="top" src={item.strMealThumb} />
                            <Card.Body>
                                <Card.Title>{item.strMeal}</Card.Title>
                            </Card.Body>
                        </Card>
                    )
                })} 
                
            </div>
        </div>
    )
}