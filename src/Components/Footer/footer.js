import "./footer.css";
import logo from './../assets/logo.png'
export function Footer(){
    return(
        <div className="container-footer">
            <div className="entity">
                <div className="e1">
                <a href="/">
               <img  className="logo " src={logo} style={{width:"50px",borderRadius:"50%"}}/>
                </a> 
                <h2 className="bounce-out-top">Happy Meal🍴</h2>
                </div> 
                <div className="e2">
                
            </div> 
            </div>
            
        </div>
    )

}