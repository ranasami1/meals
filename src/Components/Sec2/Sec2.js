import { useEffect, useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Sec2.css';
export function Sec2(){
    const [meal,setMeal] = useState([])
    const [arr,setArr] = useState([])
    function Categories(){
        axios.get("https://www.themealdb.com/api/json/v1/1/categories.php")
        .then((response)=>{setMeal(response.data.categories);
            console.log(meal);
        })
    }
 
    useEffect(() =>{
        Categories();
    },[])
    return(
       <div className='Container'>
        <h1 className='title'>Top Categories</h1>
        <div className='category'>
       {meal?.slice(1,5).map((item,key)=>{
        return(
            <Card key={key} style={{ width: '18rem',margin: "10px"}}>
            <Card.Img variant="top" src={item.strCategoryThumb} />
            <Card.Body>
                <Card.Title>{item.strCategory}</Card.Title>
                <Card.Text>{item.strCategoryDescription.substr(0,50)}</Card.Text>
                <Button variant="warning">Explore Menue</Button>
            </Card.Body>
            </Card>
    )
       })}
        </div>   
       </div>
    )
    
}