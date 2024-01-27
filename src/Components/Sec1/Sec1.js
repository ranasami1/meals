import { Link } from 'react-router-dom';
import './Sec1.css';
import Button from 'react-bootstrap/Button';

export function Sec1(){
    return(
        <div className='main'>
            <div className="intro">
                <div className='text'>
                <h1>Happy Meal..🍴</h1>
                <p>loremExcepteur ea Lorem nisi irure cupidatat eu Lorem 
                    pariatur anim id do esse consequat.
                    Qui cupidatat nulla et ad laborum magna
                    irure magna consectetur duis non Lorem.
                    Laboris mollit aliquip id adipisicing nisi cillum commodo voluptate do exercitation 
                    deserunt sit veniam. Nostrud sint officia enim reprehenderit.</p>
                    <Link to="/menue"><Button variant="warning">Check The Menue</Button></Link>  
                </div>
        </div>
        </div>
    )
}