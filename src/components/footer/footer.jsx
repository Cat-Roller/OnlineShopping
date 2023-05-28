import React from "react";
import './footer.scss'

const Footer = () =>{
    return (
        <div className="footer">
            <div className="top">
                <div className="item">
                    <h1>Links</h1>
                    <div>FAQ</div>
                    <div>Pages</div>
                    <div>Stores</div>
                    <div>Compare</div>
                    <div>Cookies</div>
                </div>
                <div className="item">
                    <h1>Categories</h1>
                    <div>Men</div>
                    <div>Women</div>
                    <div>Shoes</div>
                    <div>New Collection</div>
                </div>
                <div className="item">
                    <h1>About</h1>
                    <div>No es mi moriator pero esto es tu, yo tu quiero mas, chico.
                        Tu hermana esta buena, yo quiero ella tambien bebe. Yo quiero tus tambienes,
                        i cant {";("}Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eros nunc,
                        gravida ac blandit et, iaculis eget velit. Vivamus sed odio mi. Fusce in ante ut risus.
                    </div>
                </div>
                <div className="item">
                    <h1>Contact</h1>
                    <div>No es mi moriator pero esto es tu, yo tu quiero mas, chico.
                        Tu hermana esta buena, yo quiero ella tambien bebe. Yo quiero tus tambienes,
                        i cant {";("}Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eros nunc,
                        gravida ac blandit et, iaculis eget velit. Vivamus sed odio mi. Fusce in ante ut risus.
                    </div>
                </div>
            </div>
            
            <div className="bottom">
                <div className="left">
                    <span className="logo">Shoppy</span>
                    <span className="copyright">&#169;Copyright 2023. All Rights Reserved</span>
                </div>
                <div className="right">
                    <img src="/images/payment.png" alt="safeness guarantee" />
                </div>
            </div>
        </div>
    )
}

export default Footer