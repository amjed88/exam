import react, { component, useState } from 'react';
import "./comp.css";
import cabbacy from '../cabbacy.jpg';
import pizza from '../pizaa.jpg';
import React, { useEffect } from 'react'
import GoogleMapReact from 'google-map-react';
import emailjs from 'emailjs-com';

let mapOptions = {
    center: { lat: 39.56939, lng: -40.0000 },
    zoom: 3.5,
    disableDefaultUI: true,
    gestureHandling: 'none',
    zoomControl: false,
    scaleControl: false,
    zoomControlOptions: false,
    scrollwheel: false,
    panControl: false,
};
function Contact({ data, state }) {
const [fname,setfname]=useState("First name");
const [lname,setflname]=useState("Last name");
const [email,setemail]=useState("Email");
const sendemail=(e)=>{
    e.preventDefault();
    emailjs.sendForm('service_awuemjh','template_myj7ofj',e.target,'user_mFuxfrBlI7iQS2PkQ2pNa').then(res=>{
        console.log(res);
    }).catch(err=>console.log(err));
}

    return (
        <form className="contact-form" onSubmit={sendemail}>
        <div className="contact">
            <span className="input">
                <input type="text" name="name" className="name" value={fname} onChange={(e)=>setfname(e.target.value)} />
                <input type="text" name="last" className="last" value={lname} onChange={(e)=>setflname(e.target.value)} />
                <input type="email" name="yoremail" className="email" value={email} onChange={(e)=>setemail(e.target.value)} />
                <textarea name="message"  className="messag" rows="4" cols="50" />
                <button className="sendbtn" >Send</button>

            </span>
            <div class="mapouter"><div class="gmap_canvas"><iframe class="gmap_iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=iraq&amp;t=h&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href="https://www.fnfgo.com/">Friday Night Funkin Mods</a></div><style></style></div>
        </div>
        </form>
    )
}

export default Contact;