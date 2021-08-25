import react,{component,useState} from 'react';
import {Link ,NavLink} from 'react-router-dom'
import "./comp.css"


function navlink(){
    return(
            <ul className="ul">
                <Link className="a" to="/popular">Pupular</Link>
                <Link className="a" to="/menu">Menu</Link>
                <Link className="a" to="/About Us">About Us</Link>
                <Link className="a" to="/Contact Us">Contact Us</Link>

            </ul>  

    )
}

export default navlink;