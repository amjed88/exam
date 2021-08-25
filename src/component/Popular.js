import react,{component,useState} from 'react';
import "./comp.css";
import Past from '../pasta.jpg';
import food from '../food.jpg';



function Popular(){
    return(
        <body>
            <h2>Pupular Menu</h2>
        <div className="popular">
            <span className="img1">
            <img src={Past} className="pasta" />
            <h4>
                Pasta carbonara
            </h4>
          <h5 className="h5">
              Creat as a starter , excellent as main meal
          </h5>
          <button className="ordrbtn1">Order Now</button>
            </span>
            <span className="img1">
            <img src={Past} className="pasta" />
            <h4>
                Pasta carbonara
            </h4>
          <h5 className="h5">
              Creat as a starter , excellent as main meal
          </h5>
          <button className="ordrbtn1">Order Now</button>
            </span>
            <span className="img1">
            <img src={Past} className="pasta" />
            <h4>
                Pasta carbonara
            </h4>
          <h5 className="h5">
              Creat as a starter , excellent as main meal
          </h5>
          <button className="ordrbtn1">Order Now</button>
            </span>
            <span className="img1">
            <img src={Past} className="pasta" />
            <h4>
                Pasta carbonara
            </h4>
          <h5 className="h5">
              Creat as a starter , excellent as main meal
          </h5>
          <button className="ordrbtn1">Order Now</button>
            </span>
        </div>
        <img src={food} className="food" />
        <span className="manfood">
          <h2>
            Food for the soul
          </h2>
          <h5>
            Fell the authentic of our original dish and taste of italy
          </h5>
          <button className="ordrbtn">See Menu</button>
        </span>
        </body>
    )
}

export default Popular;