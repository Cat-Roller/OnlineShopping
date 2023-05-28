import React from "react";
import "./product.scss"
import { useState } from "react";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceSharpIcon from '@mui/icons-material/BalanceSharp';


const Product = ()=>{
    const images = [
        "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" ,
        "https://images.pexels.com/photos/12179283/pexels-photo-12179283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ]
    const [selected,setSelected]=useState(0)
    const [quantity,setQuantity]=useState(1)
    return(
        <div className="product">
            <div className="left">
                <div className="images">
                    <img src={images[0]} alt="error" onClick={(e)=>setSelected(0)}/>
                    <img src={images[1]} alt="error" onClick={(e)=>setSelected(1)}/>
                </div>
                <div className="mainImage">
                    <img src={images[selected]} alt="error"/>
                </div>
            </div>
            <div className="right">
                <h1>Title</h1>
                <span className="price">190$</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos illo dolor nulla, assumenda nobis temporibus provident quas libero, laboriosam aperiam non enim quasi. Aliquid fugit porro tempora alias numquam saepe?</p>
                <div className="quantity">
                    <button onClick={(e)=>quantity===1?setQuantity(1):setQuantity(prev=>prev-1)}>-</button>
                    {quantity}
                    <button onClick={(e)=>setQuantity(prev=>prev+1)}>+</button>
                </div>
                <button className="add">
                    <AddShoppingCartIcon/>
                    ADD TO CART
                </button>

                    <div className="item">
                        <FavoriteBorderIcon/>WISHLIST
                    </div>
                    <div className="item">
                        <BalanceSharpIcon/>COMPARE
                    </div>
                <div className="info">
                    <span>Vender: polo</span>
                    <span>Product type: T-shirt</span>
                    <span>Tags: T-Shirt Women Top</span>
                </div>
                <div className="info">
                    <span>DESCRIPTION</span>
                    <hr />
                    <span>ADDITIONAL INFORMATION</span>
                    <hr />
                    <span>FAQ</span>
                </div>
            </div>
        </div>
    )
}

export default Product;
