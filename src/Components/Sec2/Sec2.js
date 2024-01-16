import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Sec2.css';
export function Sec2(){
    return(
       <div className='Container'>
        <h1>Our Categories</h1>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
            <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
       </div>
    )
    
}