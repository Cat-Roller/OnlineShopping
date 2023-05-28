import React from "react";
import "./card.scss"
import { Link } from "react-router-dom";

const Card=({item})=>{
    return(    
        <Link to={`/product/${item.id}`} className="link" >
            <div className="card">
                <div className="image">
                    {item.isNew && <span>New Collection</span>}
                    <img src={item.image} alt="main image" className="img"/>
                    <img src={item.image2} className="secondImg"/>
                </div>
                <h2>{item.title}</h2>   
                <div className="prices">
                    <h3 className="old">${item.oldPrice}</h3>
                    <h3>${item.price}</h3>
                </div>
            </div>
        </Link>
    )
}

export default Card;