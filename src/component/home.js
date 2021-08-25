import react,{component,useState} from 'react';
import "./comp.css";
import amj from '../amj.jpg';



function Home(){
    return(
        <div className="home">
        <img src={amj} className="imge" />
        <span className="hom">
          <h2>
            Authentic Italian Restaurant
          </h2>
          <h5>
            Fell the authentic of our original dish and taste of italy
          </h5>
          <button className="ordrbtn">Order Now</button>
        </span>
      </div>

    )
}

export default Home;

