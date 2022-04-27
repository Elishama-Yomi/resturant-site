import React from 'react';
import "./products.css"
import a from "./images/1.png";
import b from "./images/2.png";
import c from "./images/3.png";
import d from "./images/4.png";
import e from "./images/5.png";
import f from "./images/6.png";
import g from "./images/7.png";
import h from "./images/8.png";
import i from "./images/9.png";
import j from "./images/10.png";
import k from "./images/11.png";

const products = [
    { id: 1, category: "Appetizers, Dinner", name: "New England Clam Chowder", description: "Thick, Creamy & delicious…The best in town!", amount: 6.00, currency: "USD", currencySymbol: "$", img: a},
    { id: 2, category: "Appetizers (lunch)", name: "Peel & Eat Shrimp", description: "Served with our horseradish cocktail sauce & lemon wedge. (Approximately 6 Shrimp per 1/4 Lb.)", amount: 15.00, currency: "USD", currencySymbol: "$", img: b},
    { id: 3, category: "Dinner", name: "Ahi Tuna", description: " 8oz. fire red fillet coated in roasted sesame seeds, seared rare and served with a wasabi dipping sauce.", amount: 23.00, currency: "USD", currencySymbol: "$", img: c},
    { id: 4, category: "Kids Menu", name: "Kid’s Chicken Nuggets", description: "with your choice of barbecue, sweet & sour or honey mustard dipping sauce.", amount: 5.50, currency: "USD", currencySymbol: "$", img: d},
    { id: 5, category: "Dinner", name: "Farm Raised Catfish Dinner", description: "Delicious fillet lightly breaded and fried or grilled. Served with your choice of two- Salad, Potato &/or our Vegetable of the day.", amount: 18.50, currency: "USD", currencySymbol: "$", img: e},
    { id: 6, category: "Dinner", name: "Cheeseburger", description: "Fresh ground sirloin topped with choice of cheese and all the fixings on a toasted Brioche bun. Choice of cheese: Provolone, Cheddar or Pepper jack. Burger served with soup or salad and fries.", amount: 12.50, currency: "USD", currencySymbol: "$", img: f},
    { id: 7, category: "Dinner", name: "Yellow Perch", description: "Succulent perch fillets served deep fried, grilled or try Cajun style. ", amount: 28.00, currency: "USD", currencySymbol: "$", img: g},
    { id: 8, category: "Tempting Combos, Dinner", name: "House Combo Platter", description: "7 oz. of tender Fresh Sea Scallops with 5 Jumbo Tiger Shrimp. Served with two sides.", amount: 35.50, currency: "USD", currencySymbol: "$", img: h},
    { id: 9, category: "Dinner", name: "Yellow Perch * Fish & Chips", description: "Served with two sides.", amount: 25.00, currency: "USD", currencySymbol: "$", img: i},
    { id: 10, category: "Dinner,Soups & Salads", name: "House Salad", description: "Fresh iceburg & romaine with cucumber, tomato and homemade croutons. Served with your choice of dressing.", amount: 4.50, currency: "USD", currencySymbol: "$", img: j},
    { id: 11, category: "Dinner", name: "French Onion Soup", description: "Made from scratch. Our French onion is smothered in fresh croutons and melted provolone cheese.", amount: 6.00, currency: "USD", currencySymbol: "$", img: k}
]



function Products(){

    return (
        <>
        <div>
                <div className="container">
                    <h1 className='menu'>Menu Items</h1>
                <div className="boxy">
               {products && products.map((item, i ) =>{
        
                return(
             
               <div className="box" key={i} style={{ padding: "25px", margin: "30px"}}>
                <h2> {item.name} </h2><br></br>
                <img src={item.img} alt="Loading..." />
                <br></br><p> {item.description} </p>
                <h3 style={{ display: "block", padding: "3px" }}><strong>Price: {item.currencySymbol}{item.amount}</strong> </h3>
               </div>
                    )
                })}
               </div>
                </div>        
       </div>

                </>
                )
}




                export default Products;



