import react, { component, useState } from 'react';
import "./comp.css";
import about from '../about.jpg';
import food from '../food.jpg';




function Home() {
    return (
        <body>
            <h2>About Our Restaurant</h2>
            <div className="about">
                <img src={about} className="abimge" />
                <span className="abo">
                    <h4>
                        Welcom To:
                    </h4>
                    <h1>
                        Napoli Restaurant
                    </h1>
                    <p>
                        But i must explain you how all this mistaken all this idea of denouncin
                    </p>
                </span>
            </div>
            <div className="abot">
            <img src={food} className="food2" />
            <span className="manfood2">
                <h2>
                    Food for the soul
                </h2>
                <h5>
                    Fell the authentic of our original dish and taste of italy
                </h5>
                <button className="ordrbtn">See Menu</button>
            </span>
            </div>
        </body>

    )
}

export default Home;