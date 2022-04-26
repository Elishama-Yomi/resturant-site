import React, { useState } from "react";
import './contact.css';

function Reservation() {
    const [name, setName] = useState("");
  
    function handleSubmit() {
      alert(`Congratulations ${name}! You have successfully booked your reservation. We look forward to hosting you.\n\n`);
      return false;
    }

    return (
      <div className="reserve">
        <strong><p>Fill in your details and preferences to make a reservation</p></strong>
        <br></br><br></br>
        <form onSubmit={handleSubmit}>
          <div style={{display:"flex", width:"95%"}}>
          <div className="res" style={{display:"flex", marginRight:"10px", float:"left"}}>
          <label className="da" htmlFor="date" style={{marginTop:"10px", }}>Date:</label>
          <input className="dt"
            type="date"
            id="date"
            placeholder=" "
          />
          </div><div className="res" style={{display:"flex", marginRight:"10px"}}>
          <label className="ti" htmlFor="time">Time: </label>
          <input className="dt"
            type="time"
            id="time"
          />
          </div>
          <input className="res" style={{ float:"right"}}
            type="number"
            placeholder="Number of Person(s)"
          />
          </div>
          
          <input className="res"
            onChange={(e) => setName(e.target.value) }
            type="text"
            placeholder="Your name"
          />
          <input className="res"
            type="email"
            placeholder="Your email address"
          />
          <input className="res"
            type="tel"
            placeholder="Your phone number"
          />
           <textarea className="res"
          placeholder="Comments"
          rows="4"/>
          
          <center>
          <button type="submit">Book Now</button>
          </center>
        </form>
      </div>
    );
  }
  
  export default Reservation;
  



       

       
        
        
 
