import React from "react";
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Link } from "react-router-dom";
import Cart from "../cart/cart";
import "./navbar.scss"
import { useState } from "react";

const Navbar = () =>{
    const [show,setShow]=useState(false)
    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="left"> 
                    <div className="item">
                        <img src="/images/en.png" alt="English flag"/>
                        <KeyboardArrowDownOutlinedIcon/>
                    </div>
                    <div className="item">
                        <span>USD</span>
                        <KeyboardArrowDownOutlinedIcon/>
                    </div>
                    <div className="item">
                        <Link className="link" to="products/1">Women</Link>
                    </div>
                    <div className="item">
                        <Link className="link" to="products/2">Men</Link>
                    </div>
                    <div className="item">
                        <Link className="link" to="products/3">Kids</Link>
                    </div>
                </div>
                <div className="center">
                    <Link className="link" to="/">Shoppy</Link>
                </div>
                <div className="right">
                    <div className="item">
                        <Link className="link" to="/">Home</Link>
                    </div>
                    <div className="item">
                        <Link className="link">About</Link>
                    </div>
                    <div className="item">
                        <Link className="link">Contact</Link>
                    </div>
                    <div className="item">
                        <Link className="link">Stores</Link>
                    </div>
                    <div className="icons">
                        <SearchOutlinedIcon/>
                        <PersonOutlineOutlinedIcon/>
                        <FavoriteBorderOutlinedIcon/>
                        <span className="cartIcon" onClick={(e)=>setShow(prev=>!prev)}>
                            <ShoppingCartOutlinedIcon />
                            <span className="count">0</span>
                            {show&&<Cart/>}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar