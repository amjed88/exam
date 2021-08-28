import react,{component,useState} from 'react';
import {Link ,NavLink} from 'react-router-dom'
import "./comp.css"


function navlink(props){
    return(
            <ul className="ul">
                <Link className="a" to="/popular"  onClick={()=>props.action? props.action(false):{}} >Pupular</Link>
                <Link className="a" to="/menu" onClick={()=>props.action? props.action(false):{}}>Menu</Link>
                <Link className="a" to="/About Us" onClick={()=>props.action? props.action(false):{}}>About Us</Link>
                <Link className="a" to="/Contact Us" onClick={()=>props.action? props.action(false):{}}>Contact Us</Link>

            </ul>  

    )
}

export default navlink;