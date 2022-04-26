import './contact.css'
import Reservation from './reservation';
const Contact = () => { 
    return (
       
       <div style={{display: "flex"}}>
            <div className='info'>
            <h1 className='contact'>Contact Us</h1>
                <br></br>
                <h2>It is very important to us that you have a great time at our restaurant in a pleasant atmosphere and delicious dishes are waiting for you.<br></br><br></br> We are always at your service!<br></br>Visit or contact us via our details below.</h2>
                <br></br>
                <p className="bottom"><img src="https://www.freeiconspng.com/thumbs/location-icon-png/location-map-pins-png-3.png" alt="Visit us at "/><span> 64, Xanthan Road, Atlanta, Georgia.</span></p>
                <p className="bottom"><img src="https://pnggrid.com/wp-content/uploads/2021/12/Email-Icon-Png-Transparent.png" alt="Email us at "/><span> info@seafoodrestaurant.org</span></p>
                <p className="bottom"><img src="https://www.freeiconspng.com/thumbs/phone-icon/office-phone-icon--25.png" alt="Call us at "/><span> +1(470)5130514</span></p>
            </div>
           
           <div >
        <Reservation />  
        </div>

        </div>
    )
}
export default Contact;