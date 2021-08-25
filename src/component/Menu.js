import react,{component,useState} from 'react';
import "./comp.css";
import cabbacy from '../cabbacy.jpg';
import pizza from '../pizaa.jpg';



function Popular(){
    return(
        <body>
            <h2>Our Menu</h2>
        <div className="cabbage">
            <span className="img2">
            <img src={cabbacy} className="cabb" />
            <h4>
                Cabbage Stew
            </h4>
          <h5 className="h5">
              Cabbage braised in tomato sauce
          </h5>
          <button className="ordrbtn1">Order Now</button>
            </span>
            <span className="img2">
            <img src={cabbacy} className="cabb" />
            <h4>
                Cabbage Stew
            </h4>
          <h5 className="h5">
              Cabbage braised in tomato sauce
          </h5>
          <button className="ordrbtn1">Order Now</button>
            </span>
            <span className="img2">
            <img src={cabbacy} className="cabb" />
            <h4>
                Cabbage Stew
            </h4>
          <h5 className="h5">
              Cabbage braised in tomato sauce
          </h5>
          <button className="ordrbtn1">Order Now</button>
            </span>
            <span className="img2">
            <img src={cabbacy} className="cabb" />
            <h4>
                Cabbage Stew
            </h4>
          <h5 className="h5">
              Cabbage braised in tomato sauce
          </h5>
          <button className="ordrbtn1">Order Now</button>
            </span>
        </div>
        <div className="cabbage2">
            <span className="img2">
            <img src={pizza} className="cabb" />
            <h4>
                Cabbage Stew
            </h4>
          <h5 className="h5">
              Cabbage braised in tomato sauce
          </h5>
          <button className="ordrbtn1">Order Now</button>
            </span>
            <span className="img2">
            <img src={pizza} className="cabb" />
            <h4>
                Cabbage Stew
            </h4>
          <h5 className="h5">
              Cabbage braised in tomato sauce
          </h5>
          <button className="ordrbtn1">Order Now</button>
            </span>
            <span className="img2">
            <img src={pizza} className="cabb" />
            <h4>
                Cabbage Stew
            </h4>
          <h5 className="h5">
              Cabbage braised in tomato sauce
          </h5>
          <button className="ordrbtn1">Order Now</button>
            </span>
            <span className="img2">
            <img src={pizza} className="cabb" />
            <h4>
                Cabbage Stew
            </h4>
          <h5 className="h5">
              Cabbage braised in tomato sauce
          </h5>
          <button className="ordrbtn1">Order Now</button>
            </span>
        </div>
        </body>
    )
}

export default Popular;